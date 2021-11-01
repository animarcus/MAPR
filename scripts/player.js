class Player {
    constructor(x, y, rotation) {
        this.rotation = radians(rotation); //input is in degrees but handled in radians
        this.vertRotation = 0;

        this.height = 180; // height is in cm

        this.farSight = 1000
        this.moveStep = 2;
        this.lookStepH = 2;
        this.lookStepV = 5;
        this.pos = {
            'x': x,
            'y': y
        };
        this.header = {
            'x': Math.cos(this.rotation),
            'y': Math.sin(this.rotation),
            'length': this.moveStep
        };

        this.fov = {
            'xamount': 235,  //based on human eyes 235 degrees
            'yamount': 280
        };
        this.fov.v1 = new Ray(this.pos.x, this.pos.y, degrees(this.rotation) + this.fov.xamount / 2, this.farSight);
        this.fov.v2 = new Ray(this.pos.x, this.pos.y, degrees(this.rotation) - this.fov.xamount / 2, this.farSight);
    }

    draw() {
        // ctx.fillStyle = 'white';
        // ctx.fillRect(this.pos.x - 5, this.pos.y - 5, 10, 10);

        ellipse(this.pos.x, this.pos.y, 7, 7, "orange");

        // line(this.pos.x, this.pos.y, this.pos.x + (this.header.x) * 100, this.pos.y + (this.header.y) * 100, 'white', 1);

        this.fov.v1.draw('orange', 3); // green

        this.fov.v2.draw("orange", 3); // green
    }



    setAngle(angle) { //input is in degrees but handled in radians
        this.rotation = radians(angle);
        if (this.rotation > 2 * Math.PI) this.rotation -= 2 * Math.PI;
        if (this.rotation < -2 * Math.PI) this.rotation += 2 * Math.PI;
        this.setFOV();
        this.header.x = Math.cos(this.rotation);
        this.header.y = Math.sin(this.rotation);
    }
    sideLook(angle) { //input is in degrees but handled in radians
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
    }
}

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
            player.verticalLook(-player.lookStepV);
        }
        if (keysPressed.ArrowDown) {
            player.verticalLook(player.lookStepV);
        }
        if (keysPressed.ArrowLeft) {
            player.sideLook(player.lookStepH);
        }
        if (keysPressed.ArrowRight) {
            player.sideLook(-player.lookStepH);
        }
    }
};


