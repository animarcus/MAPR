const canvas = document.getElementById('canvas3D');
let ctx = canvas.getContext('2d', { alpha: false });

const canvas2D = document.getElementById("canvas2D");
const ctx2D = canvas2D.getContext("2d", { alpha: false });

const dotSize = 10 * canvas2D.width / 800;

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
        document.getElementById("expandtext").innerHTML = "REDUCE"
    } else {
        document.getElementsByClassName("container")[0].style.gridTemplateRows = "auto";
        document.getElementById("expandtext").innerHTML = "EXPAND"
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
        e.preventDefault();
        drawing.isDrawing = true;
    },
    unclick(e) {
        e.preventDefault();
        document.activeElement.blur();
        drawing.stop();
    },
    updateCanvasSize() {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx2D.setTransform(1, 0, 0, 1, 0, 0);
        canvas.height = canvas.offsetHeight;
        canvas.width = canvas.offsetWidth;
        canvas2D.height = canvas2D.offsetWidth;
        canvas2D.width = canvas2D.offsetWidth;
        // set3Dctx()
        ctx.translate(0, canvas.height);
        ctx.scale(1, -1);

        ctx2D.translate(0, canvas2D.height);
        ctx2D.scale(1, -1);
    },
    reloadCanvas() {
        const prevSceneStore = JSON.stringify(exportWalls())
        localStorage.setItem("prevScene", prevSceneStore);

        window.location = window.location;
    }
};

document.onkeyup = (e) => delete keysPressed[e.key.toLowerCase()];
document.onkeydown = (e) => {
    keysPressed[e.key.toLowerCase()] = true;
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
    if (mouse.x < canvas2D.width && mouse.x > 0 && mouse.y < canvas2D.height && mouse.y > 0) {
        drawing.startpos.x = mouse.x;
        drawing.startpos.y = mouse.y;
        if (keysPressed["shift"]) {
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
});



const drawing = {
    isDrawing : false,
    startpos : {
        'fixed': false,
        'x' : undefined,
        'y' : undefined
    },
    start() {
        if (currentCooldown <= 0) currentCooldown = cooldown;
        if (currentCooldown > 0 && currentCooldown < cooldown) currentCooldown--;
        
        if (!this.isDrawing) {
            if (((keysPressed["control"] && (keysPressed["z"] || keysPressed["Z"]) && !keysPressed["shift"]) || undoWall) && currentCooldown == cooldown && walls.length > 0) { //control-Z
                undoWall = false;
                currentCooldown = cooldown - 1;
                // console.log("undioing") // TEST
                wallCount --;
                wallsTemp.push(walls.pop());
            }
            if (((keysPressed["control"] && (keysPressed["z"] || keysPressed["Z"]) && keysPressed["shift"]) || redoWall) && currentCooldown == cooldown && wallsTemp.length > 0) { //control-Z
                redoWall = false;
                currentCooldown = cooldown - 1;
                // console.log("REDO") // TEST
                walls.push(wallsTemp.pop())
            }
        }
        if (this.isDrawing) {
            if (keysPressed["shift"]) {
                this.snapping();
            }
            if (keysPressed["f"]) {
                if (Math.abs(this.startpos.x - mouse.x) < 5) {
                    mouse.x = this.startpos.x;
                }
                if (Math.abs(this.startpos.y - mouse.y) < 5) {
                    mouse.y = this.startpos.y;
                }
            }
            set2Dctx();
            line(this.startpos.x, this.startpos.y, mouse.x, mouse.y, color.pink, 3); //2DDraw
            set3Dctx();
        }
        set2Dctx();
        circle(this.startpos.x, this.startpos.y, 5)
        if (this.isDrawing) circle(mouse.x, mouse.y, 5)
        set3Dctx();
    },
    snappingThreshold : 10,
    snapping() {
        if (mouse.x < canvas2D.width && mouse.x > 0 && mouse.y < canvas2D.height && mouse.y > 0) {
            for (let wall of walls) {
                if (Math.abs(mouse.x - cameraOffsetX(wall.pos.x)) < this.snappingThreshold && Math.abs(mouse.y - cameraOffsetY(wall.pos.y)) < this.snappingThreshold) {
                    mouse.x = cameraOffsetX(wall.pos.x);
                    mouse.y = cameraOffsetY(wall.pos.y);
                }
                if (Math.abs(mouse.x - cameraOffsetX(wall.pos.x + wall.dir.x)) < this.snappingThreshold && Math.abs(mouse.y - cameraOffsetY(wall.pos.y + wall.dir.y)) < this.snappingThreshold) {
                    mouse.x = cameraOffsetX(wall.pos.x + wall.dir.x);
                    mouse.y = cameraOffsetY(wall.pos.y + wall.dir.y);
                }
            }
        }
    },
    stop() {
        if (this.isDrawing && (Math.abs(this.startpos.x - mouse.x) > 10 || Math.abs(this.startpos.y - mouse.y) > 10)) {
            newWall = { "pos": {"x": cameraCanvasOffsetX(this.startpos.x),
                                "y": cameraCanvasOffsetY(this.startpos.y) },
                        "dir": {"x": cameraCanvasOffsetX(mouse.x) - cameraCanvasOffsetX(this.startpos.x),
                                "y": cameraCanvasOffsetY(mouse.y) - cameraCanvasOffsetY(this.startpos.y) }
            }
            let intCount = 0;
            walls.forEach(wall => {
                if (isIntersectionVectors(wall, newWall) &&   !(isSame(wall.pos, newWall.pos)                         || isSame(vectorAdd(wall.pos, wall.dir), newWall.pos) ||
                                                                isSame(wall.pos, vectorAdd(newWall.pos, newWall.dir)) || isSame(vectorAdd(wall.pos, wall.dir), vectorAdd(newWall.pos, newWall.dir)))) {
                    intCount ++;
                };
                if (Math.abs(cameraCanvasOffsetX(mouse.x) - cameraOffsetX(wall.pos.x)) < this.snappingThreshold / 3 && Math.abs(cameraCanvasOffsetY(mouse.y) - cameraOffsetY(wall.pos.y)) < this.snappingThreshold/3) {
                    mouse.x = cameraOffsetX(wall.pos.x);
                    mouse.y = cameraOffsetY(wall.pos.y);
                    intCount = 0;
                }
                if (Math.abs(cameraCanvasOffsetX(mouse.x) - cameraOffsetX(wall.pos.x + wall.dir.x)) < this.snappingThreshold / 3 && Math.abs(cameraCanvasOffsetY(mouse.y) - cameraOffsetY(wall.pos.y + wall.dir.y)) < this.snappingThreshold/3) {
                    mouse.x = cameraOffsetY(wall.pos.x + wall.dir.x);
                    mouse.y = cameraOffsetY(wall.pos.y + wall.dir.y);
                    intCount = 0;
                }
            });
            if (intCount == 0) { //2DDraw
                walls.push(new Boundary(cameraCanvasOffsetX(this.startpos.x), cameraCanvasOffsetY(this.startpos.y),
                                        cameraCanvasOffsetX(mouse.x), cameraCanvasOffsetY(mouse.y),
                                        document.getElementById("colorpick").value,
                                        parseFloat(parseInt(document.getElementById("sliderOpacity").value)/100),
                                        document.getElementById("sliderH0").value,
                                        document.getElementById("sliderH1").value));
                if (randomColor) {
                    walls[walls.length - 1].hex = `#${Math.floor(Math.random() * 16777215).toString(16)}`
                }
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
            const changeText = (val) => {
                if (val) {
                    document.getElementById("changeAllState").innerHTML = "All";
                } else {
                    document.getElementById("changeAllState").innerHTML = "New";
                }
            }
            if (sliderValue == -1) {
                document.getElementById("changeAll").checked = defaults["changeAll"];
                changeAll = defaults["changeAll"];
                changeText(defaults["changeAll"]);
                break;
            }
            changeAll = sliderValue
            changeText(document.getElementById("changeAll").checked)
            break;
        case "colorpick":
            if (sliderValue == -1) {
                changeSetting(sliderId, defaults[sliderId])
                break;
            }
            document.getElementById("colorpick").value = sliderValue;
            if (changeAll) {
                for (w of walls) {
                    w.hex = sliderValue;
                }
            }
            break;
        case "randomColor":
            if (sliderValue == -1) {
                document.getElementById("randomColor").checked = defaults["randomColor"];
                randomColor = defaults["randomColor"];
                changeSetting(sliderId, defaults[sliderId]);
                break;
            }
            randomColor = sliderValue;
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
        case "camera":
            if (sliderValue == -1) {
                changeSetting(sliderId, defaults[sliderId]);
                break;
            }
            camera.x = sliderValue['x'];
            camera.y = sliderValue['y'];
            camera.viewX = sliderValue['viewX'];
            camera.viewY = sliderValue['viewY'];
            document.getElementById('cameraX').innerText = camera.x;
            document.getElementById('cameraY').innerText = -camera.y;
            document.getElementById('cameraZoom').innerText = Math.round((camera.viewX + camera.viewY)/2);
            break;
    }
}

function loadDefaults() {
    document.getElementById("randomColor").checked = false;
    document.getElementById("sortedActive").checked = true;
    changeSetting("colorpick", defaults["colorpick"]);
    changeSetting("sliderH0", defaults["sliderH0"]);
    changeSetting("sliderH1", defaults["sliderH1"]);
    changeSetting("sliderFovx", defaults["sliderFovx"]);
    changeSetting("sliderFovy", defaults["sliderFovy"]);
    changeSetting("sliderOpacity", defaults["sliderOpacity"]);
    changeSetting("changeAll", -1);
    changeSetting("randomColor", -1);
    changeSetting("camera", defaults["camera"]);
    // currentRule = 
    currentRule = rules[defaults["currentRule"]]
}
