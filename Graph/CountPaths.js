function countPaths(graph, start, end, visited = new Set()) {
    if (start === end) {
        return 1;
    }

    visited.add(start);
    let count = 0;

    for (let i = 0; i < graph.length; i++) {
        if (graph[start][i] && !visited.has(i)) {
            count += countPaths(graph, i, end, visited);
        }
    }

    visited.delete(start);

    return count;
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

// const graph = [
//     [false,true,false,false,true],
//     [true,false,true,true,false],
//     [false,true,false,false,true],
//     [false,true,false,false,true],
//     [true,false,true,true,false]
// ];
const start = 0;
const end = graph.length - 1;
const numPaths = countPaths(graph, start, end);
console.log(numPaths); // Output: 4