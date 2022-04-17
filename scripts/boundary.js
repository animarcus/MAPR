class Boundary {
    constructor(x1, y1, x2, y2, hex="#FF0000", opacity=0.5, height0=document.getElementById("sliderH0").value, height1=document.getElementById("sliderH1").value) {
        this.pos = {
            'x': x1,
            'y': y1
        };
        this.dir = {
            'x': x2 - x1,
            'y': y2 - y1,
        };
        wallCount++;
        this.index = wallCount -1;
        this.length = Math.sqrt((this.dir.x) * (this.dir.x) + (this.dir.y) * (this.dir.y));

        this.rotation = getRotation(this.pos, this.dir);
        this.opacity = opacity;
        this.hex = hex

        this.height0 = height0;
        this.height1 = height1;
    }

    draw() {
        set2Dctx();
        line(this.pos.x, this.pos.y, this.pos.x + this.dir.x, this.pos.y + this.dir.y, this.hex, 3);
        // ellipse(this.pos.x, this.pos.y, dotSize, dotSize, 'green');
        // ellipse(this.pos.x + this.dir.x, this.pos.y + this.dir.y, dotSize, dotSize, 'red');
        ellipse(this.pos.x, this.pos.y, dotSize, dotSize, this.hex);
        ellipse(this.pos.x + this.dir.x, this.pos.y + this.dir.y, dotSize, dotSize, this.hex);
        if (showWallNums) {
            ctx.save();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.font = "30px Arial";
            ctx.fillStyle = 'white';
            ctx.fillText(this.index, (this.pos.x*2 + this.dir.x)/2 - 10, canvas2D.height - (this.pos.y*2 + this.dir.y)/2 - 10);
            ctx.restore();
        }
        set3Dctx();
    }

    isInsideFOV() {
        this.p = {  // Creating vector going from player to wall's first vertex
            'x': this.pos.x - player.pos.x,
            'y': this.pos.y - player.pos.y
        };

        this.h = {  // Creating vector going from player to wall's first vertex
            'x': (this.pos.x + this.dir.x) - player.pos.x,
            'y': (this.pos.y + this.dir.y) - player.pos.y
        };
        
        this.p.dist = Math.sqrt((this.p.x) ** 2 + (this.p.y) ** 2);
        this.h.dist = Math.sqrt((this.h.x) ** 2 + (this.h.y) ** 2);

        if ((isIntersectionFovW(player.fov.v1, this) || isIntersectionFovW(player.fov.v2, this)) ||
            (isClockwiseOrder(player.fov.v1.dir, this.p) && !isClockwiseOrder(player.fov.v2.dir, this.p) &&
            isClockwiseOrder(player.fov.v1.dir, this.h) && !isClockwiseOrder(player.fov.v2.dir, this.h) 
            // && (this.p.dist <= player.fov.v1.dir.length*2 && this.p.dist <= player.fov.v2.dir.length*2) &&
            // (this.h.dist <= player.fov.v1.dir.length*2 && this.h.dist <= player.fov.v2.dir.length*2)
            )
        ) return true;
    }

    processFOV() {
        // make sure v1 is always to the left of v2
        if (!isClockwiseOrder(this.p, this.h)) {
            let vtemp = this.p;
            this.p = this.h;
            this.h = vtemp;
        }

        //  redefine wall if it intersects with LEFT fov ray
        if (!isClockwiseOrder(player.fov.v1.dir, this.p) && isClockwiseOrder(player.fov.v1.dir, this.h)) {
            this.p = intersectionFovW(player.fov.v1, this);
            this.p.x -= player.pos.x;
            this.p.y -= player.pos.y;
        }

        //  redefine wall if it intersects with RIGHT fov ray
        if (!isClockwiseOrder(player.fov.v2.dir, this.p) && isClockwiseOrder(player.fov.v2.dir, this.h)) {
            this.h = intersectionFovW(player.fov.v2, this);
            this.h.x -= player.pos.x;
            this.h.y -= player.pos.y;
        }

        // debugging  2D Representation
        if (show2D2) {
            set2Dctx();
            ellipse(player.pos.x + this.p.x, player.pos.y + this.p.y, 10, 10, 'yellow');
            line(player.pos.x, player.pos.y, player.pos.x + this.p.x, player.pos.y + this.p.y, 'purple', 5);
            ellipse(player.pos.x + this.h.x, player.pos.y + this.h.y, 10, 10, 'cyan');
            line(player.pos.x, player.pos.y, player.pos.x + this.h.x, player.pos.y + this.h.y, 'purple', 5);
            set3Dctx();
        }
        return true;
    }

    calculate3D() {
        const fovamount = player.fov.xamount;

        this.p = vectorNormalize(this.p);
        this.h = vectorNormalize(this.h);
        const dir = vectorNormalize(player.dir, Math.sqrt((player.dir.y) ** 2 + (player.dir.x) ** 2));

        let v1xangle = Math.acos(vectorDotProduct(this.p, dir));        // get angle between dir and v1   vectors are normalized so the dotproduct will give a value between -1 and 1
        let v2xangle = Math.acos(vectorDotProduct(this.h, this.p));     // get angle between v1 and v2
                                                                        // angles are calculated using | adjacent / hypothenuse
                                                                        // hypothenuse is 1 because v1/v1 was normalized (no denominator)
                                                                        // adjacent is v1/v1 projected onto the dir for the adjacent side of the triangle (or relative to the other v1/v2)

        if (!isClockwiseOrder(dir, this.p)) v1xangle = -v1xangle;  // correct sign depending on side of v1/v2
        if (!isClockwiseOrder(this.p, this.h)) v2xangle = -v2xangle;

        v2xangle = v2xangle + v1xangle; // make v2 relative to v1

        this.p.dist *= Math.cos(v1xangle);

        let newp = [];
        newp[0] = Math.sin(v1xangle)*this.p.dist;
        
        let a = performance.now();
        for (let i=0; i<10000000; i++) {
            newp[1] = Math.cos(v1xangle)*this.p.dist;
        }
        let trig = performance.now() - a
        a = performance.now()
        for (let i=0; i<10000000; i++) {
            newp[1] = Math.sqrt(this.p.dist*this.p.dist - newp[0]*newp[0]);
        }
        let pyth = performance.now() - a

        console.log("-----------")
        if (trig > pyth) {
            console.log("pyth is faster, diff:", trig - pyth)
        } else if (trig > pyth) {
            console.log("trig is faster, diff:", pyth - trig)
        } else {
            console.log("tie")
        }
        console.log("-----------")

        this.x1 = degrees(v1xangle) * canvas.width / fovamount;
        this.h1 = this.calculateHeight(this.p);

        this.h.dist *= Math.cos(v2xangle);
        this.x2 = degrees(v2xangle) * canvas.width / fovamount;
        this.h2 = this.calculateHeight(this.h);

        if (this.h1 > 10000) this.h1 = 10000;
        if (this.h2 > 10000) this.h2 = 10000;
    }

    calculateHeight(v) { // simple proportion calculations
        const h0 = vectorCreate(v.dist, this.height0 - player.height);
        const h1 = vectorCreate(v.dist, this.height1 - player.height);
        const floor = vectorCreate(v.dist, -player.height);
        return {
            'floor': (floor.y * canvas.height) / (-Math.tan(radians(player.fov.yamount)) * v.dist),
            'h0':    (h0.y * canvas.height) / (-Math.tan(radians(player.fov.yamount)) * v.dist),
            'h1':    (h1.y * canvas.height) / (-Math.tan(radians(player.fov.yamount)) * v.dist),
            'sat': 1, 
            'dist': v.dist
        };
    }

    display3D() {
        const maxl = 0;
        const minl = -0.75; // maximum darkness for color
        const a = canvas2D.width/1.2; // distance until it gets completely darkened
        const n = 2 // if pair, makes the curves more "square"

        // function determined with https://math.stackexchange.com/questions/2170013/looking-for-a-decreasing-function-which-initially-decreases-slowly-and-then-decr
        let L1 = -((this.p.dist / a) ** n); // decreasing exponential function
        if (L1 < minl) L1 = minl;
        if (L1 > maxl) L1 = maxl;

        let L2 = -((this.h.dist / a) ** n);
        if (L2 < minl) L2 = minl;
        if (L2 > maxl) L2 = maxl;

        const grd = ctx.createLinearGradient(this.x1 + canvas.width / 2, canvas.height / 2,
                    this.x2 + canvas.width / 2, canvas.height / 2);

        grd.addColorStop(0, shadeHexColor(this.hex, L1));
        grd.addColorStop(1, shadeHexColor(this.hex, L2));
        ctx.fillStyle = grd;
        
        let tmpalpha = ctx.globalAlpha;
        ctx.globalAlpha = this.opacity;
        if (sortedActive) {  // adds color under the wall to hide any overlap
            polygon([   this.x1 + canvas.width / 2, this.h1.floor + canvas.height /2,
                    this.x2 + canvas.width / 2, this.h2.floor + canvas.height /2,
                    this.x2 + canvas.width / 2, this.h2.floor - canvas.height,
                    this.x1 + canvas.width / 2, this.h1.floor - canvas.height,
            ], color["dark-gray"], 0);
        }
        polygon([this.x1 + canvas.width / 2, this.h1.h0 + canvas.height / 2,
        this.x1 + canvas.width / 2, this.h1.h1 + canvas.height /2,
        this.x2 + canvas.width / 2, this.h2.h1 + canvas.height /2,
        this.x2 + canvas.width / 2, this.h2.h0 + canvas.height /2
        ], `grd`, 2);

        ctx.globalAlpha = tmpalpha;
    }

    setAngle(angle) {
        this.dir.x = Math.cos(angle) * this.length;
        this.dir.y = Math.sin(angle) * this.length;
        this.rotation = getRotation(this.pos, this.dir);
    }
}

// https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#----update---version-2-with-blending---
function shadeHexColor(color, percent) {
    var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}

// https://stackoverflow.com/a/8027526
function isHexColor(hex) {
    return typeof hex === 'string'
        && hex.length === 6
        && !isNaN(Number('0x' + hex))
}

// https://stackoverflow.com/a/44134328
function hslToHex(h, s, l) {
    if (isHexColor(h)) return h
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}
