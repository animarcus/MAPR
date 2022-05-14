class Player {
    constructor(x, y, rotation) {
        this.rotation = radians(rotation); //input is in degrees but handled in radians
        this.vertRotation = 0; // radians

        this.height = 180; // height is in cm

        this.nearWalls = []
        this.collisionDistance = 5;
        this.farSight = 1000
        this.moveStep = 1;
        this.lookStepH = 200;
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
        ellipse(cameraOffsetX(this.pos.x), cameraOffsetY(this.pos.y), this.collisionDistance*1.5, this.collisionDistance*1.5, "orange"); //2DDraw

        if (showCoords) {
            ctx.save();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.font = "30px Arial";
            ctx.fillStyle = 'white';
            ctx.fillText([Math.round(this.pos.x), Math.round(this.pos.y)], cameraOffsetX(this.pos.x - 30), canvas2D.height - cameraOffsetY(this.pos.y + 20));
            ctx.restore();
        }
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

            let newTranslate = (100/7)*(degrees(this.vertRotation) + 10) - 1000/7
            // console.log(degrees(this.vertRotation) + angle, angle, newTranslate)
            ctx.translate(0, this.fov.currentTranslate - newTranslate); // up: -1000 // down: 1000
            this.fov.currentTranslate = newTranslate
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
            ctx.translate(0, this.fov.currentTranslate - newTranslate); // up: -1000 // down: 1000
            this.fov.currentTranslate = newTranslate
        }
    }
    sideMove(step) {
        for (const wall of this.nearWalls) {
            if (wall.willCollideAfterMove(vectorCreate(-this.dir.y, this.dir.x), step/2, this.collisionDistance)) {
                return;
            }
        }
        this.pos.x += -step * this.dir.y/2;
        this.pos.y += step * this.dir.x/2;
        this.setFOVPos();
    }
    straightMove(step) {
        for (const wall of this.nearWalls) {
            if (wall.willCollideAfterMove(this.dir, step, this.collisionDistance)) {
                return;
            }
        }
        this.pos.x += step * this.dir.x;
        this.pos.y += step * this.dir.y;
        this.setFOVPos();
    }

    setFOV() {
        this.fov.v1.setAngle(degrees(this.rotation) + this.fov.xamount / 2);
        this.fov.v2.setAngle(degrees(this.rotation) - this.fov.xamount / 2);
    }

    setFOVPos() {
        this.fov.v1.pos = this.pos;
        this.fov.v2.pos = this.pos;
    }

    setFarSight(value) {
        this.farSight = value;
        this.fov.v1 = new Ray(this.pos.x, this.pos.y, degrees(this.rotation) + this.fov.xamount / 2, this.farSight);
        this.fov.v2 = new Ray(this.pos.x, this.pos.y, degrees(this.rotation) - this.fov.xamount / 2, this.farSight);
    }
}

let viewTimer = 0;
const viewTimerMax = 10;
const controlStep = Math.PI/10;
const playerHandler = {
    movement() {
        if (viewTimer > 0) viewTimer--;
        // console.log(viewTimer)
        
        if (keysPressed[" "]) {
            player.moveStep = 3;
            player.lookStepH = 1.6;
        } else {
            player.lookStepH = 1.2;
            player.moveStep = 1.6;
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
        if (keysPressed.arrowup) {
            player.verticalLook(player.lookStepV);
        }
        if (keysPressed.arrowdown) {
            player.verticalLook(-player.lookStepV);
        }

        if (keysPressed.arrowleft && keysPressed.control && viewTimer == 0) {
            viewTimer = viewTimerMax;
            player.rotation = player.rotation - (player.rotation % controlStep);
            player.sideLook(degrees(controlStep));
        }
        if (keysPressed.arrowleft && !keysPressed.control) {
            player.sideLook(player.lookStepH);
        }

        if (keysPressed.arrowright && keysPressed.control && viewTimer == 0) {
            viewTimer = viewTimerMax;
            player.rotation = player.rotation - (player.rotation % controlStep);
            player.sideLook(degrees(-controlStep));
        }
        if (keysPressed.arrowright && !keysPressed.control) {
            player.sideLook(-player.lookStepH);
        }
    }
};


