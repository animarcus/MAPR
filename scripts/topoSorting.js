function wallsToGraph(w) {
    if (w.length < 2) return [];
    // const test = v1HigherThanv2(w[0], w[1])
    // console.log(test)
    const g = new Graph();
    // const tmp = []
    for (let i = 0; i < w.length - 1; i++) {
        for (let j = i+1; j < w.length; j++) {
            // tmp.push(i + ", "+ j)
            // console.log(i, j)
            // if (i == j) continue
            // console.log(i, j)
            if (v1HigherThanv2(w[i], w[j])) {
                // console.log("i higher than j", i, j)
                // console.log("yay")
                g.addEdge(j, i);
            } else if (v1HigherThanv2(w[j], w[i])) {
                // console.log("j higher than i", i, j)
                g.addEdge(i, j);
            } else {
                g.addVertex(i);
                g.addVertex(j);
            }
        }
    }
    // console.log(g.edges)

    g.printGraph();
    let final = g.topologicalSort().reverse()
    // final = [0, 1]
    //.slice(0, w.length);
    // console.log(final)
    // const final = tsort(g.edges);
    return final;
}

// returns true if v1 is higher than v2
function v1HigherThanv2(w1, w2) {
    // V1 Just the wall vector (v1header - v1pos)
    // Creating the vector is different so that we can check for intersections
    const W1ptoW1h = {  "pos": {    "x": player.pos.x + w1.p.x * w1.p.dist,
                                    "y": player.pos.y + w1.p.y * w1.p.dist },
                        "header": { "x": w1.h.x * w1.h.dist - w1.p.x * w1.p.dist,
                                    "y": w1.h.y * w1.h.dist - w1.p.y * w1.p.dist,
                                    "length": null},
                    };
    W1ptoW1h.header.length = vectorDist(W1ptoW1h.header.x, W1ptoW1h.header.y)


    // V2 Just the wall vector (v1header - v1pos)
    // Creating the vector is different so that we can check for intersections
    const W2ptoW2h = {  "pos": {    "x": player.pos.x + w2.p.x * w2.p.dist,
                                    "y": player.pos.y + w2.p.y * w2.p.dist },
                        "header": { "x": w2.h.x * w2.h.dist - w2.p.x * w2.p.dist,
                                    "y": w2.h.y * w2.h.dist - w2.p.y * w2.p.dist,
                                    "length": null},
                    };
    W2ptoW2h.header.length = vectorDist(W2ptoW2h.header.x, W2ptoW2h.header.y)



    // line(player.pos.x, player.pos.y, player.pos.x + w1.h.x * w1.h.dist, player.pos.y + w1.h.y * w1.h.dist)
    // line(player.pos.x, player.pos.y, player.pos.x + w1.p.x * w1.p.dist, player.pos.y + w1.p.y * w1.p.dist)

    // Vector going from v1 pos to v2 pos (v2pos - v1pos)
    const W1ptoW2p = vectorCreate(  w2.p.x * w2.p.dist - w1.p.x * w1.p.dist,
                                    w2.p.y * w2.p.dist - w1.p.y * w1.p.dist);

    // Vector going from v1 pos to v2 header (v2header - v1pos)
    const W1ptoW2h = vectorCreate(  w2.h.x * w2.h.dist - w1.p.x * w1.p.dist,
                                    w2.h.y * w2.h.dist - w1.p.y * w1.p.dist);
    
    // line(   W1ptoW1h.pos.x, W1ptoW1h.pos.y,
    //         W1ptoW1h.pos.x + W1ptoW2p.x, W1ptoW1h.pos.y + W1ptoW2p.y)
    // line(   W1ptoW1h.pos.x, W1ptoW1h.pos.y,
    //         W1ptoW1h.pos.x + W1ptoW2h.x, W1ptoW1h.pos.y + W1ptoW2h.y)

    const PltoW1P = {
        "pos": {
            "x": player.pos.x,
            "y": player.pos.y
        },
        "header": {
            "x": w1.p.x,
            "y": w1.p.y,
            "length": w1.p.dist
        }
    }
    const PltoW1H = {
        "pos": {
            "x": player.pos.x,
            "y": player.pos.y
        },
        "header": {
            "x": w1.h.x,
            "y": w1.h.y,
            "length": w1.h.dist
        }
    }

    // one of w2 is inside triangle for w1
    // (isClockwiseOrder(w1.p, w2.p) && isClockwiseOrder(w2.p, w1.h)) && (isClockwiseOrder(w1.p, w2.h) && isClockwiseOrder(w2.h, w1.h))

    // w2 intersect with w1.p or w1.h
    // (isIntersection(PltoW1P, W2ptoW2h) || isIntersection(PltoW1H, W2ptoW2h))

    // (isClockwiseOrder(W1ptoW1h.header, W1ptoW2p) || isClockwiseOrder(W1ptoW1h.header, W1ptoW2h))

    if (isIntersection(PltoW1P, W2ptoW2h) || isIntersection(PltoW1H, W2ptoW2h)) {
        return true;
    }

    if ((isClockwiseOrder(w1.p, w2.p) && isClockwiseOrder(w2.p, w1.h)) ||  // first check with w2 pos
        (isClockwiseOrder(w1.p, w2.h) && isClockwiseOrder(w2.h, w1.h))) {  // second check with w2 header
            // console.log(isClockwiseOrder(W1ptoW1h.header, W1ptoW2p), isClockwiseOrder(W1ptoW1h.header, W1ptoW2h))
            // if either of v2 is on top of v1
            // console.log(isClockwiseOrder(W1ptoW1h.header, W1ptoW2p), isClockwiseOrder(W1ptoW1h.header, W1ptoW2h))
            if (isClockwiseOrder(W1ptoW1h.header, W1ptoW2p) ||
                isClockwiseOrder(W1ptoW1h.header, W1ptoW2h)) {
                return true;
            }
    }


    // if (isClockwiseOrder(w1.p, w2.p) && isClockwiseOrder(w2.p, w1.h) && isClockwiseOrder(w1.p, w2.h) && isClockwiseOrder(w2.h, w1.h)) {
    //     if (isIntersection(PltoW1P, W2ptoW2h) || isIntersection(PltoW1H, W2ptoW2h)) {
    //         return true;
    //     } else if (isClockwiseOrder(W1ptoW1h.header, W1ptoW2p) || isClockwiseOrder(W1ptoW1h.header, W1ptoW2h)) {
    //         return true;
    //     }
    // }
    return false;
}



// https://gist.github.com/shinout/1232505
function tsort(edges) {
    // console.log(allWalls);
    // edges = [
    //     [1, 2],
    //     [4, 7],
    //     [2, 5],
    //     [1, 3],
    //     [3, 5],
    //     [1, 4],
    //     [5, 6]
    // ]

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
    // console.log(sorted)
    return sorted;
}




