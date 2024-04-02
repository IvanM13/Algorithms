function DFS(graph, start, visited = new Set()) {
    console.log(start + 1);
    visited.add(start);

    for (let i = 0; i < graph[start].length; i++) {
        if (graph[start][i] && !visited.has(i)) {
            DFS(graph, i, visited);
        }
    }
}
// const graph = [
//     [false,true,false,false,true],
//     [true,false,true,true,false],
//     [false,true,false,false,true],
//     [false,true,false,false,true],
//     [true,false,true,true,false]
// ];
function DFS2(graph, i, visited = []) {
    let j;
    visited[i] = 1;
    console.log(i + 1);
    for (j = 0; j < graph.length; j++) {
        if (graph[i][j] && !visited[j]) {
            DFS2(graph, j, visited);
        }
    }
}
const graph = [
    [0, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 0, 0, 0, 0]
];

for (let index = 0; index < graph.length; index++) {
    console.log('DFS2');
    DFS2(graph, index);
}


for (let index = 0; index < graph.length; index++) {
    console.log('DFS');
    DFS(graph, index);
}

function createAdjacencyMatrix(numVertices, edges) {
    const matrix = [];

    for (let i = 0; i < numVertices; i++) {
        matrix.push(new Array(numVertices).fill(0));
    }

    for (const [vertex1, vertex2] of edges) {
        matrix[vertex1][vertex2] = 1;
        matrix[vertex2][vertex1] = 1; // Если граф неориентированный
    }

    return matrix;
}
const edges = [[0, 1], [3, 1], [2, 2], [3, 2], [4, 1]];
const numVertices = edges.length;
const adjacencyMatrix = createAdjacencyMatrix(numVertices, edges);
console.log(adjacencyMatrix);