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
        
        ctx.save();
                ctx.setTransform(1, 0, 0, 1, 0, 0);


                polygon([   this.x, canvas.height - this.y,
                            this.x, canvas.height - (this.y + this.height),
                            this.x + this.width, canvas.height - (this.y + this.height),
                            this.x + this.width, canvas.height - this.y], this.color)
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
    "x": undefined,
    "y": undefined
};

let isPointing = false;
const isTouchScreen = window.matchMedia("(pointer: coarse)").matches
if (isTouchScreen) {
    const pointerdown = (e) => {
        console.log(e)
        isPointing = true;
        pointer.x = e.offsetX;
        pointer.y = canvas.height - e.offsetY;
        e.preventDefault();
    }
    const pointermove = (e) => {
        e.preventDefault();
        pointer.x = e.offsetX;
        pointer.y = canvas.height - e.offsetY;
    }
    const pointerup = (e) => {
        isPointing = false;
        e.preventDefault();
        for (let button of buttons) {
            button.active = false;
        }
    }

    canvas3D.onpointerdown = pointerdown;
    canvas3D.onpointermove = pointermove;

    canvas3D.onpointerup = pointerup;
    canvas3D.onpointercancel = pointerup;
    canvas3D.onpointerout = pointerup;
    canvas3D.onpointerleave = pointerup;
    // canvas3D.addEventListener("pointerdown", (e) => {
    //     isPointing = true;
    //     pointer.x = e.offsetX;
    //     pointer.y = canvas.height - e.offsetY;
    //     e.preventDefault();
    // });

    // canvas3D.addEventListener("pointermove", (e) => {
    //     e.preventDefault();
    //     pointer.x = e.offsetX;
    //     pointer.y = canvas.height - e.offsetY;
    // });
    // canvas3D.addEventListener("pointerup", (e) => {
    //     isPointing = false;
    //     e.preventDefault();
    //     for (let button of buttons) {
    //         button.active = false;
    //     }
    // });
}



let W = canvas.width/6
let H = canvas.height/4
let buttons = [
    new Button(0, 0, W, H, "yellow", "A"),
    new Button(2*W, 0, W, H, "green", "D"),
    new Button(W, 0, W, H, "cyan", "S"),
    new Button(W, H, W, H, "orange", "W"),
    new Button(3 * W, 0, W, H, "yellow", "⇦"),
    new Button(5 * W, 0, W, H, "green", "⇨"),
    new Button(4 * W, 0, W, H, "cyan", "⇩"),
    new Button(4 * W, H, W, H, "orange", "⇧")
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
    keysPressed.a = false;
    keysPressed.s = false;
    keysPressed.d = false;
    keysPressed.w = false;
    keysPressed.ArrowLeft = false;
    keysPressed.ArrowRight = false;
    keysPressed.ArrowDown = false;
    keysPressed.ArrowUp = false;
    if (buttons[0].active) {
        keysPressed.a = true;
    }
    if (buttons[2].active) {
        keysPressed.s = true;
    }
    if (buttons[1].active) {
        keysPressed.d = true;
    }
    if (buttons[3].active) {
        keysPressed.w = true;
    }

    if (buttons[4].active) {
        keysPressed.ArrowLeft = true;
    }
    if (buttons[5].active) {
        keysPressed.ArrowRight = true;
    }
    if (buttons[6].active) {
        keysPressed.ArrowDown = true;
    }
    if (buttons[7].active) {
        keysPressed.ArrowUp = true;
    }
}
