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
class Graph {
    constructor() {
        this.edges = {};
    }
    traverseDFS(vertex, fn) {
        let visited = {};
        this._traverseDFS(vertex, visited, fn);
    }
    _traverseDFS(vertex, visited, fn) {
        visited[vertex] = true;
        fn(vertex);
        for (let adjacentVertex in this.edges[vertex]) {
            if (!visited[adjacentVertex]) {
                this._traverseDFS(adjacentVertex, visited, fn);
            }
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

const graph2 = new Graph();
graph2.edges = {
    A: { B: 1, D: 3 },
    B: { C: 1 },
    C: { A: 2, E: 5 },
    D: { F: 3 },
    E: {},
    F: {}
}

graph2.traverseDFS('A', (v) => {
    console.log(v);
})



bfs(graph, 'A', (vertex)=>{
    console.log(vertex);
});

