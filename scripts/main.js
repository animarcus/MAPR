// Canvas declared in interface.js
handlers.updateCanvasSize();
ctx.translate(0,canvas.height);
ctx.scale(1,-1);

ctx2D.translate(0, canvas2D.height);
ctx2D.scale(1, -1);

const player = new Player(canvas2D.width/2 , canvas2D.height - canvas2D.height/1.4, 90);
player.fov.xamount = 90;

player.setFOV();

let wallCount = 0
const walls = [];
let renderWalls = [];
// const walls = JSON.parse(localStorage.getItem("walls"));

let showGraph = false;


// let tmp = ""
// walls.forEach(w => {
//     tmp = tmp + "walls.push(new Boundary(" + w.pos.x + ", " + w.pos.y + ", " +
//                                         w.header.x + ", " + w.header.y + ", " + w.hue + "));\n"
// });
// console.log(tmp);


// walls.push(new Boundary(430, 270, 530, 270));
// walls.push(new Boundary(339, 118, 232, 192));
// walls.push(new Boundary(157, 197, 113, 387));
// walls.push(new Boundary(201, 417, 289, 321));
// walls.push(new Boundary(354, 427, 488, 495));
// walls.push(new Boundary(615, 464, 702, 417));
// walls.push(new Boundary(790, 200, 694, 59));
// walls.push(new Boundary(429, 20, 304, 32));
// walls.push(new Boundary(148, 58, 39, 95));
// walls.push(new Boundary(488, 115, 613, 157));
// walls.push(new Boundary(912, 251, 931, 409));
// walls.push(new Boundary(762, 345, 815, 472));
walls.push(new Boundary(430, canvas2D.height - 270,   530,    canvas2D.height - 270));
walls.push(new Boundary(339, canvas2D.height - 118,   232,    canvas2D.height - 192));
walls.push(new Boundary(157, canvas2D.height - 197,   113,    canvas2D.height - 387));
walls.push(new Boundary(201, canvas2D.height - 417,   289,    canvas2D.height - 321));
walls.push(new Boundary(354, canvas2D.height - 427,   488,    canvas2D.height - 495));
walls.push(new Boundary(615, canvas2D.height - 464,   702,    canvas2D.height - 417));
walls.push(new Boundary(790, canvas2D.height - 200,   694,    canvas2D.height - 59));
walls.push(new Boundary(429, canvas2D.height - 20,    304,    canvas2D.height - 32));
walls.push(new Boundary(148, canvas2D.height - 58,    39,     canvas2D.height - 95));
walls.push(new Boundary(488, canvas2D.height - 115,   613,    canvas2D.height - 157));
walls.push(new Boundary(912, canvas2D.height - 251,   931,    canvas2D.height - 409));
walls.push(new Boundary(762, canvas2D.height - 345,   815,    canvas2D.height - 472));



// let show2D = true;
let show2D2 = false;
// let show3D = true;
// let pause = false;



gameLoop();
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx2D.clearRect(0, 0, canvas2D.width, canvas2D.height);

    

    background();
    playerHandler.movement();
    // if (show2D) {
        set2Dctx();
        player.draw();
        set3Dctx();
    // }
    renderWalls.splice(0, renderWalls.length)
    walls.forEach(wall => {
        // wall.hue +=1;
        // if (show2D) {
            set2Dctx();
            wall.draw();
        // }
        if (wall.isInsideFOV()) {
            wall.processFOV();
            wall.calculate3D();
            renderWalls.push(wall);
        }
    });
    


    if (renderWalls.length >= 1) {
        let sorted = wallsToGraph(renderWalls);
        if (sorted.length <= 1) sorted = [0]
        // if (show3D) {
            sorted.forEach(index => {
                renderWalls[index].display3D();
            });
        // }
    }

    drawing.start();
    touchControls();

    requestAnimationFrame(gameLoop);
}





// background terrain
function background() {
    // ctx.fillStyle = '#00d2ff';
    ctx.fillStyle = "#64a7ff";
    ctx.fillRect(0, canvas.height/2, canvas.width, canvas.height);
    ctx.fillStyle = "#969696";
    ctx.fillRect(0, -canvas.height/2, canvas.width, canvas.height);

    ctx2D.fillStyle = 'gray';
    ctx2D.fillRect(0, 0, canvas2D.width, canvas2D.height);

}


// shapes
// circle(200,200,10, 'cyan', 3);
// ellipse(300,200, 55,25, 'yellow', 2);
// line(50, 50, 200, 50, 'green', 10);

// polygon([canvas.width/2, 50,
//         canvas.width-canvas.width/3, canvas.height/2,
//         canvas.width/2, canvas.height-50,
//         canvas.width/3, canvas.height/2]);


