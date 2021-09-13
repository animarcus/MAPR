
function wallsToGraph(w) {
    const g = new Graph(w.length);
    
    for (let i = 0; i < w.length; i++) {
        for (let j = i+1; j < w.length; j++) {
            // console.log(v1LowerThanv2(w[i], w[j]), i, j)
            if (v1LowerThanv2(w[i], w[j]) == true) {
                g.addEdge(i, j);
            } else {
                g.addEdge(j, i);
            }
        }
    }
    console.log(g.AdjList)
    g.printGraph()
}


// const graph = new Graph(4);
// const vertices = ['a', 'b', 'c', 'd'];

// for (let i=0; i < vertices.length; i++) {
//     graph.addVertex(vertices[i]);
// }

// graph.addEdge('a', 'b')
// graph.addEdge('a', 'c')
// graph.addEdge('c', 'd')

// graph.printGraph();


function v1LowerThanv2(v1, v2) {
    const origin = player.pos;

    const PltoV1p = vectorAdd(v1.v1, player.pos);
    const PltoV1h = vectorAdd(v1.v2, player.pos);

    const PltoV2p = vectorAdd(v2.v1, player.pos);
    const PltoV2h = vectorAdd(v2.v2, player.pos);

    if(v1 == v2) {
        console.log(v1.index, v2.index)
        return false; // if lines are the same, ignore
    }
    // checks if PltoV2p is in the sector defined by PltoV1p and PltoV1h
    if(ccw(origin, PltoV1p, PltoV2p) && !ccw(origin, PltoV1h, PltoV2p)){
        // if it is, checks if PltoV2p is on the same side of line a as origin
        return ccw(PltoV1p, PltoV1h, PltoV2p) !=  ccw(PltoV1p, PltoV1h, origin);
    }
    else if(ccw(origin, PltoV1p, PltoV2h) && !ccw(origin, PltoV1h, PltoV2h)){
        // if PltoV2p isn't in the sector, but PltoV2h is
        return ccw(PltoV1p, PltoV1h, PltoV2h) !=  ccw(PltoV1p, PltoV1h, origin);
    }
    else{
        // this was missing: when interval A is completely inside B, so we can
        // choose any point of A we want
        return ccw(PltoV2p, PltoV2h, PltoV1p) ==  ccw(PltoV2p, PltoV2h, origin);
    }
}

function ccw(A, B, C) {
    const newB = {
        "x": A.x - B.x,
        "y": A.y - B.y
    }
    const newC = {
        "x": A.x - C.x,
        "y": A.y - C.y
    }

    return isClockwiseOrder(newB, newC);
}




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




