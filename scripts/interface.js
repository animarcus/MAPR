const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');


const keysPressed = {
    'walkUp': false,
    'walkDown': false,
    'walkLeft': false,
    'walkRight': false,

    'lookUp': false,
    'lookDown': false,
    'lookLeft': false,
    'lookRight': false
};

const mouse = {
    'x': undefined,
    'y': undefined
};

const handlers = {
    click(e) {
        // console.log(e.clientX, e.clientY);
        drawing.isDrawing = true;
    },
    unclick(e) {
        document.activeElement.blur();
        drawing.stop();
    },
    updateCanvasSize() {
        canvas.height = document.getElementById('canvas1').offsetHeight;
        canvas.width = document.getElementById('canvas1').offsetWidth;
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
        if (!this.isDrawing) {
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
            walls.push(new Boundary(this.startpos.x, this.startpos.y, mouse.x, mouse.y));
        }
        this.isDrawing = false;
    }
};

window.addEventListener('resize', handlers.updateCanvasSize());
window.onkeyup = (e) => delete keysPressed[e.key];
window.onkeydown = (e) => keysPressed[e.key] = true;


document.getElementById('canvas1').addEventListener('mousemove', (e) => {
    mouse.x = e.offsetX;
    mouse.y = canvas.height - e.offsetY;
    // console.table([mouse.x, mouse.y, e.clientX, e.clientY]);
});
document.getElementById('canvas1').addEventListener('mousedown', (e) => handlers.click(e));
document.addEventListener('mouseup', (e) => handlers.unclick(e));
