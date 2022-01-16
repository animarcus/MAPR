// Canvas declared in interface.js
handlers.updateCanvasSize();
ctx.translate(0,canvas.height);
ctx.scale(1,-1);

ctx2D.translate(0, canvas2D.height);
ctx2D.scale(1, -1);


let wallCount = 0;
const walls = [];
let renderWalls = [];

let showGraph = false;




const player = new Player(canvas2D.width/2 - 50, canvas2D.height/5, 90);
player.fov.xamount = 70;
let recommendedFOVx = player.fov.xamount
let recommendedFOVy = player.fov.yamount

document.getElementById("showFovx").innerHTML = player.fov.xamount
document.getElementById("sliderFovx").value = player.fov.xamount
document.getElementById("showFovy").innerHTML = player.fov.yamount
document.getElementById("sliderFovy").value = player.fov.yamount

player.setFOV();

loadScene("fourWalls")

// walls.push(new Boundary(430, canvas2D.height - 270,   530,    canvas2D.height - 270, 100, 1, 0, 300));


// walls.push(new Boundary(1957201 / canvas2D.width, 0 / canvas2D.width, 1957201 / canvas2D.width, 1957201 / canvas2D.width, 100, 1, 0, 350));

// var canvas = document.getElementById("canvas2D");


let show2D = true;
let show2D2 = false;
let showWallNums = false;
let rainbowMode = false;
let changeAll = true;
document.getElementById("changeAll").checked = true;
document.getElementById("sortedActive").checked = true;
document.getElementById("sliderH0").value = 0;
document.getElementById("sliderH1").value = 300;
let sortedActive = true;

function changeSlider() {
    let sliderH0 = document.getElementById("sliderH0");
    let sliderH1 = document.getElementById("sliderH1");
    let showH0 = document.getElementById("showH0");
    let showH1 = document.getElementById("showH1");
    showH0.innerHTML = sliderH0.value;
    showH1.innerHTML = sliderH1.value;
    if (changeAll) {
        for (w of walls) {
            w.height0 = sliderH0.value;
            w.height1 = sliderH1.value;
        }
    } else {
        walls[walls.length - 1].height0 = sliderH0.value;
        walls[walls.length-1].height1 = sliderH1.value;
    }
}

function sliderFOVx(value) {
    player.fov.xamount = value;
    player.setFOV();
    document.getElementById("showFovx").innerHTML = value
    document.getElementById("sliderFovx").value = value
}
function sliderFOVy(value) {
    player.fov.yamount = value;
    // player.setFOV();
    document.getElementById("showFovy").innerHTML = value
    document.getElementById("sliderFovy").value = value
}

gameLoop();
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
    // ctx.fillStyle = '#00d2ff';
    ctx.fillStyle = "#64a7ff"; // blue
    ctx.fillRect(0, canvas.height/2, canvas.width, canvas.height*35);
    ctx.fillStyle = "#969696"; // gray
    ctx.fillRect(0, canvas.height/2, canvas.width, -canvas.height*35);

    ctx2D.fillStyle = 'gray';
    ctx2D.fillRect(0, 0, canvas2D.width, canvas2D.height);

}


