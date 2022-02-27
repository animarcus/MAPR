// Canvas declared in interface.js
handlers.updateCanvasSize();

// ctx.translate(0,canvas.height);
// ctx.scale(1,-1);

// ctx2D.translate(0, canvas2D.height);
// ctx2D.scale(1, -1);


let wallCount = 0;
const walls = [];
const wallsTemp = [];
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

const player = new Player(canvas2D.width/2 - 50, canvas2D.height/5, 90);
player.fov.xamount = 70;


player.setFOV();

window.addEventListener("orientationchange", handlers.reloadCanvas, false);
window.addEventListener("resize", handlers.reloadCanvas, false);


let show2D = true;
let show2D2 = false;
let showWallNums = false;
let rainbowMode = false;
let changeAll = true;
let sortedActive = true;

const defaults = {
    "changeAll": true,
    "colorpick": "#ff0000",
    "sliderOpacity": 100,
    "sliderH1": 300,
    "sliderH0": 0,
    "sliderFovx": player.fov.xamount,
    "sliderFovy": player.fov.yamount
}

loadDefaults()
loadScene("example")


const prevScene = localStorage.getItem("prevScene")
// console.log(JSON.parse(prevScene))
if (prevScene) {
    importWalls(JSON.parse(prevScene))
    localStorage.removeItem("prevScene");
}



window.requestAnimationFrame(gameLoop);



function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx2D.clearRect(0, 0, canvas2D.width, canvas2D.height);


    background();
    playerHandler.movement();
        set2Dctx();
        player.draw();
        set3Dctx();
    renderWalls.splice(0, renderWalls.length)
    walls.forEach(wall => {
        if (rainbowMode) {
            if (wall.hue >= 255) wall.hue = -1;
            wall.hue +=1;
        }
        if (show2D) {
            set2Dctx();
            wall.draw();
        }
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

    drawing.start();
    touchControls();

    
    requestAnimationFrame(gameLoop);
}

// background terrain
function background() {
    ctx.fillStyle = color["sky-blue"]; // blue
    ctx.fillRect(0, canvas.height/2, canvas.width, canvas.height*35);
    ctx.fillStyle = color["dark-gray"]; // gray
    ctx.fillRect(0, canvas.height/2, canvas.width, -canvas.height*35);

    ctx2D.fillStyle = color["dark-gray"];
    ctx2D.fillRect(0, 0, canvas2D.width, canvas2D.height);

}



