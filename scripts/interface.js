// const canvas3D = document.getElementById('canvas3D');
// const canvas2D = document.getElementById("canvas2D");
let canvas = document.getElementById('canvas3D');
let ctx = canvas.getContext('2d', { alpha: false });

const canvas2D = document.getElementById("canvas2D");
const ctx2D = canvas2D.getContext("2d", { alpha: false });

function set2Dctx() {
    ctx = canvas2D.getContext("2d", { alpha: false });
}
function set3Dctx() {
    ctx = canvas.getContext('2d', { alpha: false });
}




const cooldown = 15
let currentCooldown = cooldown;
const keysPressed = {};
const mouse = {
    'x': undefined,
    'y': undefined
};
const handlers = {
    click(e) {
        mouse.x = e.offsetX;
        mouse.y = canvas2D.height - e.offsetY;
        // drawing.startpos.x = mouse.x;
        // drawing.startpos.y = mouse.y;
        e.preventDefault();
        drawing.isDrawing = true;
    },
    unclick(e) {
        e.preventDefault();
        document.activeElement.blur();
        drawing.stop();
    },
    updateCanvasSize() {
        canvas.height = canvas.offsetHeight;
        canvas.width = canvas.offsetWidth;
        canvas2D.height = canvas2D.offsetWidth;
        canvas2D.width = canvas2D.offsetWidth;
        // console.log(canvas.height, canvas.width);
    }
};
document.addEventListener('resize', handlers.updateCanvasSize());
document.onkeyup = (e) => delete keysPressed[e.key];
document.onkeydown = (e) => {
    keysPressed[e.key] = true;
    e.preventDefault()
}

document.ondblclick = (e) => e.preventDefault();

canvas2D.addEventListener("pointermove", (e) => {
    e.preventDefault();
    mouse.x = e.offsetX;
    mouse.y = canvas2D.height - e.offsetY;
});
canvas2D.addEventListener("pointerdown", (e) => handlers.click(e));
document.addEventListener('pointerup', (e) => handlers.unclick(e));



const drawing = {
    isDrawing : false,
    startpos : {
        'fixed': false,
        'x' : undefined,
        'y' : undefined
    },
    start() {
        set2Dctx();
        circle(this.startpos.x, this.startpos.y, 5)
        if (this.isDrawing) circle(mouse.x, mouse.y, 5)
        set3Dctx();
        if (currentCooldown <= 0) currentCooldown = cooldown;
        if (currentCooldown > 0 && currentCooldown < cooldown) currentCooldown--;
        
        if (!this.isDrawing) {
            if ((keysPressed["Control"] && (keysPressed["z"] || keysPressed["Z"]) && !keysPressed["Shift"]) && currentCooldown == cooldown && walls.length > 0) { //control-Z
                currentCooldown = cooldown - 1;
                console.log("undioing") // TEST
                wallCount --;
                wallsTemp.push(walls.pop());
            }
            if ((keysPressed["Control"] && (keysPressed["z"] || keysPressed["Z"]) && keysPressed["Shift"]) && currentCooldown == cooldown && wallsTemp.length > 0) { //control-Z
                currentCooldown = cooldown - 1;
                console.log("REDO") // TEST
                walls.push(wallsTemp.pop())
            }
            
            if (mouse.x < canvas2D.width && mouse.x > 0 && mouse.y < canvas2D.height && mouse.y > 0) {
                if (keysPressed["Shift"]) {
                    for (let wall of walls) {
                        if (Math.abs(mouse.x - wall.pos.x) < this.snappingThreshold && Math.abs(mouse.y - wall.pos.y) < this.snappingThreshold) {
                            this.startpos.x = wall.pos.x;
                            this.startpos.y = wall.pos.y;
                        }
                        if (Math.abs(mouse.x - (wall.pos.x + wall.dir.x)) < this.snappingThreshold && Math.abs(mouse.y - (wall.pos.y + wall.dir.y)) < this.snappingThreshold) {
                            this.startpos.x = wall.pos.x + wall.dir.x;
                            this.startpos.y = wall.pos.y + wall.dir.y;
                        }
                    }
                } else {
                    this.startpos.x = mouse.x;
                    this.startpos.y = mouse.y;
                }
            } else {
                return;
            }
        }
        if (this.isDrawing && (mouse.x < canvas2D.width && mouse.x > 0 && mouse.y < canvas2D.height && mouse.y > 0)) {
            if (keysPressed["Shift"]) {
                this.snapping();
            }
            set2Dctx();
            line(this.startpos.x, this.startpos.y, mouse.x, mouse.y, color.pink, 3);
            set3Dctx();
        }
    },
    snappingThreshold : 15,
    snapping() {
        for (let wall of walls) {
            if (Math.abs(mouse.x - this.startpos.x) < this.snappingThreshold && Math.abs(mouse.y - this.startpos.y) < this.snappingThreshold) return
            if (Math.abs(mouse.x - wall.pos.x) < this.snappingThreshold && Math.abs(mouse.y - wall.pos.y) < this.snappingThreshold) {
                mouse.x = wall.pos.x;
                mouse.y = wall.pos.y;
            }
            if (Math.abs(mouse.x - (wall.pos.x + wall.dir.x)) < this.snappingThreshold && Math.abs(mouse.y - (wall.pos.y + wall.dir.y)) < this.snappingThreshold) {
                mouse.x = wall.pos.x + wall.dir.x;
                mouse.y = wall.pos.y + wall.dir.y;
            }
        }
    },
    stop() {
        if (this.isDrawing && (Math.abs(this.startpos.x - mouse.x) > 10 || Math.abs(this.startpos.y - mouse.y) > 10)) {
            newWall = { "pos": {"x": this.startpos.x,
                                "y": this.startpos.y },
                        "dir": {"x": mouse.x - this.startpos.x,
                                "y": mouse.y - this.startpos.y }
            }
            let intCount = 0;
            walls.forEach(wall => {
                if (isIntersectionVectors(wall, newWall)) {
                    intCount ++;
                };
            });
            if (intCount == 0) {
                walls.push(new Boundary(this.startpos.x, this.startpos.y,
                                        mouse.x, mouse.y,
                                        HEXtoHSL(document.getElementById("colorpick").value).h));
            }
        }
        this.isDrawing = false;
    }
};


