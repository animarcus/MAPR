class Button {
    constructor(x, y, width, height, color, key, text = "boop") {
        this.active = false;
        this.color = color;
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.key = key;
        this.text = text;
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
                ctx.font = "bolder 15px Arial";
                ctx.textAlign = "center";
                ctx.textBaseline = 'middle';
                ctx.fillStyle = "black";
                ctx.fillText(this.text, this.x + this.width/2, canvas.height - this.y - this.height/2);
        ctx.restore();
        ctx.globalAlpha = tmpalpha;
    }
}

const currentPointers = new Map();

const pointer = {
    "x": undefined,
    "y": undefined
};

let isPointing = false;
const isTouchScreen = window.matchMedia("(pointer: coarse)").matches

if (isTouchScreen) {
    const pointerdown = (e) => {
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
            if (
                pointer.x > button.x && pointer.x < button.x + button.width &&
                pointer.y > button.y && pointer.y < button.y + button.height) {
                keysPressed[button.key.toLowerCase()] = false
            }
        }
    }

    canvas.onpointerdown = pointerdown;
    canvas.onpointermove = pointermove;

    canvas.onpointerup = pointerup;
    canvas.onpointercancel = pointerup;
    canvas.onpointerout = pointerup;
    canvas.onpointerleave = pointerup;
}

handlers.updateCanvasSize()

let W = canvas.width/6;
let H = canvas.width/6;
if (H < 50) H = 100;
let buttons = [
    new Button(0    , 0, W, H, "yellow" ,"a", "Left"),
    new Button(2 * W, 0, W, H, "green"  ,"d", "Right"),
    new Button(W    , 0, W, H, "cyan"   ,"s", "Back"),
    new Button(W    , H, W, H, "orange" ,"w", "Forward"),
    new Button(3 * W, 0, W, H, "yellow" ,"ArrowLeft", "Look left"),
    new Button(5 * W, 0, W, H, "green"  ,"ArrowRight", "Look Right"),
    new Button(4 * W, 0, W, H, "cyan"   ,"ArrowDown", "Look Down"),
    new Button(4 * W, H, W, H, "orange" ,"ArrowUp", "Look Up")
]

function touchControls() {
    if (isTouchScreen) {
        renderButtons();
        if (isPointing) detectButtons();
    }
}

function renderButtons() {
    for (let button of buttons) {
        button.draw();
    }
}

function detectButtons() {
    for (let button of buttons) {
        keysPressed[button.key.toLowerCase()] = false
        if (
            pointer.x > button.x && pointer.x < button.x + button.width &&
            pointer.y > button.y && pointer.y < button.y + button.height) {
            keysPressed[button.key.toLowerCase()] = true
        }
    }
}
