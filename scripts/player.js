class Player {
    constructor(x, y, rotation) {
        this.rotation = radians(rotation); //input is in degrees but handled in radians
        this.vertRotation = 0; // radians

        this.height = 180; // height is in cm

        this.farSight = 1000
        this.moveStep = 1;
        this.lookStepH = 1;
        this.lookStepV = 1;
        this.pos = {
            'x': x,
            'y': y
        };
        this.dir = {
            'x': Math.cos(this.rotation),
            'y': Math.sin(this.rotation),
            'length': this.moveStep
        };

        this.fov = {
            'xamount': 235,  //based on human eyes 235 degrees
            'yamount': 280,
            'currentTranslate': 0
        };
        this.fov.v1 = new Ray(this.pos.x, this.pos.y, degrees(this.rotation) + this.fov.xamount / 2, this.farSight);
        this.fov.v2 = new Ray(this.pos.x, this.pos.y, degrees(this.rotation) - this.fov.xamount / 2, this.farSight);
    }

    draw() {
        // ctx.fillStyle = 'white';
        // ctx.fillRect(this.pos.x - 5, this.pos.y - 5, 10, 10);

        ellipse(this.pos.x, this.pos.y, 7, 7, "orange");


        // line(this.pos.x, this.pos.y, this.pos.x + (this.dir.x) * 100, this.pos.y + (this.dir.y) * 100, 'white', 1);

        this.fov.v1.draw('orange', 3); // green

        this.fov.v2.draw("orange", 3); // green
    }



    setAngle(angle) { //input is in degrees but handled in radians
        this.rotation = radians(angle);
        if (this.rotation > 2 * Math.PI) this.rotation -= 2 * Math.PI;
        if (this.rotation < -2 * Math.PI) this.rotation += 2 * Math.PI;
        this.setFOV();
        this.dir.x = Math.cos(this.rotation);
        this.dir.y = Math.sin(this.rotation);
    }
    sideLook(angle) { //input is in degrees but handled in radians
        this.setAngle(degrees(this.rotation) + angle);
    }
    verticalLook(angle) {
        // angle = radians(angle)
        let vertLimit = {};
        vertLimit.max = 4*Math.PI/9;    // 80
        vertLimit.min = -Math.PI/3;     // -60
        if (this.vertRotation + radians(angle) >= vertLimit.min && this.vertRotation + radians(angle) <= vertLimit.max) {
            this.vertRotation += radians(angle)

            // let newTranslate = (100/7)*(degrees(this.vertRotation) + 10) - 1000/7
            // // console.log(degrees(this.vertRotation) + angle, angle, newTranslate)
            // ctx.translate(0, this.fov.currentTranslate - newTranslate); // up: -1000 // down: 1000
            // this.fov.currentTranslate = newTranslate
        }
    }
    setVerticalLook(angle) {
        // angle = radians(angle)
        let vertLimit = {};
        vertLimit.max = 4 * Math.PI / 9;    // 80
        vertLimit.min = -Math.PI / 3;     // -60
        if (this.vertRotation >= vertLimit.min && this.vertRotation <= vertLimit.max) {
            this.vertRotation = angle

            let newTranslate = (100 / 7) * (degrees(this.vertRotation) + 10) - 1000 / 7
            // console.log(degrees(this.vertRotation) + angle, angle, newTranslate)
            ctx.translate(0, this.fov.currentTranslate - newTranslate); // up: -1000 // down: 1000
            this.fov.currentTranslate = newTranslate
        }
    }
    sideMove(step) {
        this.pos.x += -step * this.dir.y/2;
        this.pos.y += step * this.dir.x/2;
        this.setFOV();
    }
    straightMove(step) {
        this.pos.x += step * this.dir.x;
        this.pos.y += step * this.dir.y;
        this.setFOV();
    }

    setFOV() {
        this.fov.v1.setAngle(degrees(this.rotation) + this.fov.xamount / 2);
        this.fov.v2.setAngle(degrees(this.rotation) - this.fov.xamount / 2);
        this.fov.v1.pos = this.pos;
        this.fov.v2.pos = this.pos;
    }

    setFarSight(value) {
        this.farSight = value;
        this.fov.v1 = new Ray(this.pos.x, this.pos.y, degrees(this.rotation) + this.fov.xamount / 2, this.farSight);
        this.fov.v2 = new Ray(this.pos.x, this.pos.y, degrees(this.rotation) - this.fov.xamount / 2, this.farSight);
    }
}
let timer = 0
let timer1, timer2
const playerHandler = {
    movement() {
        if (keysPressed[" "]) {
            player.moveStep = 2.5;
        }
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
            player.verticalLook(player.lookStepV);
        }
        if (keysPressed.ArrowDown) {
            player.verticalLook(-player.lookStepV);
        }
        if (keysPressed.ArrowLeft) {
            player.sideLook(player.lookStepH);
        }
        if (keysPressed.ArrowRight) {
            player.sideLook(-player.lookStepH);
        }
        
        player.moveStep = 1.4;
    }
};


