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
        // get all the vertices
        console.log(this.adjacencyList, this.edges)
        var get_keys = this.adjacencyList.keys();
    
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
            console.log(i + " -> " + conc);
        }
    }
}
