class Graph {
    constructor() {
        this.edges = {};
    }
    addVertex(vertex) {
        this.edges[vertex] = {};
    }
    removeVertex(vertex) {
        for (const adjacentVertex in this.edges[vertex]) {
            this.removeEdge(adjacentVertex, vertex);
        }
        delete this.edges[vertex];
    }
    removeEdge(vertex1, vertex2) {
        if (this.edges[vertex1] && this.edges[vertex1][vertex2] != undefined) {
            delete this.edges[vertex1][vertex2];
        }
        if (this.edges[vertex2] && this.edges[vertex2][vertex1] != undefined) {
            delete this.edges[vertex2][vertex1];
        }
    }
    traverseBFS(vertex, fn) {
        let queue = [],
            visited = {};

        queue.push(vertex);

        while (queue.length) {
            vertex = queue.shift();
            if (!visited[vertex]) {
                visited[vertex] = true;
                fn(vertex);
                for (const adjacentVertex in this.edges[vertex]) {
                    queue.push(adjacentVertex);
                }
            }
        }
    }
    
    traverseDFS(vertex, fn){
        let visited = {};
        this._traverseDFS(vertex, visited, fn);
    }
    _traverseDFS(vertex, visited, fn){
        visited[vertex] = true;
        fn(vertex);
        for(let adjacentVertex in this.edges[vertex]){
            if (!visited[adjacentVertex]) {
                this._traverseDFS(adjacentVertex, visited, fn);
            }
        }
    }
}



class UndirectedGraph extends Graph {
    addEdge(vertex1, vertex2, weight) {
        if (weight === undefined) {
            weight = 0;
        }
        this.edges[vertex1][vertex2] = weight;
        this.edges[vertex2][vertex1] = weight;
    }
}

class DirectedGraph extends Graph {
    addEdge(origVertex, destVertex, weigth) {
        if (weigth === undefined) {
            weigth = 0;
        }
        this.edges[origVertex][destVertex] = weigth;
    }
}


let graph1 = new UndirectedGraph();
graph1.addVertex(1);
graph1.addVertex(2);
graph1.addEdge(1, 2, 1);
graph1.addVertex(3);
graph1.addVertex(4);
graph1.addVertex(5);
graph1.addEdge(2, 3, 8);
graph1.addEdge(3, 4, 10);
graph1.addEdge(4, 5, 100);
console.log(graph1.edges);

graph1.traverseBFS(5, (vertex) => {
    console.log(vertex);
});

graph1.removeVertex(4);
graph1.removeVertex(1);
graph1.removeEdge(2, 3);
console.log(graph1.edges);


let digraph1 = new DirectedGraph();
digraph1.addVertex('A');
digraph1.addVertex('B');
digraph1.addVertex('C');
digraph1.addEdge('A', 'B', 1);
digraph1.addEdge('B', 'C', 2);
digraph1.addEdge('C', 'A', 3);
// digraph1.removeEdge("A", 'B');
console.log(digraph1);

digraph1.traverseBFS('A', (vertex) => {
    console.log(vertex);
});
console.log();
digraph1.traverseDFS('C', (vertex) => {
    console.log(vertex);
});


