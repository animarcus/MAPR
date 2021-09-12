function isClockwiseOrder(v1, v2) {  // Tests if the cross product with z=0, returns positive or negative (clockwise or anticlockwise)
    // const crossProduct = v1.x*v2.y - v1.y*v2.x;
    return v1.x*v2.y - v1.y*v2.x < 0;
}

function vectorDist(x, y) { // returns distance of a vector
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

function vectorAdd(A, B) {
    return {
        "x": A.x + B.x,
        "y": A.y + B.y
    }
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