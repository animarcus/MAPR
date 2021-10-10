// Canvas declared in interface.js
handlers.updateCanvasSize();
ctx.translate(0,canvas.height);
ctx.scale(1,-1);
const player = new Player(canvas.width/2 , canvas.height/2 - 100, 90);
player.fov.xamount = 45;


let wallCount = 0
const walls = [];
let renderWalls = [];
// const walls = JSON.parse(localStorage.getItem("walls"));

walls.push(new Boundary(canvas.width / 5, 400, canvas.width - canvas.width / 5, 400));
// walls.push(new Boundary(canvas.width / 5, 450, canvas.width - canvas.width / 5, 450));
walls.push(new Boundary(canvas.width / 2, 350, canvas.width - canvas.width / 3, 350));

walls.push(new Boundary(canvas.width / 7, 470, canvas.width - canvas.width / 7, 470));

walls[0].hue = 50;
player.setFOV();
// console.log(walls)

player.draw();


let show2D = true;
let show2D2 = false;
let show3D = false;
let pause = false;


// var points = [40, 100, 1, 5, 25, 10];

// console.log(points);
// points.sort(function (a, b) { return b - a });
// console.log(points);

gameLoop();
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background();
    playerHandler.movement();
    if (show2D) player.draw();

    // console.log(renderWalls);
    renderWalls.splice(0, renderWalls.length)
    // console.log(renderWalls);
    walls.forEach(wall => {
        // wall.hue +=1;
        if (show2D) wall.draw();
        if (wall.isInsideFOV()) {
            wall.processFOV();
            wall.calculate3D();
            // wall.display3D();
            renderWalls.push(wall);
        }
    });


    if (renderWalls.length >= 1 && !pause) {
        // renderWalls.sort(compareWalls);
        // console.log(" ");
        
        
        let sorted = wallsToGraph(renderWalls);
        
        if (JSON.stringify(sorted) == JSON.stringify([2, 0, 1])) console.log("HOORAY IT WORKS i think");
        
        
        
        // console.log(sorted)
        if (sorted.length <= 1) sorted = [0]// let tmp = [];
        // renderWalls.forEach(i => {
        //     tmp.push(i.index)
        // });

        let tmp = [];
        sorted.forEach(i => {
            tmp.push(renderWalls[i].index)
        });
        // console.log(tmp)
        if (show3D) {
            // renderWalls.forEach(i => {
            //     i.display3D()
            // })
            // ctx.globalAlpha = 0.5;
            sorted.forEach(index => {
                renderWalls[index].display3D();
            });
            ctx.globalAlpha = 1;
            ctx.save();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.font = "30px Arial";
            ctx.fillStyle = 'white';
            if (show2D) {
                ctx.fillText(tmp, 50, 50);
                ctx.font = "20px Arial";
                ctx.fillText("expected: 2,0,1", 50, 75);
                ctx.fillText(renderWalls.length, 50, 100);
            }
            ctx.restore();
        }
    }

    // walls.sort(compareWalls);
    // ctx.save();
    // ctx.setTransform(1, 0, 0, 1, 0, 0);
    // ctx.font = "30px Arial";
    // ctx.fillStyle = 'white';
    // ctx.fillText(renderWalls.length, 50, 50);
    // ctx.restore();



    // drawing.start();

    // requestAnimationFrame(gameLoop);
}


function logSorted(lst) {
    let tmp = [];
    lst.forEach(i => {
        tmp.push(i.index)
    });
    console.log(tmp)
}



// background terrain
function background() {
    ctx.fillStyle = '#00d2ff';
    ctx.fillRect(0, canvas.height/2, canvas.width, canvas.height);
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, -canvas.height/2, canvas.width, canvas.height);
}


// shapes
// circle(200,200,10, 'cyan', 3);
// ellipse(300,200, 55,25, 'yellow', 2);
// line(50, 50, 200, 50, 'green', 10);

// polygon([canvas.width/2, 50,
//         canvas.width-canvas.width/3, canvas.height/2,
//         canvas.width/2, canvas.height-50,
//         canvas.width/3, canvas.height/2]);


