function radians(degreeValue) {
    return degreeValue * (Math.PI/180);
}

function degrees(radianValue) {
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
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(coords[0], coords[1]);
    for (let i = 2; i < coords.length; i += 2) {
        ctx.lineTo(coords[i], coords[i+1]);
    }
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.stroke();
    ctx.fill();
    ctx.restore();
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
    return rotation;
}


// for choosing the color of the walls
// https://www.html-code-generator.com/javascript/color-converter-script
function HEXtoHSL(hex) {
    hex = hex.replace(/#/g, '');
    if (hex.length === 3) {
        hex = hex.split('').map(function (hex) {
            return hex + hex;
        }).join('');
    }
    var result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(hex);
    if (!result) {
        return null;
    }
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0;
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
        case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
        case g:
            h = (b - r) / d + 2;
            break;
        case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
    }
    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);

    return {
        h: h,
        s: s,
        l: l
    };
}
