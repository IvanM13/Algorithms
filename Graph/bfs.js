function bfs(graph, startNode, fn) {
    const visited = new Set(); // Массив посещенных узлов
    const queue = []; // Очередь для обхода узлов

    visited.add(startNode); // Добавляем стартовый узел в массив посещенных
    queue.push(startNode); // Добавляем стартовый узел в очередь

    while (queue.length) {
        const currentNode = queue.shift(); // Извлекаем первый узел из очереди

        fn(currentNode); // Выводим текущий узел (можно заменить на нужные действия)

        const neighbors = graph[currentNode]; // Получаем соседей текущего узла

        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];

            if (!visited.has(neighbor)) { // Если соседний узел не был посещен
                visited.add(neighbor); // Добавляем его в массив посещенных
                queue.push(neighbor); // Добавляем его в очередь
            }
        }
    }
}
function traverseDFS(graph, vertex, fn){
    let visited = {};
//     _traverseDFS(graph, vertex, visited, fn);
// }
// function _traverseDFS(graph, vertex, visited, fn){
    visited[vertex] = true;
    fn(vertex);
    for(let adjacentVertex in graph[vertex]){
        if (!visited[adjacentVertex]) {
            traverseDFS(adjacentVertex, visited, fn);
        }
    }
}

const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

const graph2 = {
    A: ['B', 'D'],
    B: ['C'],
    C: [],
    D: [],


}

bfs(graph, 'A', (vertex)=>{
    console.log(vertex);
});

traverseDFS(graph, 'A', (v) =>{
    console.log(v);
});

console.log();
bfs(graph2, 'A', (vertex)=>{
    console.log(vertex);
});
