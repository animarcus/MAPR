// const canvas3D = document.getElementById('canvas3D');
// const canvas2D = document.getElementById("canvas2D");
const canvas = document.getElementById('canvas3D');
const ctx = canvas.getContext('2d', { alpha: false });

const ctx2D = canvas.getContext("2d", { alpha: false });
const canvas2D = document.getElementById("canvas2D");

const cooldown = 15
let currentCooldown = cooldown;

const keysPressed = {};

const mouse = {
    'x': undefined,
    'y': undefined
};

const handlers = {
    click(e) {
        e.preventDefault();
        drawing.isDrawing = true;
    },
    unclick(e) {
        document.activeElement.blur();
        drawing.stop();
    },
    updateCanvasSize() {
        canvas.height = document.getElementById('canvas3D').offsetHeight;
        canvas.width = document.getElementById('canvas3D').offsetWidth;
        // canvas2D.height = document.getElementById("canvas2D").offsetHeight;
        // canvas2D.width = document.getElementById("canvas2D").offsetWidth;
        // console.log(canvas.height, canvas.width);
    }
};



const drawing = {
    isDrawing : false,
    startpos : {
        'x' : undefined,
        'y' : undefined
    },
    start() {
        if (currentCooldown <= 0) currentCooldown = cooldown;
        if (currentCooldown > 0 && currentCooldown < cooldown) currentCooldown --;
        if (!this.isDrawing) {
            if (keysPressed.Control && keysPressed.z && currentCooldown == cooldown) {  // Remove latest wall
                console.log("undioing") // TEST
                currentCooldown = cooldown - 1;
                wallCount --;
                walls.pop();

            }
            if (mouse.x < canvas.width && mouse.x > 0 && mouse.y < canvas.height && mouse.y > 0) {
                this.startpos.x = mouse.x;
                this.startpos.y = mouse.y;
            } else {
                return;
            }
        }
        if (this.isDrawing && (mouse.x < canvas.width && mouse.x > 0 && mouse.y < canvas.height && mouse.y > 0)) {
            line(this.startpos.x, this.startpos.y, mouse.x, mouse.y);
        }
    },
    stop() {
        if (this.isDrawing && (Math.abs(this.startpos.x - mouse.x) > 10 || Math.abs(this.startpos.y - mouse.y) > 10)) {
            newWall = { "pos":      {   "x": this.startpos.x,
                                        "y": this.startpos.y },
                        "header":   {   "x": mouse.x - this.startpos.x,
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

document.addEventListener('resize', handlers.updateCanvasSize());
document.onkeyup = (e) => delete keysPressed[e.key];
document.onkeydown = (e) => (keysPressed[e.key] = true);


document.ontouchstart = (e) => e.preventDefault();
document.ontouchmove = (e) => e.preventDefault();
document.ondblclick = (e) => e.preventDefault();

document.getElementById('canvas3D').addEventListener('mousemove', (e) => {
    mouse.x = e.offsetX;
    mouse.y = canvas.height - e.offsetY;
    console.table([mouse.x, mouse.y, e.clientX, e.clientY]);
});
document.getElementById('canvas3D').addEventListener('mousedown', (e) => handlers.click(e));
document.addEventListener('mouseup', (e) => handlers.unclick(e));
