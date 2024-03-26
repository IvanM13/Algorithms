function prim(graph){
    const numVertices = graph.length;
    const parent = new Array(numVertices).fill(null);
    const key = new Array(numVertices).fill(Infinity);
    const visited = new Array(numVertices).fill(false);

    key[0] = 0;

    for (let count = 0; count < numVertices - 1; count++) {
        const minKeyVertex = getMinKeyVertex(key, visited);
        visited[minKeyVertex] = true;

        for (let v = 0; v < numVertices; v++) {
            if(graph[minKeyVertex][v] && !visited[v] && 
                graph[minKeyVertex][v] < key[v]){
                parent[v] = minKeyVertex;
                key[v] = graph[minKeyVertex][v];
            }
            
        }
    }

    return parent;
}
function getMinKeyVertex(key, visited){
    let min = Infinity;
    let minIndex = -1;

    for (let v = 0; v < key.length; v++) {
        if(!visited[v] && key[v] < min){
            min = key[v];
            minIndex = v;
        }
    }
    return minIndex;
}

// function prim(graph, vertices, start) {
//     var minEdge = {}; // Словарь для хранения минимальных ребер
//     var parents = {}; // Словарь, хранящий предков для каждого вершины
    
//     for (var i = 0; i < vertices.length; i++) {
//     minEdge[i] = {weight: Number.POSITIVE_INFINITY, index: -1};
//     parents[i] = -1;
//     }
    
//     minEdge[start] = {weight: 0, index: start};
    
//     while (true) {
//     var minimum = null;
//     var smallestWeight = Number.POSITIVE_INFINITE;
    
//     for (var v = 0; v < vertices.length; v++) {
//       if (minEdge[v].weight < smallestWeight) {
//         smallestWeight = minEdge[v].weight;
//         minimum = v;
//       }
//     }
    
//     if (minimum == null) {
//       break;
    
//     }
    
//     for (let u = 0; u < vertices.length; u++) {
//       var candidate = {
//         v: minimum,
//         w: graph[minimum][u],
//       };
      
//       if (candidate.w < minEdge[u].weight) {
//         minEdge[u] = candidate;
//       }
//     }
    
//     }
    
//     return minEdge;
// }


// const graph = [
//     [0, 2, 0, 6, 0],
//     [2, 0, 3, 8, 5],
//     [0, 3, 0, 0, 7],
//     [6, 8, 0, 0, 9],
//     [0, 5, 7, 9, 0]
// ];

var graph = [
    [0, 7, 9, 0, 0, 0],
    [7, 0, 11, 0, 0, 0],
    [9, 11, 0, 2, 0, 0],
    [0, 0, 2, 0, 6, 0],
    [0, 0, 0, 6, 0, 8],
    [0, 0, 0, 0, 8, 0]
  ];
  

const parent = prim(graph, graph.length, 0);
console.log(parent);