const createAdjacencyMatrix = (edges) => {

    const rows = edges.length;

    const cols = edges.slice(0, -1).map((edge) => edge.length - 1).sort((a, b) => a - b);

    let matrix = new Array(rows);

    for (let i = 0; i < rows; i++) {

        matrix[i] = new Array(cols);

        for (let j = 0; j < cols[i]; j++) {

            matrix[i][j] = edges[i][j];

        }

    }
return matrix;

};


// const edges = [

// [1, 2],

// [2, 3],

// [3, 4],

// ];

// const adjacencyMatrix = createAdjacencyMatrix(edges);

// console.log(adjacencyMatrix);
// graph = [[1, 2], [1, 3], [1, 4], [2, 3], [5, 4]];
// console.log(createAdjacencyMatrix(graph));