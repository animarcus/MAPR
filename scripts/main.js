// Canvas declared in interface.js
handlers.updateCanvasSize();
ctx.translate(0,canvas.height);
ctx.scale(1,-1);
const player = new Player(canvas.width/2 , canvas.height/2 - 100, 90);
player.fov.xamount = 135;


let wallCount = 0
const walls = [];
let renderWalls = [];
// const walls = JSON.parse(localStorage.getItem("walls"));

walls.push(new Boundary(canvas.width / 3, 350, canvas.width - canvas.width / 3, 350));
// walls.push(new Boundary(canvas.width / 5, 400, canvas.width - canvas.width / 5, 400));
// walls.push(new Boundary(canvas.width / 5, 450, canvas.width - canvas.width / 5, 450));
player.setFOV();


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

    if (renderWalls.length > 1 ) {
        
        renderWalls.sort(compareWalls);

        // console.log(renderWalls);
        renderWalls.forEach(wall => {   // when moving check if renderwalls has items
            // console.log(wall.index)
            if (show3D) wall.display3D();
        })
    }

    // walls.sort(compareWalls);
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.font = "30px Arial";
    ctx.fillStyle = 'white';
    ctx.fillText(renderWalls.length, 50, 50);
    ctx.restore();

    drawing.start();

    requestAnimationFrame(gameLoop);
}


function compareWalls (v1, v2) {  // each wall has v1 and v2 (compare walls from renderwalls)
    if (pause) return 0;
    // V2p corresponds to v2.pos
    // V2h corresponds to v2.header
    // V1 corresponds to v1.pos
    // V1toV2p and V1toV2h are the directional vectors
    // player.pos.x + v2.v1.x// v2.pos.x
    // player.pos.x + v2.v2.x// v2.header.x

    const v1pos = vectorCreate(player.pos.x + v1.v1.x * v1.v1.dist, player.pos.y + v1.v1.y * v1.v1.dist);
    const v1head = vectorCreate(player.pos.x + v1.v2.x * v1.v2.dist - v1pos.x, player.pos.y + v1.v2.y * v1.v2.dist - v1pos.y);

    const v2pos = vectorCreate(player.pos.x + v2.v1.x * v2.v1.dist, player.pos.y + v2.v1.y * v2.v1.dist);
    const v2head = vectorCreate(player.pos.x + v2.v2.x * v2.v2.dist, player.pos.y + v2.v2.y * v2.v2.dist);

    const V1toV2p = vectorCreate(v2pos.x - v1pos.x, v2pos.y - v1pos.y);   // v2 - v1 pos
    const V1toV2h = vectorCreate(v2head.x - v1pos.x, v2head.y - v1pos.y);  // v2 - v1 headers


    // line(canvas.width / 2, canvas.height / 2, canvas.width / 2 + v1head.x, canvas.height / 2 + v1head.y, "yellow", 5);
    // line(canvas.width / 2, canvas.height / 2, canvas.width / 2 + V1toV2p.x, canvas.height / 2 + V1toV2p.y, "yellow", 5);
    // line(canvas.width / 2, canvas.height / 2, canvas.width / 2 + V1toV2p.x, canvas.height / 2 + V1toV2p.y, "pink", 5);
    // line(canvas.width / 2, canvas.height / 2, canvas.width / 2 + V1toV2h.x, canvas.height / 2 + V1toV2h.y, "pink", 5);


    // check if both v2.v1 and v2.v2 are either to the left of v1.v1 or to the right of v1.v2
    // if the case, dont bother sorting
    if ((!isClockwiseOrder(v1.v1, v2.v1) && !isClockwiseOrder(v1.v1, v2.v2))
        || (isClockwiseOrder(v1.v2, v2.v1) && isClockwiseOrder(v1.v2, v2.v2))) return 0;


    // player to each header and pos of v1 and v2
    const PltoV1p = v1.v1;
    const PltoV1h = v1.v2;

    const PltoV2p = v2.v1;
    const PltoV2h = v2.v2;

    // V21 and V22 correspond to v2.1 or v2.2 (player to those points)
    const V21InsideTri = (isClockwiseOrder(PltoV1p, PltoV2p) && !isClockwiseOrder(PltoV1h, PltoV2p));
    const V22InsideTri = (isClockwiseOrder(PltoV1p, PltoV2h) && !isClockwiseOrder(PltoV1h, PltoV2h));

    // from the same point, check order according to v1
    const V2pUnderV1 = isClockwiseOrder(v1head, V1toV2p);
    const V2hUnderV1 = isClockwiseOrder(v1head, V1toV2h);

    // line(canvas.width/2, canvas.height/2, canvas.width/2 + v1.header.x, canvas.height/2 + v1.header.y, "yellow", 5);
    // line(canvas.width / 2, canvas.height / 2, canvas.width / 2 + V1toV2p.x * 100, canvas.height / 2 + V1toV2p.y * 100, "red", 5);
    // line(canvas.width / 2, canvas.height / 2, canvas.width / 2 + V1toV2h.x * 100, canvas.height / 2 + V1toV2h.y * 100, "orange", 5);


    // console.log(V2pUnderV1, V2hUnderV1)

    const anyV2UnderV1 = (V2pUnderV1 || V2hUnderV1);
    const bothV2UnderV1 = (V2pUnderV1 && V2hUnderV1);

    // console.log(bothV2UnderV1, (V21InsideTri && !V2pUnderV1), (V22InsideTri && !V2hUnderV1))
    // These two if statements are basically a mirror of eachother
    // One condifition is if both v2 points are under or on top of v1
    // Two conditions are if either V2 point is between the V1 points and if that point is on top or under
    // There is just a check for each possibility  


    if (V21InsideTri) {
        if (V2pUnderV1) {
            console.log("v2.v1 inside tri and v2.v1 is under v1");
            return -1;
        } else {
            console.log("v2.v1 inside tri and v2.v1 is ABOVE v1")
            return 1;
        }
    } else if (V22InsideTri) {
        if (V2hUnderV1) {
            console.log("v2.v2 inside tri and v2.v2 is under V1")
            return -1;
        } else {
            console.log("v2.v2 inside tri and v2.v2 is ABOVE v1")
            return 1;
        }
    } else if (anyV2UnderV1) {
        console.log("one of v2 under v1");
        return -1;
    } else if (bothV2UnderV1) {
        console.log("both v2 ABOVE v1");
        return 1;
    }
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
    
    return u >= 0 && u <= 1 && t >= 0 && t <= 1;  // if t and u are between 0 and 1 then the intersection falls between v1 and v2
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
    const u = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / den;  // t is needed to check if the intersection exists but not for calculating the point

    const xint = x3 + u * (x4 - x3);
    const yint = y3 + u * (y4 - y3);
    const intersection = {
        'x': xint,
        'y': yint,
        'dist': Math.sqrt((y1 - yint) ** 2 + (x1 - xint) ** 2)
    };
    return intersection;
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


