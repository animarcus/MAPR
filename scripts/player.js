class Player {
    constructor(x, y, rotation) {
        this.rotation = radians(rotation); //input is in degrees but handled in radians
        this.vertRotation = 0;

        this.height = 180; // height is in cm

        this.moveStep = 2;
        this.lookStep = 5;
        this.pos = {
            'x': x,
            'y': y
        };
        this.header = {
            'x': Math.cos(this.rotation),
            'y': Math.sin(this.rotation),
            'length': 350
        };

        this.fov = {
            'xamount': 235,  //based on human eyes
            'yamount': 280
        };
        this.fov.v1 = new Ray(this.pos.x, this.pos.y, degrees(this.rotation) + this.fov.xamount / 2, this.header.length);
        this.fov.v2 = new Ray(this.pos.x, this.pos.y, degrees(this.rotation) - this.fov.xamount / 2, this.header.length);
        // console.log(degrees(this.rotation) + this.fov.amount/2);
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.pos.x - 5, this.pos.y - 5, 10, 10);
        line(this.pos.x, this.pos.y, this.pos.x + (this.header.x) * this.header.length, this.pos.y + (this.header.y) * this.header.length, 'white', 1);

        this.fov.v1.draw('green');

        this.fov.v2.draw('red');
    }



    setAngle(angle) { //input is in degrees but handled in radians
        this.rotation = radians(angle);
        if (this.rotation > 2 * Math.PI) this.rotation -= 2 * Math.PI;
        if (this.rotation < -2 * Math.PI) this.rotation += 2 * Math.PI;
        this.setFOV();

        // if (this.rotation < 0) this.rotation += 2* Math.PI;
        // if (this.rotation >= 2 * Math.PI) this.rotation -= 2 * Math.PI;
        this.header.x = Math.cos(this.rotation);
        this.header.y = Math.sin(this.rotation);
        // if (this.rotation < 0) console.log(`%c ${this.rotation}`, `background: red`);
    }
    sideLook(angle) { //input is in degrees but handled in radians
        // console.log(angle, this.rotation);
        // angle = radians(angle);
        this.setAngle(degrees(this.rotation) + angle);
    }
    verticalLook(angle) {
        let vertLimit = {};
        vertLimit.max = this.fov.yamount;
        vertLimit.min = -this.fov.yamount;
        if (this.vertRotation + angle >= vertLimit.min && this.vertRotation + angle <= vertLimit.max) {
            this.vertRotation += angle;
            ctx.translate(0, angle);
        }
    }
    sideMove(step) {
        this.pos.x += -step * this.header.y;
        this.pos.y += step * this.header.x;
        this.setFOV();
    }
    straightMove(step) {
        this.pos.x = this.pos.x + step * this.header.x;
        this.pos.y = this.pos.y + step * this.header.y;
        this.setFOV();
    }

    setFOV() {
        this.fov.v1.setAngle(degrees(this.rotation) + this.fov.xamount / 2);
        this.fov.v2.setAngle(degrees(this.rotation) - this.fov.xamount / 2);
        this.fov.v1.pos = this.pos;
        this.fov.v2.pos = this.pos;
        // console.log(degrees(this.fov.v1.rotation), degrees(this.rotation), degrees(this.fov.v2.rotation));
    }



    // cast(wall) {
    //     const v1 = {  // Creating vector going from player to wall's first vertex
    //         'header': {
    //             'x': wall.pos.x - this.pos.x,
    //             'y': wall.pos.y - this.pos.y
    //         }
    //     };
    //     const v2 = {  // Creating vector going from player to wall's first vertex
    //         'header': {
    //             'x': (wall.pos.x + wall.header.x) - this.pos.x,
    //             'y': (wall.pos.y  + wall.header.y) - this.pos.y
    //         }
    //     };

    //     if (isClockwiseOrder(this.fov.v1, v1) &&  // fov.v1 is to the left of both wall vectors
    //         isClockwiseOrder(this.fov.v1, v2) &&
    //         !isClockwiseOrder(this.fov.v2, v1) &&  // fov.v2 is to the right of both wall vectors
    //         !isClockwiseOrder(this.fov.v2, v2)) {
    //             console.log("wall fully inside");
    //             line(this.pos.x, this.pos.y, this.pos.x + v1.header.x, this.pos.y + v1.header.y, 'purple', 5);
    //             line(this.pos.x, this.pos.y, this.pos.x + v2.header.x, this.pos.y + v2.header.y, 'purple', 5);

    //             return {
    //                 'v1': v1,
    //                 'v2': v2
    //             };
    //     }

    //     const intersecting = {
    //         'left': intersection(this.fov.v1, wall),
    //         'right': intersection(this.fov.v2, wall)
    //     };
    //     console.log(intersecting.left);
    //     if (intersecting.left && intersecting.right) {
    //         console.log("both");
    //         return {
    //             'v1': intersecting.left,
    //             'v2': intersecting.right
    //         };
    //     }
    //     if (intersecting.left) {
    //         console.log("lkeft");
    //         return {
    //             'v1': intersecting.left,
    //             'v2': v2
    //         };
    //     }
    //     if (intersecting.right) {
    //         console.log("right");
    //         return {
    //             'v1': v1,
    //             'v2': intersecting.right
    //         };
    //     }
    //     // console.log("none");
    // }
}


// const walls = JSON.parse(localStorage.getItem("walls"));


const playerHandler = {
    movement() {
        if (keysPressed.w) {
            player.straightMove(player.moveStep);
        }
        if (keysPressed.s) {
            player.straightMove(-player.moveStep);
        }
        if (keysPressed.a) {
            player.sideMove(player.moveStep);
        }
        if (keysPressed.d) {
            player.sideMove(-player.moveStep);
        }
        if (keysPressed.ArrowUp) {
            player.verticalLook(-player.lookStep);
        }
        if (keysPressed.ArrowDown) {
            player.verticalLook(player.lookStep);
        }
        if (keysPressed.ArrowLeft) {
            player.sideLook(player.lookStep);
        }
        if (keysPressed.ArrowRight) {
            player.sideLook(-player.lookStep);
        }
    }
};
