class Boundary {
    constructor(x1, y1, x2, y2, hue="0") {
        // console.log(Math.round(x1), Math.round(y1), Math.round(x2), Math.round(y2));
        this.pos = {
            'x': x1,
            'y': y1
        };
        this.header = {
            'x': x2 - x1,
            'y': y2 - y1,
        };
        wallCount++;
        this.index = wallCount -1;
        this.length = Math.sqrt((this.header.x) * (this.header.x) + (this.header.y) * (this.header.y));

        this.rotation = getRotation(this.pos, this.header);
        console.log(hue)
        this.hue = hue; //colorpicker element in main.js
        this.opacity = 0.5;

        this.height0 = 0;
        this.height1 = 500;

        
    }

    draw() {
        line(this.pos.x, this.pos.y, this.pos.x + this.header.x, this.pos.y + this.header.y, "hsl(" + this.hue + ", 100, 50)", 3);
        ellipse(this.pos.x, this.pos.y, 5, 5, 'green');
        ellipse(this.pos.x + this.header.x, this.pos.y + this.header.y, 5, 5, 'red');
        // ellipse(this.pos.x, this.pos.y, 2, 2, 'white');  // green
        // ellipse(this.pos.x + this.header.x, this.pos.y + this.header.y, 2, 2, 'white'); // red

        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.font = "30px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText(this.index, (this.pos.x*2 + this.header.x)/2 - 10, canvas.height - (this.pos.y*2 + this.header.y)/2 - 10);
        ctx.restore();
    }

    isInsideFOV() {
        this.p = {  // Creating vector going from player to wall's first vertex
            'x': this.pos.x - player.pos.x,
            'y': this.pos.y - player.pos.y
        };

        this.h = {  // Creating vector going from player to wall's first vertex
            'x': (this.pos.x + this.header.x) - player.pos.x,
            'y': (this.pos.y + this.header.y) - player.pos.y
        };

        if ((isIntersection(player.fov.v1, this) || isIntersection(player.fov.v2, this)) ||
            (isClockwiseOrder(player.fov.v1.header, this.p) && !isClockwiseOrder(player.fov.v2.header, this.p) &&
            isClockwiseOrder(player.fov.v1.header, this.h) && !isClockwiseOrder(player.fov.v2.header, this.h))
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
        if (!isClockwiseOrder(player.fov.v1.header, this.p) && isClockwiseOrder(player.fov.v1.header, this.h)) {
            this.p = intersection(player.fov.v1, this);
            this.p.x -= player.pos.x;
            this.p.y -= player.pos.y;
        }

        //  redefine wall if it intersects with RIGHT fov ray
        if (!isClockwiseOrder(player.fov.v2.header, this.p) && isClockwiseOrder(player.fov.v2.header, this.h)) {
            this.h = intersection(player.fov.v2, this);
            this.h.x -= player.pos.x;
            this.h.y -= player.pos.y;
        }
        this.p.dist = Math.sqrt((this.p.x) ** 2 + (this.p.y) ** 2);
        this.h.dist = Math.sqrt((this.h.x) ** 2 + (this.h.y) ** 2);

        // debugging
        if (show2D2) {
            ellipse(player.pos.x + this.p.x, player.pos.y + this.p.y, 10, 10, 'yellow');
            line(player.pos.x, player.pos.y, player.pos.x + this.p.x, player.pos.y + this.p.y, 'purple', 5);
            ellipse(player.pos.x + this.h.x, player.pos.y + this.h.y, 10, 10, 'cyan');
            line(player.pos.x, player.pos.y, player.pos.x + this.h.x, player.pos.y + this.h.y, 'purple', 5);
        }
        return true;
    }

    calculate3D() {
        const fovamount = player.fov.xamount;

        this.p = vectorNormalize(this.p);
        this.h = vectorNormalize(this.h);
        const header = vectorNormalize(player.header, Math.sqrt((player.header.y) ** 2 + (player.header.x) ** 2));

        let v1xangle = Math.acos(vectorDotProduct(this.p, header));        // get angle between header and v1   vectors are normalized so the dotproduct will give a value between -1 and 1
        let v2xangle = Math.acos(vectorDotProduct(this.h, this.p));       // get angle between v1 and v2
                                                                            // angles are calculated using | adjacent / hypothenuse
                                                                            // hypothenuse is 1 because v1/v1 was normalized (no denominator)
                                                                            // adjacent is v1/v1 projected onto the header for the adjacent side of the triangle (or relative to the other v1/v2)

        if (!isClockwiseOrder(header, this.p)) v1xangle = -v1xangle;  // correct sign depending on side of v1/v2
        if (!isClockwiseOrder(this.p, this.h)) v2xangle = -v2xangle;

        v2xangle = v2xangle + v1xangle; // make v2 relative to v1

        this.p.projectedDist = this.p.dist * Math.cos(v1xangle) // correcting the projection because otherwise we get some kind of fisheye effect
        this.x1 = degrees(v1xangle) * canvas.width / fovamount;
        this.h1 = this.calculateHeight(this.p);

        this.h.projectedDist = this.h.dist * Math.cos(v2xangle) // correcting the projection because otherwise we get some kind of fisheye effect
        this.x2 = degrees(v2xangle) * canvas.width / fovamount;
        this.h2 = this.calculateHeight(this.h);
        // console.log(this.h2.h0, this.h2.h1, this.h2.dist);

        // this.display3D();
    }

    //works by supposing a 2d side view of the player looking at the wall and using trigonometry to find the angle of the top and bottom of the wall
    calculateHeight(v) {
        const header = vectorCreate(v.projectedDist, 0);
        const h0 = vectorCreate(v.projectedDist, this.height0 - player.height);
        const h1 = vectorCreate(v.projectedDist, this.height1 - player.height);


        let anglev1 = Math.acos((vectorDotProduct(header, h0)) / (vectorDist(h0.x, h0.y) * v.projectedDist));
        let anglev2 = Math.acos((vectorDotProduct(header, h1)) / (vectorDist(h1.x, h1.y) * v.projectedDist));

        // console.log(Math.round(vectorDist(h1.x, h1.y)), Math.round(degrees(anglev2)), Math.round(h1.y))
        if (isClockwiseOrder(header, h0)) anglev1 = -anglev1;
        if (isClockwiseOrder(header, h1)) anglev2 = -anglev2;

        return {
            'h0': 1 * degrees(anglev1) * canvas.height / player.fov.yamount * 2,
            'h1': 1 * degrees(anglev2) * canvas.height / player.fov.yamount * 2,
            'sat': 1,
            'dist': v.projectedDist
        };
    }




    display3D() {
        // const fovamount = player.fov.xamount;
        // const fov = player.fov;
        // const fovmax = player.header.length;
        // const hue = fov;
        const minh = 25;
        const maxh = 50;
        const ver = maxh - minh;
        const hor = 450;
        const a = -ver/hor;
        // function determined with https://math.stackexchange.com/questions/2170013/looking-for-a-decreasing-function-which-initially-decreases-slowly-and-then-decr
        let L1 = this.p.projectedDist * a + maxh;
        if (L1 < minh) L1 = minh;
        if (L1 > maxh) L1 = maxh;

        let L2 = this.h.projectedDist * a + maxh;
        if (L2 < minh) L2 = minh;
        if (L2 > maxh) L2 = maxh;

        const grd = ctx.createLinearGradient(this.x1 + canvas.width / 2, canvas.height / 2,
                    this.x2 + canvas.width / 2, canvas.height / 2);

        grd.addColorStop(0, `hsla(${this.hue}, 100%, ${L1}%, 1)`);
        grd.addColorStop(1, `hsla(${this.hue}, 100%, ${L2}%, 1)`);
        // grd.addColorStop(0, "red");
        // grd.addColorStop(1, 'white');
        ctx.fillStyle = grd;
        // this.hue = grd;

        polygon([this.x1 + canvas.width / 2, this.h1.h0 + canvas.height / 2,
        this.x1 + canvas.width / 2, this.h1.h1 + canvas.height / 2,
        this.x2 + canvas.width / 2, this.h2.h1 + canvas.height / 2,
        this.x2 + canvas.width / 2, this.h2.h0 + canvas.height / 2
        ], `grd`); // `hsla(1, 50%, 50%, 0.5)`
    }





    setAngle(angle) {
        this.header.x = Math.cos(angle) * this.length;
        this.header.y = Math.sin(angle) * this.length;
        this.rotation = getRotation(this.pos, this.header);
        // console.log(this.header.x, this.header.y);
        // this.length = Math.sqrt((this.header.x)*(this.header.x) - (this.header.y)*(this.header.y));
    }
}
