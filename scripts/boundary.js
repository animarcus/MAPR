class Boundary {
    constructor(x1, y1, x2, y2, hex="#FF0000", opacity=1, height0=document.getElementById("sliderH0").value, height1=document.getElementById("sliderH1").value) {
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
        line(cameraOffsetX(this.pos.x), cameraOffsetY(this.pos.y), cameraOffsetX(this.pos.x + this.dir.x), cameraOffsetY(this.pos.y + this.dir.y), this.hex, 3);
        // ellipse(this.pos.x, this.pos.y, dotSize, dotSize, 'green');
        // ellipse(this.pos.x + this.dir.x, this.pos.y + this.dir.y, dotSize, dotSize, 'red');
        ellipse(cameraOffsetX(this.pos.x), cameraOffsetY(this.pos.y), dotSize, dotSize, this.hex);
        ellipse(cameraOffsetX(this.pos.x + this.dir.x), cameraOffsetY(this.pos.y + this.dir.y), dotSize, dotSize, this.hex);
        if (showWallNums) {
            ctx.save();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.font = "30px Arial";
            ctx.fillStyle = 'white';
            ctx.fillText(this.index, cameraOffsetX((this.pos.x * 2 + this.dir.x) / 2) - 10, canvas2D.height - cameraOffsetY((this.pos.y * 2 + this.dir.y)/2));
            ctx.restore();
        }
        set3Dctx();
    }

    willCollideAfterMove(dir, step, radius) {
        const C = vectorAdd(player.pos, vectorMult(dir, step));
        const A = this.pos
        const B = vectorAdd(this.pos, this.dir)

        const AC = vectorSubtract(C, A);
        const AB = this.dir;
        const BC = vectorSubtract(C, B);

        if (vectorDist(AC.x, AC.y) <= radius || vectorDist(BC.x, BC.y) <= radius) {
            return true;
        }

        // https://en.wikipedia.org/wiki/Vector_projection projecting AC on AB, gives magnitude of b of where new point lies
        const d = vectorDotProduct(AC, AB) / vectorDotProduct(AB, AB)
        if (d >= 1 || d < 0) return false;
        const proj = vectorCreate(A.x + d * AB.x, A.y + d * AB.y)
        const DC = vectorSubtract(C, proj);
        const l = vectorDist(DC.x, DC.y);
        if (l <= radius) return true;
        return false;
    }
    collidesWithCircle(radius) {
        const C = player.pos;
        const A = this.pos
        const B = vectorAdd(this.pos, this.dir)

        const AC = vectorSubtract(C, A);
        const AB = this.dir;
        const BC = vectorSubtract(C, B);

        if (vectorDist(AC.x, AC.y) <= radius || vectorDist(BC.x, BC.y) <= radius) {
            return true;
        }

        // https://en.wikipedia.org/wiki/Vector_projection projecting AC on AB, gives magnitude of b of where new point lies
        const d = vectorDotProduct(AC, AB) / vectorDotProduct(AB, AB)
        if (d > 1 || d < 0) return false;
        const proj = vectorCreate(A.x + d * AB.x, A.y + d * AB.y)
        const DC = vectorSubtract(C, proj);
        const l = vectorDist(DC.x, DC.y);
        if (l <= radius) return true;
        return false;
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
            && (this.p.dist <= player.farSight && this.p.dist <= player.farSight) &&
            (this.h.dist <= player.farSight && this.h.dist <= player.farSight)
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
            ellipse(cameraOffsetX(player.pos.x + this.p.x), cameraOffsetY(player.pos.y + this.p.y), 10, 10, 'yellow');
            line(   cameraOffsetX(player.pos.x),            cameraOffsetY(player.pos.y),
                    cameraOffsetX(player.pos.x + this.p.x), cameraOffsetY(player.pos.y + this.p.y), 'purple', 5);
            ellipse(cameraOffsetX(player.pos.x + this.h.x), cameraOffsetY(player.pos.y + this.h.y), 10, 10, 'cyan');
            line(   cameraOffsetX(player.pos.x),            cameraOffsetY(player.pos.y),
                    cameraOffsetX(player.pos.x + this.h.x), cameraOffsetY(player.pos.y + this.h.y), 'purple', 5);
            set3Dctx();
        }
        return true;
    }

    calculate3D() {
        const fovamount = player.fov.xamount;

        if (this.p.dist <= 0.1) this.p.dist = 0.1;
        if (this.h.dist <= 0.1) this.h.dist = 0.1;

        this.p = vectorNormalize(this.p);
        this.h = vectorNormalize(this.h);
        const dir = vectorNormalize(player.dir, Math.sqrt((player.dir.y) ** 2 + (player.dir.x) ** 2));

        let v1xangle = vectorAngleBetween(dir, this.p);
        let v2xangle = vectorAngleBetween(this.p, this.h);
        v2xangle += v1xangle;

        this.p.dist *= Math.cos(v1xangle);
        this.x1 = degrees(v1xangle) * canvas.width / fovamount;
        this.h1 = this.calculateHeight(this.p);

        this.h.dist *= Math.cos(v2xangle);
        this.x2 = degrees(v2xangle) * canvas.width / fovamount;
        this.h2 = this.calculateHeight(this.h);
    }
    calculateHeight(v) { // simple proportion calculations
        const h0 = this.height0 - player.height;
        const h1 = this.height1 - player.height;
        const floor = -player.height;
        return {
            'floor': (floor * canvas.height) / (-Math.tan(radians(player.fov.yamount)) * v.dist),
            'h0':    (h0 * canvas.height) / (-Math.tan(radians(player.fov.yamount)) * v.dist),
            'h1':    (h1 * canvas.height) / (-Math.tan(radians(player.fov.yamount)) * v.dist)
        };
    }

    display3D() {
        const maxl = 0;
        const minl = -0.75; // maximum darkness for color
        const a = camera.viewX*1.3; // distance until it gets completely darkened
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

        // console.log(this.hex)
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

function hexToHSL(H) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length == 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
        h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return {
        "h": h,
        "s": s,
        "l": l
    }
}
