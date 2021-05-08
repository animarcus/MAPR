function radians(degreeValue) {
    // console.log("[radians dunc]", degreeValue, degreeValue * (Math.PI/180));
    return degreeValue * (Math.PI/180);
}

function degrees(radianValue) {
    // console.log();
    // return parseInt((Math.round(radianValue * (180/Math.PI))).toFixed(2));
    return radianValue * (180/Math.PI);
}

function circle(x, y, r, fill = "white", lineWidth = 1, lineColor = fill) {
    ctx.beginPath();
    ctx.fillStyle = fill;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

function ellipse(x, y, r1, r2 = r1, fill = "white", lineWidth = 1, lineColor = fill) {
    ctx.beginPath();
    ctx.fillStyle = fill;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.ellipse(x, y, r1, r2, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

function line(x1, y1, x2, y2, lineColor = 'white', lineWidth = 1) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function polygon(coords, fill = "white", lineWidth = 1, lineColor = fill) {
    if (coords.length % 2 != 0) {
        console.warn('undefined number of args when drawing polygon');
        return;
    }
    ctx.beginPath();
    ctx.moveTo(coords[0], coords[1]);
    for (let i = 2; i < coords.length; i += 2) {
        ctx.lineTo(coords[i], coords[i+1]);
        // console.log(i, i+1);
    }
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.stroke();
    ctx.fill();
    return coords;
}


function getRotation(pos, header) {
    let rotation = Math.abs(Math.atan(header.y/header.x));
    const x = pos.x;
    const y = pos.y;
    const x2 = pos.x + header.x;
    const y2 = pos.y + header.y;
    if (x2 > x && y2 >= y) rotation = rotation; //Q1  no change
    if (x2 <= x && y2 > y) rotation = Math.PI - rotation; //Q2  add 90 degrees
    if (x2 < x && y2 <= y) rotation += Math.PI;
    if (x2 >= x && y2 < y) rotation = Math.PI*2 - rotation;

    // console.log(degrees(rotation));
    return rotation;
}