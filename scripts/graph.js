// https://www.freecodecamp.org/news/8-essential-graph-algorithms-in-javascript/
class Graph {
    constructor() {
        this.adjacencyList = new Map();
        this.edges = []
        // this.noOfVertices = noOfVertices;
        // for (let i=0; i < noOfVertices; i++) {
        //     this.addVertex(i);
        // }

        // this.adjacencyList.set(1, []);
        // this.adjacencyList.get(1).push(2);
        // this.adjacencyList.set(2, []);
        // this.adjacencyList.get(2).push(5);
        // console.log(this.adjacencyList)
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
        // this.adjacencyList.get(destination).push(source);
    }

    // Prints the vertex and adjacency list
    printGraph() {
        console.log(this.adjacencyList)
        // get all the vertices
        // console.log(this.adjacencyList, this.edges)
        var get_keys = this.adjacencyList.keys();
        let final = "";
        // iterate over the vertices
        for (var i of get_keys) {
            // great the corresponding adjacency list
            // for the vertex
            var get_values = this.adjacencyList.get(i);
            var conc = "";
            // console.log(get_values)
            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values)
                conc += j + " ";
            
            // print the vertex and its adjacency list
            final = final + i + " -> " + conc + "\n";
        }
        console.log(final)
    }

    // https://stackoverflow.com/questions/32857997/get-topological-ordering-of-graph-from-adjacency-list
    topologicalSort() {
        let G = this.adjacencyList;
        // console.log(this.adjacencyList.keys(), this.adjacencyList);
        let vertices = []
        let explored = new Set()
        // console.log(G.get(-1));
        // for (let i of G.keys()) {
        //     console.log(i)
        // }
        for (let v of G.keys()) {
            
            if (!explored.has(v)) {
                this.dfs(G, v, explored, vertices)
            }
            //     dfs(G, v, explored, distance, current_label)
        }
        return vertices;
    }

    dfs(G, s, explored, vertices) {
        explored.add(s)
        
        // #print G[s]
        for (let v of G.keys()) {
            // console.log(v)
            if (!explored.has(v)) {
                this.dfs(G, v, explored, vertices)
            }
        }
        vertices.push(s)
        console.log(vertices);
    }
}
