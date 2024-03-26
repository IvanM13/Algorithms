function bfs(graph, startNode) {
    const visited = new Set(); // Массив посещенных узлов
    const queue = []; // Очередь для обхода узлов

    visited.add(startNode); // Добавляем стартовый узел в массив посещенных
    queue.push(startNode); // Добавляем стартовый узел в очередь

    while (queue.length > 0) {
        const currentNode = queue.shift(); // Извлекаем первый узел из очереди

        console.log(currentNode); // Выводим текущий узел (можно заменить на нужные действия)

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

const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};
bfs(graph, 'D');

