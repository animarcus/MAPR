// Canvas declared in interface.js
handlers.updateCanvasSize();
ctx.translate(0,canvas.height);
ctx.scale(1,-1);
const player = new Player(canvas.width/2 , canvas.height/2 - 100, 90);
player.fov.xamount = 135;
const walls = [];
// const walls = JSON.parse(localStorage.getItem("walls"));

walls.push(new Boundary(290, 400, 350, 200));
player.setFOV();


player.draw();


let show2D = true;
let show2D2 = true;

gameLoop();
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background();
    playerHandler.movement();
    if (show2D) player.draw();

    walls.forEach(wall => {
        // wall.hue +=1;
        if (show2D) wall.draw();
        // if (wall.isInsideFov()) {
            wall.isInsideFov();
            wall.calculate3D();
        // }
    });

    drawing.start();


    requestAnimationFrame(gameLoop);
}



function isClockwiseOrder(v1, v2) {
    // const crossProduct = v1.x*v2.y - v1.y*v2.x;
    return v1.x*v2.y - v1.y*v2.x < 0;
}

function vectorDist(x, y) {
    return Math.sqrt(x**2 + y**2);
}

function vectorDotProduct(v1, v2) {
    // const dot = v1.x*v2.x + v1.y*v2.y;
    return v1.x*v2.x + v1.y*v2.y;
}

function vectorCreate(headerx, headery) {
    return {
        'x': headerx,
        'y': headery
    };
}

function vectorNormalize(v, dist=v.dist) {
    v.x = v.x/dist;
    v.y = v.y/dist;
    return v;
}

function isIntersection(v1, v2) {   // condensed version of intersection() but only the conditional
    const x1 = v1.pos.x;
    const y1 = v1.pos.y;
    const x2 = x1 + v1.header.x * v1.header.length;
    const y2 = y1 + v1.header.y * v1.header.length;

    const x3 = v2.pos.x;
    const y3 = v2.pos.y;
    const x4 = x3 + v2.header.x;
    const y4 = y3 + v2.header.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den == 0) return false;
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
    
    return u >= 0 && u <= 1 || t >= 0 && t <= 1;
}
function intersection(v1, v2) {
    if (!isIntersection(v1, v2)) return;

    const x1 = v1.pos.x;
    const y1 = v1.pos.y;
    const x2 = x1 + v1.header.x * v1.header.length;
    const y2 = y1 + v1.header.y * v1.header.length;

    const x3 = v2.pos.x;
    const y3 = v2.pos.y;
    const x4 = x3 + v2.header.x;
    const y4 = y3 + v2.header.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den == 0) return;
    

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / den;
    const xint = x3 + u * (x4 - x3);
    const yint = y3 + u * (y4 - y3);
    if ((u >= 0 && u <= 1)
        //  || (t >= 0 && t <= 0)
        ) { // if u is between 0 and 1 then the intersection falls within the second segment (v2)
        const intersection = {
            'x': xint,
            'y': yint,
            'dist': Math.sqrt((y1 - yint) ** 2 + (x1 - xint) ** 2)
        };
        return intersection;
    }
    return;
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


