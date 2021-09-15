function wallsToGraph(w) {
    const g = new Graph();
    
    for (let i = 0; i < w.length; i++) {
        for (let j = 0; j < w.length; j++) {
            if (i == j) continue
            // console.log(v1HigherThanv2(w[i], w[j]), i, j);
            if (v1HigherThanv2(w[i], w[j])) {
                g.addEdge(i, j);
            }
        }
    }
    g.printGraph()
}

// returns true if v1 is higher than v2
function v1HigherThanv2(w1, w2) {
    console.log(w1.index, w2.index)
    const PltoW1p = w1.v1;
    const PltoW1h = w1.v2;

    const PltoW2p = w2.v1;
    const PltoW2h = w2.v2;

    // V2 Just the wall vector (v1header - v1pos)
    // Creating the vector is different so that we can check for intersections
    const W2ptoW2h = {  "pos": {    "x": player.pos.x + w2.v2.x + w2.v1.x,
                                    "y": player.pos.y + w2.v2.y + w2.v1.y },
                        "header": { "x": w2.v2.x - w2.v1.x,
                                    "y": w2.v2.y - w2.v1.y,
                                    "length": vectorDist(w2.v2.x - w2.v1.x, w2.v2.y - w2.v1.y)},
                    };

    // V1 Just the wall vector (v1header - v1pos)
    // Creating the vector is different so that we can check for intersections
    const W1ptoW1h = {  "pos": {    "x": player.pos.x + w1.v2.x + w1.v1.x,
                                    "y": player.pos.y + w1.v2.y + w1.v1.y },
                        "header": { "x": w1.v2.x - w1.v1.x,
                                    "y": w1.v2.y - w1.v1.y,
                                    "length": vectorDist(w1.v2.x - w1.v1.x, w1.v2.y - w1.v1.y)},
                    };
    
    line(player.pos.x, player.pos.y, player.pos.x + w1.v2.x - w1.v1.x, player.pos.y + w1.v2.y - w1.v1.y)

    // Vector going from v1 pos to v2 pos (v2pos - v1pos)
    const W1ptoW2p = vectorCreate(  w2.v1.x - w1.v1.x,
                                    w2.v1.y - w1.v1.y);

    // Vector going from v1 pos to v2 header (v2header - v1pos)
    const W1ptoW2h = vectorCreate(  w2.v2.x - w1.v1.x,
                                    w2.v2.y - w1.v1.y);

    if (w1 == w2) {
        // console.log(v1.index, v2.index)
        return false; // if lines are the same, ignore
    }

    // if either point of v2 is overlapping with v1
    console.log(isClockwiseOrder(PltoW1p, PltoW2p),
                !isClockwiseOrder(PltoW1h, PltoW2p))
    console.log(isClockwiseOrder(W1ptoW1h.header, W1ptoW2p),
                isClockwiseOrder(W1ptoW1h.header, W1ptoW2h))
    if ((isClockwiseOrder(PltoW1p, PltoW2p) && !isClockwiseOrder(PltoW1h, PltoW2p)) ||  // first check with v2 pos
        (isClockwiseOrder(PltoW1p, PltoW2h) && !isClockwiseOrder(PltoW1h, PltoW2h))) {  // second check with v2 header
            // if either of v2 is on top of v1
            if (isClockwiseOrder(W1ptoW1h.header, W1ptoW2p) || isClockwiseOrder(W1ptoW1h.header, W1ptoW2h)) {   // 
                    return true;
                }
    } else if (isIntersection(W1ptoW1h, W2ptoW2h)) {
        return true;
    }
    return false;
}

// function CClockwiseToB(origin, B, C) {
//     const newB = {
//         "x": origin.x - B.x,
//         "y": origin.y - B.y
//     }
//     const newC = {
//         "x": origin.x - C.x,
//         "y": origin.y - C.y
//     }
//     return isClockwiseOrder(newB, newC);
// }




// https://gist.github.com/shinout/1232505
function tsort(edges) {
    // console.log(allWalls);
    edges = [
        [1, 2],
        [4, 7],
        [2, 5],
        [1, 3],
        [3, 5],
        [1, 4],
        [5, 6]
    ]

    // edges = []
    // if (allWalls.length > 1) {
    //     for (let i=1; i < allWalls.length; i++) {
    //         edges.push([allWalls[i-1].index, allWalls[i].index])
    //         console.log([allWalls[i-1].index, allWalls[i].index])
    //     }
    // }

    var nodes   = {}, // hash: stringified id of the node => { id: id, afters: lisf of ids }
      sorted  = [], // sorted list of IDs ( returned value )
      visited = {}; // hash: id of already visited node => true

    var Node = function(id) {
        this.id = id;
        this.afters = [];
    }

    // 1. build data structures
    edges.forEach(function(v) {
        var from = v[0], to = v[1];
        if (!nodes[from]) nodes[from] = new Node(from);
        if (!nodes[to]) nodes[to]     = new Node(to);
        nodes[from].afters.push(to);
    });

    // 2. topological sort
    Object.keys(nodes).forEach(function visit(idstr, ancestors) {
        var node = nodes[idstr],
            id   = node.id;

        // if already exists, do nothing
        if (visited[idstr]) return;

        if (!Array.isArray(ancestors)) ancestors = [];

        ancestors.push(id);

        visited[idstr] = true;

        node.afters.forEach(function(afterID) {
        if (ancestors.indexOf(afterID) >= 0)  // if already in ancestors, a closed chain exists.
            throw new Error('closed chain : ' +  afterID + ' is in ' + id);

        visit(afterID.toString(), ancestors.map(function(v) { return v })); // recursive call
        });

        sorted.unshift(id);
    });

    return sorted;
}




