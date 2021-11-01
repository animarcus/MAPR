class Button {
    constructor(x, y, width, height, color, char = "boop") {
        this.active = false;
        this.color = color;
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.char = char
    }

    draw() {
        let tmpalpha = ctx.globalAlpha;
        ctx.globalAlpha = 0.1;
        polygon([this.x, this.y,
                this.x, this.y + this.height,
                this.x + this.width, this.y + this.height,
                this.x + this.width, this.y], this.color)
        ctx.save();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.font = "bolder 30px Arial";
                ctx.textAlign = "center";
                ctx.textBaseline = 'middle';
                ctx.fillStyle = "black";
                ctx.fillText(this.char, this.x + this.width/2, canvas.height - this.y - this.height/2);
        ctx.restore();
        ctx.globalAlpha = tmpalpha;
    }

    containsPoint(x, y) {
        // if the point is outside of the rectangle return false:
        return (x < this.x ||
                x > this.x + this.width ||
                y < this.y ||
                y > this.y + this.width);
    }
}

const pointer = {
    'x': undefined,
    'y': undefined
};
let isPointing = false;
const isTouchScreen = window.matchMedia("(pointer: coarse)").matches
if (isTouchScreen) {
    canvas3D.addEventListener("pointerdown", (e) => {
        isPointing = true;
        pointer.x = e.offsetX;
        pointer.y = canvas.height - e.offsetY;
        e.preventDefault();
    });

    canvas3D.addEventListener("pointermove", (e) => {
        e.preventDefault();
        pointer.x = e.offsetX;
        pointer.y = canvas.height - e.offsetY;
    });
    canvas3D.addEventListener("pointerup", (e) => {
        isPointing = false;
        e.preventDefault();
        for (let button of buttons) {
            button.active = false;
        }
    });
}



let W = canvas.width/6
let H = canvas.height/4
let buttons = [
    new Button(0, 0, W, H, "yellow", "A"),
    new Button(2*W, 0, W, H, "green", "D"),
    new Button(W, 0, W, H, "cyan", "S"),
    new Button(W,H, W, H, "orange", "W"),
    new Button(3*W, 0, W, H, "yellow", "⇦"),
    new Button(5*W, 0, W, H, "green", "⇨")
]

function touchControls() {
    if (isTouchScreen) {
        renderButtons();
        if (isPointing) detectButtons();
        handleButtons();
    }
}



function renderButtons() {
    for (let button of buttons) {
        button.draw();
    }
}
function detectButtons() {
    for (let button of buttons) {
        button.active = false;
        if (
            pointer.x > button.x && pointer.x < button.x + button.width &&
            pointer.y > button.y && pointer.y < button.y + button.height) {
            button.active = true;
            break;
        }
    }
}

function handleButtons() {
    if (buttons[0].active) {
        keysPressed.a = true;
    } else {
        keysPressed.a = false;
    }
    if (buttons[2].active) {
        keysPressed.s = true;
    } else {
        keysPressed.s = false;
    }
    if (buttons[1].active) {
        keysPressed.d = true;
    } else {
        keysPressed.d = false;
    }
    if (buttons[3].active) {
        keysPressed.w = true;
    } else {
        keysPressed.w = false;
    }

    if (buttons[4].active) {
        keysPressed.ArrowLeft = true;
    } else {
        keysPressed.ArrowLeft = false;
    }
    if (buttons[5].active) {
        keysPressed.ArrowRight = true;
    } else {
        keysPressed.ArrowRight = false;
    }
}
