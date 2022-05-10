function wallsToGraph(w) {
    if (w.length < 2) return [];

    const g = new Graph();
    for (let i = 0; i < w.length - 1; i++) {
        for (let j = i+1; j < w.length; j++) {
            if (v1HigherThanv2(w[i], w[j])) {
                g.addEdge(j, i);
            } else if (v1HigherThanv2(w[j], w[i])) {
                g.addEdge(i, j);
            } else {
                g.addVertex(i);
                g.addVertex(j);
            }
        }
    }
    let final = g.topologicalSort().reverse()
    return final;
}

// returns true if v1 is higher than v2
function v1HigherThanv2(w1, w2) {
    if (isSame(vectorMult(w1.p, w1.p.dist), vectorMult(w2.h, w2.h.dist)) ||
        isSame(vectorMult(w1.h, w1.h.dist), vectorMult(w2.p, w2.p.dist))) {
        return false
    }
    W1HtoW1P = vectorCreate(w1.p.x * w1.p.dist - w1.h.x * w1.h.dist,
                            w1.p.y * w1.p.dist - w1.h.y * w1.h.dist)
    W2HtoW2P = vectorCreate(w2.p.x * w2.p.dist - w2.h.x * w2.h.dist,
                            w2.p.y * w2.p.dist - w2.h.y * w2.h.dist)

    // V1 Just the wall vector (v1dir - v1pos)
    // Creating the vector is different so that we can check for intersections
    const W1ptoW1h = {"pos": {  "x": player.pos.x + w1.p.x * w1.p.dist,
                                "y": player.pos.y + w1.p.y * w1.p.dist },
                      "dir": {  "x": w1.h.x * w1.h.dist - w1.p.x * w1.p.dist,
                                "y": w1.h.y * w1.h.dist - w1.p.y * w1.p.dist }};

    // V2 Just the wall vector (v2dir - v2pos)
    // Creating the vector is different so that we can check for intersections
    const W2ptoW2h = {"pos": {  "x": player.pos.x + w2.p.x * w2.p.dist,
                                "y": player.pos.y + w2.p.y * w2.p.dist },
                      "dir": {  "x": w2.h.x * w2.h.dist - w2.p.x * w2.p.dist,
                                "y": w2.h.y * w2.h.dist - w2.p.y * w2.p.dist }};


    const W2p = {
        "x": player.pos.x + w2.p.dist * w2.p.x,
        "y": player.pos.y + w2.p.dist * w2.p.y
    }
    const W2h = {
        "x": player.pos.x + w2.h.dist * w2.h.x,
        "y": player.pos.y + w2.h.dist * w2.h.y
    }

    if (isSame(vectorMult(w1.p, w1.p.dist), vectorMult(w2.p, w2.p.dist)) && isSame(vectorMult(w1.h, w1.h.dist), vectorMult(w2.h, w2.h.dist))) {
        return isClockwiseOrder(W1ptoW1h.dir, vectorSubtract(W2p, W1ptoW1h.pos)) && isClockwiseOrder(W1ptoW1h.dir, vectorSubtract(W2h, W1ptoW1h.pos));
    } else if (isSame(vectorMult(w1.p, w1.p.dist), vectorMult(w2.p, w2.p.dist))) {
        return isClockwiseOrder(W1ptoW1h.dir, W2ptoW2h.dir);
    } else if (isSame(vectorMult(w1.h, w1.h.dist), vectorMult(w2.h, w2.h.dist))) {
        return !isClockwiseOrder(W1HtoW1P, W2HtoW2P);
    }

    const PltoW1P = { "pos": {  "x": player.pos.x,
                                "y": player.pos.y },
                      "dir": {  "x": w1.p.x * w1.p.dist,
                                "y": w1.p.y * w1.p.dist }};
    const PltoW1H = { "pos": {  "x": player.pos.x,
                                "y": player.pos.y },
                      "dir": {  "x": w1.h.x * w1.h.dist,
                                "y": w1.h.y * w1.h.dist }};

    const W1p = {   "x": player.pos.x + w1.p.dist * w1.p.x,
                    "y": player.pos.y + w1.p.dist * w1.p.y}
    const W1h = {   "x": player.pos.x + w1.h.dist * w1.h.x,
                    "y": player.pos.y + w1.h.dist * w1.h.y}
    
    return  isIntersectionVectors(PltoW1P, W2ptoW2h) ||
            isIntersectionVectors(PltoW1H, W2ptoW2h) ||
            ptInTriangle(W2p, player.pos, W1p, W1h) ||
            ptInTriangle(W2h, player.pos, W1p, W1h)

}


const EPSILON = 0.01
function isSame(v1, v2) {
    return  Math.abs(v1.x - v2.x) < EPSILON &&
            Math.abs(v1.y - v2.y) < EPSILON
}

function ptInTriangle(P, A, B, C) {
    if (isSame(P, A) || isSame(P, B) || isSame(P, C)) return false
    const w1 = (A.x*(C.y - A.y) + (P.y - A.y)*(C.x - A.x) - P.x*(C.y - A.y)) / ((B.y - A.y)*(C.x - A.x) - (B.x - A.x)*(C.y - A.y))
    const w2 = (P.y - A.y - w1*(B.y - A.y)) / (C.y - A.y)
    return w1 >= 0 && w2 >= 0 && w1 + w2 <= 1
}

function isIntersectionVectors(v1, v2) {
    const x1 = v1.pos.x;
    const y1 = v1.pos.y;
    const x2 = x1 + v1.dir.x;
    const y2 = y1 + v1.dir.y;

    const x3 = v2.pos.x;
    const y3 = v2.pos.y;
    const x4 = x3 + v2.dir.x;
    const y4 = y3 + v2.dir.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den == 0) return false;
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
    // if t and u are between 0 and 1 then the intersection falls between v1 and v2
    return u > 0.0 && u < 1.0 && t > 0.0 && t < 1.0; 
}
