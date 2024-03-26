function DFS(graph, start, visited = new Set()) {
    console.log(start);
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
DFS(graph, 0);