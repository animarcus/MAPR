// Canvas declared in interface.js
handlers.updateCanvasSize();

let wallCount = 0;
const wallsTemp = [];
const walls = [];
let renderWalls = [];

let showGraph = false;
const color = {
    "light-gray": getComputedStyle(document.documentElement).getPropertyValue('--light-gray'),
    "dark-gray": getComputedStyle(document.documentElement).getPropertyValue('--dark-gray'),
    "yellow": getComputedStyle(document.documentElement).getPropertyValue('--yellow'),
    "dark-blue": getComputedStyle(document.documentElement).getPropertyValue('--dark-blue'),
    "sky-blue": getComputedStyle(document.documentElement).getPropertyValue('--sky-blue'),
    "mid-blue": getComputedStyle(document.documentElement).getPropertyValue('--mid-blue'),
    "pink": getComputedStyle(document.documentElement).getPropertyValue('--pink')
}

const player = new Player(canvas2D.width/2, canvas2D.height/5, 90);
player.fov.xamount =  55;

player.setFOV();

window.addEventListener("orientationchange", handlers.reloadCanvas, false);
window.addEventListener("resize", handlers.reloadCanvas, false);

let showCoords = false;
let show2D = true;
let show2D2 = false;
let showWallNums = false;
let rainbowMode = false;
let changeAll = true;
let sortedActive = true;
let randomColor = false;

const defaults = {
    "currentRule": rules.nothing.name,
    "camera": {
        "x": 0,
        "y": 0,
        "viewX": 500,
        "viewY": 500
    },
    "changeAll": true,
    "colorpick": "#ff0000",
    "randomColor": false,
    "sliderOpacity": 100,
    "sliderH1": 300,
    "sliderH0": 0,
    "sliderFovx": player.fov.xamount,
    "sliderFovy": player.fov.yamount
}


let prevScene = localStorage.getItem("prevScene");
if (prevScene) {
    prevScene = JSON.parse(prevScene);
    if (prevScene["expansion"]) expand();
    importWalls(prevScene);
    localStorage.removeItem("prevScene");
} else {
    loadScene("mainPic");
    
    // loadScene("forest");
    // loadScene("rotatingScene");
    // loadScene("weirdCorridor");
}
loadDefaults();

window.requestAnimationFrame(gameLoop);

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx2D.clearRect(0, 0, canvas2D.width, canvas2D.height);

    set2Dctx();
    circle(cameraOffsetX(0), cameraOffsetY(0), 100, "purple");
    set3Dctx();
    
    background();
    playerHandler.movement();
        set2Dctx();
        player.draw();
        set3Dctx();
    
    renderWalls.splice(0, renderWalls.length)
    player.nearWalls.splice(0, player.nearWalls.length)
    walls.forEach(wall => {
        if (rainbowMode) {
            wall.hsl = hexToHSL(wall.hex);
            wall.hsl.h += 1;
            wall.hex = hslToHex(wall.hsl.h, wall.hsl.s, wall.hsl.l)
        }
        if (show2D) {
            set2Dctx();
            wall.draw();
            set3Dctx();
        }
        if (wall.collidesWithCircle(player.collisionDistance*2)) player.nearWalls.push(wall);
        if (wall.isInsideFOV()) {
            wall.processFOV();
            wall.calculate3D();
            renderWalls.push(wall);
        }
    });
    
    if (renderWalls.length >= 1) {
        if (sortedActive) {
            let sorted = wallsToGraph(renderWalls);
            if (sorted.length <= 1) sorted = [0]
                sorted.forEach(index => {
                    renderWalls[index].display3D();
            });
        } else {
            renderWalls.forEach(wall => {
                wall.display3D();
            });
        }
    }

    currentRule();

    drawing.start();
    touchControls();

    
    requestAnimationFrame(gameLoop);
}

// background terrain
function background() {
    ctx.fillStyle = color["sky-blue"]; // blue
    ctx.fillRect(0, Math.floor(canvas.height/2), Math.floor(canvas.width), Math.floor(canvas.height*35));
    ctx.fillStyle = color["dark-gray"]; // gray
    ctx.fillRect(0, Math.floor(canvas.height/2), Math.floor(canvas.width), Math.floor(-canvas.height*35));

    ctx2D.fillStyle = color["dark-gray"];
    ctx2D.fillRect(0, 0, Math.floor(canvas2D.width), Math.floor(canvas2D.height));

}



