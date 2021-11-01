class Graph {
    constructor() {
        this.adjacencyList = new Map();
        this.edges = []
    }

    // add vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList.get(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // add edge to the graph
    addEdge(source, destination) {
        if (!this.adjacencyList.get(source)) {
            this.addVertex(source);
        }
        if (!this.adjacencyList.get(destination)) {
            this.addVertex(destination);
        }
        this.edges.push([source, destination])
        this.adjacencyList.get(source).push(destination);
    }

    // Prints the vertex and adjacency list
    printGraph() {
        // get all the vertices
        var get_keys = this.adjacencyList.keys();
        let final = "";
        // iterate over the vertices
        for (var i of get_keys) {
            // get the corresponding adjacency list for the vertex
            var get_values = this.adjacencyList.get(i);
            var conc = "";

            // iterate over the adjacency list and concatenate the values into a string
            for (var j of get_values) {
                conc += j + " ";
            }
            // print the vertex and its adjacency list
            final = final + i + " -> " + conc + "\n";
        }
        if (showGraph) {
            console.log(final);
            showGraph = false;
        }
    }


    /*/ // // Recursive DFS // // /*/
    // topologicalSort() {
    //     let G = this.adjacencyList;
    //     let distance = new Map();
    //     for (let v of G.keys()) {
    //         if (!distance.has(v)) {
    //             distance.set(v, 0);
    //             this.dfs(v, distance);
    //         }
    //     }
    //     let vertices = []
    //     let i = 0;
    //     while (distance.size > 0) {
    //         for (let v of G.keys()) {
    //             if (distance.get(v) == i) {
    //                 vertices.push(v)
    //                 distance.delete(v)
    //             }
    //         }
    //         i += 1
    //     }
    //     return vertices;
    // }

    // dfs(s, distance) {
    //     // console.log(s);
    //     let ds = distance.get(s);
    //     for (let v of this.adjacencyList.get(s)) {
            
    //         if (!distance.has(v) || distance.get(v) < ds + 1) {
    //             distance.set(v, ds+1);
    //             this.dfs(v, distance);
    //         }
    //     }
    // }


    /*/ // // Non-recursive DFS // // /*/
    topologicalSort() {
        let G = this.adjacencyList
        let distance = new Map();
        for (let v of G.keys()) {
            if (!distance.has(v)) {
                distance.set(v, 0);
                this.dfs(v, distance, G)
            }
        }
        // console.log(distance)
        let vertices = []
        let i = 0;
        while (distance.size > 0) {
            for (let v of G.keys()) {
                if (distance.get(v) == i) {
                    vertices.push(v)
                    distance.delete(v)
                }
            }
            i += 1
        }
        return vertices;
    }
    dfs(s, distance, G) {
        let counter = new Map();
        let nodes_to_visit = [ s ]

        while (nodes_to_visit.length > 0) {
            let currentnode = nodes_to_visit.shift();
            if (counter.has(currentnode)) {
                let curcount = counter.get(currentnode);
                counter.set(currentnode, curcount + 1)
                if (curcount > 1000) {
                    console.log(currentnode);
                    this.printGraph();
                    break;
                }
            } else {
                counter.set(currentnode, 1)
            }
            let currentDepth = distance.get(currentnode);
            G.get(currentnode).forEach(node => {
                if (!distance.has(node) || distance.get(node) < currentDepth + 1) {
                    distance.set(node, currentDepth + 1);
                    nodes_to_visit.unshift(node);
                }
            })
            
        }
    }
}

