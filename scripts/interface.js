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

let expansion = false;
function expand() {
    expansion = !expansion;
    if (expansion) {
        document.getElementsByClassName("container")[0].style.gridTemplateRows = "15%";
    } else {
        document.getElementsByClassName("container")[0].style.gridTemplateRows = "75%";
    }
}

let undoWall = false;
let redoWall = false;
const cooldown = 15;
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
canvas2D.addEventListener("pointerdown", (e) => {
    handlers.click(e)
    document.querySelector(":root").style.setProperty('--pink', 'lightblue') //////////////////
    if (mouse.x < canvas2D.width && mouse.x > 0 && mouse.y < canvas2D.height && mouse.y > 0) {
        drawing.startpos.x = mouse.x;
        drawing.startpos.y = mouse.y;
        if (keysPressed["Shift"]) {
            for (let wall of walls) {
                if (Math.abs(mouse.x - wall.pos.x) < drawing.snappingThreshold && Math.abs(mouse.y - wall.pos.y) < drawing.snappingThreshold) {
                    drawing.startpos.x = wall.pos.x;
                    drawing.startpos.y = wall.pos.y;
                    return;
                }
                if (Math.abs(mouse.x - (wall.pos.x + wall.dir.x)) < drawing.snappingThreshold && Math.abs(mouse.y - (wall.pos.y + wall.dir.y)) < drawing.snappingThreshold) {
                    drawing.startpos.x = wall.pos.x + wall.dir.x;
                    drawing.startpos.y = wall.pos.y + wall.dir.y;
                    return;
                }
            }
            drawing.isDrawing = false;
        }
    }
});

document.addEventListener('pointerup', (e) => {
    handlers.unclick(e)
    e.preventDefault(e)
    document.querySelector(":root").style.setProperty('--pink', '#FDCFF3') //////////////////
});



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
            if (((keysPressed["Control"] && (keysPressed["z"] || keysPressed["Z"]) && !keysPressed["Shift"]) || undoWall) && currentCooldown == cooldown && walls.length > 0) { //control-Z
                undoWall = false;
                currentCooldown = cooldown - 1;
                console.log("undioing") // TEST
                wallCount --;
                wallsTemp.push(walls.pop());
            }
            if (((keysPressed["Control"] && (keysPressed["z"] || keysPressed["Z"]) && keysPressed["Shift"]) || redoWall) && currentCooldown == cooldown && wallsTemp.length > 0) { //control-Z
                redoWall = false;
                currentCooldown = cooldown - 1;
                console.log("REDO") // TEST
                walls.push(wallsTemp.pop())
            }
        }
        if (this.isDrawing) {
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

        if (mouse.x < canvas2D.width && mouse.x > 0 && mouse.y < canvas2D.height && mouse.y > 0) {
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
                if (Math.abs(mouse.x - wall.pos.x) < this.snappingThreshold/3 && Math.abs(mouse.y - wall.pos.y) < this.snappingThreshold/3) {
                    mouse.x = wall.pos.x;
                    mouse.y = wall.pos.y;
                    intCount = 0;
                    
                }
                if (Math.abs(mouse.x - (wall.pos.x + wall.dir.x)) < this.snappingThreshold/3 && Math.abs(mouse.y - (wall.pos.y + wall.dir.y)) < this.snappingThreshold/3) {
                    mouse.x = wall.pos.x + wall.dir.x;
                    mouse.y = wall.pos.y + wall.dir.y;
                    intCount = 0;
                    
                }
            });
            if (intCount == 0) {
                // console.log(parseFloat(parseInt(document.getElementById("sliderOpacity").value)/100))
                walls.push(new Boundary(this.startpos.x, this.startpos.y,
                                        mouse.x, mouse.y,
                                        HEXtoHSL(document.getElementById("colorpick").value).h,
                                        parseFloat(parseInt(document.getElementById("sliderOpacity").value)/100),
                                        document.getElementById("sliderH0").value,
                                        document.getElementById("sliderH1").value));
            }
        }
        this.startpos.x = undefined;
        this.startpos.y = undefined;
        this.isDrawing = false;
    }
};



function changeSetting(sliderId, sliderValue = -1) {
    let sliderH0 = document.getElementById("sliderH0");
    let sliderH1 = document.getElementById("sliderH1");
    switch (sliderId) {
        case "changeAll":
            if (defaults["changeAll"]) {
                document.getElementById("changeAll").checked = defaults["changeAll"]
                changeAll = !changeAll;
            }
            break;
        case "colorpick":
            if (sliderValue == -1) {
                changeSetting(sliderId, defaults[sliderId])
                break;
            }
            document.getElementById("colorpick").value = sliderValue;
            sliderValue = HEXtoHSL(sliderValue)
            if (changeAll) {
                for (w of walls) {
                    w.hue = sliderValue.h;
                }
            }
            break;
        case "sliderH0":
            if (sliderValue == -1) {
                changeSetting(sliderId, defaults[sliderId])
                break;
            }
            let showH0 = document.getElementById("showH0");
            showH0.innerHTML = sliderValue;
            sliderH0.value = sliderValue;
            if (changeAll) {
                for (w of walls) {
                    w.height0 = sliderValue;
                }
            }
            break;
        case "sliderH1":
            if (sliderValue == -1) {
                changeSetting(sliderId, defaults[sliderId])
                break;
            }
            let showH1 = document.getElementById("showH1");
            showH1.innerHTML = sliderValue;
            sliderH1.value = sliderValue;
            if (changeAll) {
                for (w of walls) {
                    w.height1 = sliderValue;
                }
            }
            break;
        case "sliderFovx":
            if (sliderValue == -1) {
                changeSetting(sliderId, defaults[sliderId])
                break;
            }
            player.fov.xamount = sliderValue;
            player.setFOV();
            document.getElementById("showFovx").innerHTML = sliderValue;
            document.getElementById("sliderFovx").value = sliderValue;
            break;
        case "sliderFovy":
            if (sliderValue == -1) {
                changeSetting(sliderId, defaults[sliderId])
                break;
            }
            player.fov.yamount = sliderValue;
            document.getElementById("showFovy").innerHTML = sliderValue;
            document.getElementById("sliderFovy").value = sliderValue;
            break;
        case "sliderOpacity":
            if (sliderValue == -1) {
                changeSetting(sliderId, defaults[sliderId])
                break;
            }
            document.getElementById("showOpacity").innerHTML = parseInt(sliderValue);
            document.getElementById("sliderOpacity").value = parseInt(sliderValue);
            if (changeAll) {
                for (w of walls) {
                    w.opacity = parseFloat(parseInt(sliderValue) / 100);
                }
            }
            break;
    }
}

function loadDefaults() {
    changeSetting("colorpick", defaults["colorpick"]);
    changeSetting("sliderH0", defaults["sliderH0"]);
    changeSetting("sliderH1", defaults["sliderH1"]);
    changeSetting("sliderFovx", defaults["sliderFovx"]);
    changeSetting("sliderFovy", defaults["sliderFovy"]);
    changeSetting("sliderOpacity", defaults["sliderOpacity"]);
    changeSetting("changeAll", defaults["changeAll"]);
}
