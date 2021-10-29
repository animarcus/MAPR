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

    g.printGraph();
    let final = g.topologicalSort().reverse()
    
    return final;
}

// returns true if v1 is higher than v2
function v1HigherThanv2(w1, w2) {
    
    const W1p = {   "x": player.pos.x + w1.p.dist * w1.p.x,
                    "y": player.pos.y + w1.p.dist * w1.p.y}
    const W1h = {   "x": player.pos.x + w1.h.dist * w1.h.x,
                    "y": player.pos.y + w1.h.dist * w1.h.y}
    const W2p = {   "x": player.pos.x + w2.p.dist * w2.p.x,
                    "y": player.pos.y + w2.p.dist * w2.p.y}
    const W2h = {   "x": player.pos.x + w2.h.dist * w2.h.x,
                    "y": player.pos.y + w2.h.dist * w2.h.y}

    // V2 Just the wall vector (v1header - v1pos)
    // Creating the vector is different so that we can check for intersections
    const W2ptoW2h = {  "pos": {    "x": player.pos.x + w2.p.x * w2.p.dist,
                                    "y": player.pos.y + w2.p.y * w2.p.dist },
                        "header": { "x": w2.h.x * w2.h.dist - w2.p.x * w2.p.dist,
                                    "y": w2.h.y * w2.h.dist - w2.p.y * w2.p.dist }};
    
    const PltoW1P = {   "pos": {    "x": player.pos.x,
                                    "y": player.pos.y },
                        "header": { "x": w1.p.x * w1.p.dist,
                                    "y": w1.p.y * w1.p.dist }};
    const PltoW1H = {   "pos": {    "x": player.pos.x,
                                    "y": player.pos.y },
                        "header": { "x": w1.h.x * w1.h.dist,
                                    "y": w1.h.y * w1.h.dist }};

    // line(W1p.x, W1p.y, player.pos.x, player.pos.y, 'purple', 1)
    // line(W1h.x, W1h.y, player.pos.x, player.pos.y, 'purple', 1);
    // line(W2p.x, W2p.y, player.pos.x, player.pos.y, 'purple', 1);
    // line(W2h.x, W2h.y, player.pos.x, player.pos.y, 'purple', 1);

    return  isIntersectionVectors(PltoW1P, W2ptoW2h) || isIntersectionVectors(PltoW1H, W2ptoW2h) ||
            ptInTriangle(W2p, player.pos, W1p, W1h) || ptInTriangle(W2h, player.pos, W1p, W1h)
}

function ptInTriangle(p, p0, p1, p2) {
    var A = 1/2 * (-p1.y * p2.x + p0.y * (-p1.x + p2.x) + p0.x * (p1.y - p2.y) + p1.x * p2.y);
    var sign = A < 0 ? -1 : 1;
    var s = (p0.y * p2.x - p0.x * p2.y + (p2.y - p0.y) * p.x + (p0.x - p2.x) * p.y) * sign;
    var t = (p0.x * p1.y - p0.y * p1.x + (p0.y - p1.y) * p.x + (p1.x - p0.x) * p.y) * sign;
    
    return s > 0.0 && t > 0.0 && (s + t) < 2.0 * A * sign;
}
