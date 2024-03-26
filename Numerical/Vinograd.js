function multiplyMatrix(matrix1, matrix2) {
    var rows1 = matrix1.length;
    var cols1 = matrix1[0].length;
    var rows2 = matrix2.length;
    var cols2 = matrix2[0].length;

    if (cols1 !== rows2) {
        return null;
    }

    // Создание результирующей матрицы
    var result = new Array(rows1);
    for (var i = 0; i < rows1; i++) {
        result[i] = new Array(cols2);
        for (var j = 0; j < cols2; j++) {
            result[i][j] = 0;
        }
    }

    // Расчет векторов Винограда
    var rowFactor = new Array(rows1);
    var colFactor = new Array(cols2);

    for (var i = 0; i < rows1; i++) {
        rowFactor[i] = 0;
        for (var j = 0; j < cols1 / 2; j++) {
            rowFactor[i] += matrix1[i][2 * j] * matrix1[i][2 * j + 1];
        }
    }

    for (var i = 0; i < cols2; i++) {
        colFactor[i] = 0;
        for (var j = 0; j < rows2 / 2; j++) {
            colFactor[i] += matrix2[2 * j][i] * matrix2[2 * j + 1][i];
        }
    }
    // Умножение матрицы
    for (var i = 0; i < rows1; i++) {
        for (var j = 0; j < cols2; j++) {
            var sum = 0;
            for (var k = 0; k < cols1 / 2; k++) {
                sum += (matrix1[i][2 * k + 1] + matrix2[2 * k][j]) * (matrix1[i][2 * k] + matrix2[2 * k + 1][j]);
            }
            result[i][j] = sum - rowFactor[i] - colFactor[j];
        }
    }

    // Возвращение результирующей матрицы
    return result;
}

const x = [
    [1, 2],
    [3, 4]
];

const y = [
    [5, 6],
    [7, 8]
];

const x1 = [
    [1, 0],
    [0, 3]
];

const y2 = [
    [3, 0],
    [0, 2]
]

console.log(multiplyMatrix(x, y));
console.log(multiplyMatrix(x1, y2));