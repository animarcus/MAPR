class Boundary {
    constructor(x1, y1, x2, y2) {
        // console.log(Math.round(x1), Math.round(y1), Math.round(x2), Math.round(y2));
        this.pos = {'x': x1,
                    'y': y1 };
        this.header = { 'x': x2 - x1,
                        'y': y2 - y1,
                        };
        this.length = Math.sqrt((this.header.x)*(this.header.x) + (this.header.y)*(this.header.y))

        this.rotation = getRotation(this.pos, this.header);
        this.hue = 0;
        this.opacity = 0.5;

        this.height0 = 0;
        this.height1 = 500;
    }

    draw() {
        line(this.pos.x, this.pos.y, this.pos.x + this.header.x, this.pos.y + this.header.y, 'white', 3);
        ellipse(this.pos.x, this.pos.y, 5, 5, 'green');
        ellipse(this.pos.x + this.header.x, this.pos.y + this.header.y, 5, 5, 'red');
    }

    isInsideFov() {
        this.v1 = {  // Creating vector going from player to wall's first vertex
            'x': this.pos.x - player.pos.x,
            'y': this.pos.y - player.pos.y
        };
        this.v2 = {  // Creating vector going from player to wall's first vertex
            'x': (this.pos.x + this.header.x) - player.pos.x,
            'y': (this.pos.y  + this.header.y) - player.pos.y
        };
        const n = {
            'x': -player.header.y,
            'y': player.header.x
        };
        // console.log(isClockwiseOrder(player.fov.v1.header, this.v1),
        //             !isClockwiseOrder(player.fov.v2.header, this.v1),
        //             isClockwiseOrder(player.fov.v1.header, this.v2),
        //             !isClockwiseOrder(player.fov.v2.header, this.v2))
        if (((isIntersection(player.fov.v1, this) || isIntersection(player.fov.v2, this)) ||
            (isClockwiseOrder(player.fov.v1.header, this.v1) && !isClockwiseOrder(player.fov.v2.header, this.v1)) ||
            (isClockwiseOrder(player.fov.v1.header, this.v2) && !isClockwiseOrder(player.fov.v2.header, this.v2)))) {
            if (!isClockwiseOrder(this.v1, this.v2)) {
                let vtemp = this.v1;
                this.v1 = this.v2;
                this.v2 = vtemp;
            }
            // console.log((isIntersection(player.fov.v1, this) || isIntersection(player.fov.v2, this)),
            //     (isClockwiseOrder(player.fov.v1.header, this.v1) && !isClockwiseOrder(player.fov.v2.header, this.v1)),
            //     (isClockwiseOrder(player.fov.v1.header, this.v2) && !isClockwiseOrder(player.fov.v2.header, this.v2)),
            //     isIntersection(player.fov.v1, this),
            //     isIntersection(player.fov.v2, this));

            if (!isClockwiseOrder(player.fov.v1.header, this.v1) && isClockwiseOrder(player.fov.v1.header, this.v2)) {
                // console.log("11111");
                this.v1 = intersection(player.fov.v1, this);
                this.v1.x -= player.pos.x;
                this.v1.y -= player.pos.y;
            }
            if (!isClockwiseOrder(player.fov.v2.header, this.v1) && isClockwiseOrder(player.fov.v2.header, this.v2)) {
                // console.log("22222");
                this.v2 = intersection(player.fov.v2, this);
                this.v2.x -= player.pos.x;
                this.v2.y -= player.pos.y;
            }
            // if (isClockwiseOrder(this.v1, ))
            // if (this.v1.dist > player.header.length*2 && this.v2.dist > player.header.length*2) return false;

            this.v1.dist = Math.sqrt((this.v1.x) ** 2 + (this.v1.y) ** 2);
            this.v2.dist = Math.sqrt((this.v2.x) ** 2 + (this.v2.y) ** 2);
            if (show2D2) {
                ellipse(player.pos.x + this.v1.x, player.pos.y + this.v1.y, 10, 10, 'yellow');
                line(player.pos.x, player.pos.y, player.pos.x + this.v1.x, player.pos.y + this.v1.y, 'purple', 5);
                ellipse(player.pos.x + this.v2.x, player.pos.y + this.v2.y, 10, 10, 'cyan');
                line(player.pos.x, player.pos.y, player.pos.x + this.v2.x, player.pos.y + this.v2.y, 'purple', 5);
            }
            return true;
        }
    }

    calculate3D() {
        const fovamount = player.fov.xamount;
        const fov = player.fov;

        this.v1 = vectorNormalize(this.v1);
        this.v2 = vectorNormalize(this.v2);
        const header = vectorNormalize(player.header,   Math.sqrt((player.header.y) ** 2 + (player.header.x) ** 2));
        // const header = player.header;

        const n = {
            'x': -player.header.y,
            'y': player.header.x
        }
        // ellipse(player.pos.x + this.v1.x*100, player.pos.y + this.v1.y*100, 10, 10, 'pink')

        // console.log(vectorDotProduct(this.v2, header));


        // const angleh = Math.atan2(header.y, header.x);
        // let anglev1 = Math.atan2(this.v1.y, this.v1.x);
        // let anglev2 = Math.atan2(this.v2.y, this.v2.x);
        
        ////////  α = arccos[(a . b) / (|a| * |b|)]        or    a · b = |a| * |b| * cos(α)

        let anglev1 = Math.acos(vectorDotProduct(this.v1, header));     // get angle between header and v1   vectors are normalized so the dotproduct will give a value between -1 and 1
        let anglev2 = Math.acos(vectorDotProduct(this.v2, this.v1));     // get angle between v1 and v2
                                                                        // angles are calculated using | adjacent / hypothenuse
                                                                        // hypothenuse is 1 because v1/v1 was normalized (no denominator)
                                                                        // adjacent is v1/v1 projected onto the header for the adjacent side of the triangle (or relative to the other v1/v2)


        if (!isClockwiseOrder(header, this.v1)) anglev1 = -anglev1;  // correct sign depending on side of v1/v2
        if (!isClockwiseOrder(this.v1, this.v2)) anglev2 = -anglev2;

        anglev2 = anglev2 + anglev1; // make v2 relative to v1


        // console.log(Math.round(degrees(anglev1)), Math.round(degrees(anglev2)));

        // this.v1.dist *= Math.cos(anglev1);
        // this.v2.dist *= Math.cos(anglev2);

        // console.log(Math.round(degrees(anglev1)), Math.round(degrees(anglev2)), vectorDotProduct(this.v2, header));

        this.v1.dist *= Math.cos(anglev1);
        const x1 = degrees(anglev1) * canvas.width/fovamount;
        let h1 = this.calculateHeight(this.v1);


        this.v2.dist *= Math.cos(anglev2);
        const x2 = degrees(anglev2) * canvas.width/fovamount;
        let h2 = this.calculateHeight(this.v2);


        this.display3D(x1, h1, x2, h2);
    }

    calculateHeight(v) {  //works by supposing a 2d side view of the player looking at the wall and using trigonometry to find the angle of the top and bottom of the wall
        const header = vectorCreate(v.dist, 0);
        // console.log(v.dist, this.height0 - player.height, this.height1 - player.height)
        // debugger;
        const h0 = vectorCreate(v.dist, this.height0 - player.height);
        const h1 = vectorCreate(v.dist, this.height1 - player.height);

        // console.log(h0, h1);
        let anglev1 = Math.acos((vectorDotProduct(header, h0)) / (vectorDist(h0.x, h0.y) * v.dist));
        let anglev2 = Math.acos((vectorDotProduct(header, h1)) / (vectorDist(h1.x, h1.y) * v.dist));

        if (isClockwiseOrder(header, h0)) anglev1 = -anglev1;
        if (isClockwiseOrder(header, h1)) anglev2 = -anglev2;
        // console.log(degrees(anglev1), degrees(anglev2), h1)




        // console.log(canvas.height / player.fov.yamount);

        return {
            'h0': degrees(anglev1) * canvas.height / player.fov.yamount,
            'h1': degrees(anglev2) * canvas.height / player.fov.yamount,
            'sat': 1
        };
    }




    display3D(x1, h1, x2, h2) {
        const fovamount = player.fov.xamount;
        const fov = player.fov;
        const fovmax = player.header.length;
        const hue = fov;

        const l1 = 50;
        const l2 = 50;
        // const grd = ctx.createLinearGradient(   x1 + canvas.width/2, canvas.height/2,
        //                                         x2 + canvas.width/2, canvas.height/2);

        // grd.addColorStop(0, `hsla(${this.hue}, 100%, ${l1}%, ${this.opacity})`);
        // grd.addColorStop(1, `hsla(${this.hue}, 100%, ${l2}%, 1)`);
        // grd.addColorStop(0, "red");
        // grd.addColorStop(1, 'white');
        // ctx.fillStyle = grd;
        // this.hue = grd;

        polygon([   x1 + canvas.width / 2,    h1.h0 +    canvas.height/2,
                    x1 + canvas.width / 2,    h1.h1 +    canvas.height/2,
                    x2 + canvas.width / 2,    h2.h1 +    canvas.height/2,
                    x2 + canvas.width / 2,    h2.h0 +    canvas.height/2
                    ], `hsla(1, 50%, 50%, 0.5)`);




        
        
        
        























































        return;
        // const fovamount = player.fov.amount;
        // const fov = player.fov;

        // this.v1 = vectorNormalize(this.v1);
        // this.v2 = vectorNormalize(this.v2);
        // const header = vectorNormalize(player.header,   Math.sqrt((player.header.y) ** 2 + (player.header.x) ** 2));


        // let dotab1 = Math.acos(vectorDotProduct(this.v1, header));  //angle between two vectors but without denominator because normalized vectors are length 1
        // if (!isClockwiseOrder(header, this.v1)) // makes sure that if angle on wrong side it's negative
        //     {
        //         dotab1 = -dotab1;
        //     }
        // let dotab2 = Math.acos(vectorDotProduct(this.v2, header));  //angle between two vectors but without denominator because normalized vectors are length 1
        // if (!isClockwiseOrder(header, this.v2)) // makes sure that if angle on wrong side it's negative
        //     {
        //         dotab2 = -dotab2;
        //     }
        // // if (degrees(dotab1) >= 0 && degrees(dotab1) <= fovamount) console.log('v1 inside of fov');
        // const x1 = degrees(dotab1) * canvas.width/fovamount;
        // let h1 = canvas.height - canvas.height/player.header.length * x1;
        // if (h1 < 0) h1 = 0;

        // const x2 = degrees(dotab2) * canvas.width/fovamount;
        // let h2 = canvas.height - canvas.height/player.header.length * x2;
        // if (h2 < 0) h2 = 0;
        // h1 = 100;
        // h2 = 100;
        // // console.log((dotab1), (dotab2));
        // // if (dotab1 > )
        // console.log(x1, degrees(dotab1));

        // polygon([   x1 + canvas.width/2, canvas.height/2 - h1,
        //             x1 + canvas.width/2, canvas.height/2 + h1,
        //             x2 + canvas.width/2, canvas.height/2 + h2,
        //             x2 + canvas.width/2, canvas.height/2 - h2
        //             ], 'rgba(100, 100, 100, 0.5)');

        // circle(x1 + canvas.width/2, canvas.height/2 - h1, 10);
        // circle(x1 + canvas.width/2, canvas.height/2 + h1, 10);
        // circle(x2, canvas.height/2 + h2, 10);
        // circle(x2, canvas.height/2 - h2, 10);





        //pos of wall
        // const wallx = this.repVectors.v1.header.x;
        // const wally = this.repVectors.v1.header.y;

        // const playerx = player.pos.x;
        // const playery = player.pos.y;
        // const walldist = {
        //     'header': {
        //         'x': wallx - playerx,
        //         'y': wally - playery
        //     }
        // };

        // const h = {
        //     'header': {
        //         'x': 0 ,
        //         'y': walldist.header.y
        //     }
        // };

        // let fov = player.fov.v1;
        // // console.log(this.repVectors);
        // // if (isClockwiseOrder(walldist, h)) {
        // fov.x = fov.header.x * fov.header.length;
        // fov.y = fov.header.y * fov.header.length;
        // // } else {
        // //     fov = player.fov.v2.header;
        // // }

        // const a = walldist.header.x;
        // const b = h.header.y * fov.x/fov.y;
        // let relx = b - a;
        // if (isClockwiseOrder(walldist, h)) {
        //     relx = -(b - a);
        // }
        // // console.log(a, h, a**2, h**2);
        // console.log(Math.round(Math.sqrt(a**2 + h.header.y**2)), Math.round(this.repVectors.v1.dist));
        // // if (a**2 + h**2 === )
        // // console.log(Math.round(fov.x), Math.round(fov.y), Math.round(b), Math.round(a));

        //header of wall

    }





    setAngle(angle) {
        this.header.x = Math.cos(angle)*this.length;
        this.header.y = Math.sin(angle)*this.length;
        this.rotation = getRotation(this.pos, this.header);
        // console.log(this.header.x, this.header.y);
        // this.length = Math.sqrt((this.header.x)*(this.header.x) - (this.header.y)*(this.header.y));
    }
}
