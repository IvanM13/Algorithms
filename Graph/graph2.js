function UnderectedGraph() {
    this.edges = {};
}

UnderectedGraph.prototype.addVertex = function(vertex) {
    this.edges[vertex] = {};
}

UnderectedGraph.prototype.addEdge = function(vertex1, vertex2, weight){
    if (weight == undefined) {
        weight = 0;
    }
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
}

let graph1 = new UnderectedGraph();
graph1.addVertex(1);
graph1.addVertex(2);
graph1.addEdge(1, 2, 3);


class Graph{
    constructor(){
        this.edges = {};
    }
    addVertex(vertex){
        this.edges[vertex] = {};
    }
    addEdge(vertex1, vertex2, weight){
        if (weight === undefined) {
            weight = 0;
        }
        this.edges[vertex1][vertex2] = weight;
        this.edges[vertex2][vertex1] = weight;
    }
}

let graph2 = new Graph();
graph2.addVertex(1);
graph2.addVertex(2);
console.log(graph2);
graph2.addEdge(1, 2, 1);
graph2.addVertex(3);
graph2.addEdge(2, 3, 4);

console.log(graph2.edges);