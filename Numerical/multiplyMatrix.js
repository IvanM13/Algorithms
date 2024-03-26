function multiplyMatrix(matrix1, matrix2) {
    const result = [];
    const rows1 = matrix1.length;
    const cols1 = matrix1[0].length;
    const rows2 = matrix2.length;
    const cols2 = matrix2[0].length;
    
    if (cols1 !== rows2) {
      return result;
    }
    
    for (let i = 0; i < rows1; i++) {
      result[i] = [];
      for (let j = 0; j < cols2; j++) {
        result[i][j] = 0;
        for (let k = 0; k < cols1; k++) {
          result[i][j] += matrix1[i][k] * matrix2[k][j];
        }
      }
    }
    
    return result;
  }

  const matrix1 = [[1, 2, 3], [4, 5, 6]];
  const matrix2 = [[7, 8], [9, 10], [11, 12]];
  const result = multiplyMatrix(matrix1, matrix2);
  console.log(result);

  const a = [
    [1,43,6],
    [32,5,56],
    [56,2,6,]
];


const b = [
    [26,6,87],
    [56,7,3],
    [53,7,7]
]
console.log(multiplyMatrix(a,b));

const x = [
    [1, 2],
    [3, 4]
];

const y = [
    [5, 6],
    [7, 8]
];

console.log(multiplyMatrix(x, y));

const x1 = [
    [1, 0],
    [0, 3]
];

const y2 = [
    [3, 0],
    [0, 2]
]

console.log(multiplyMatrix(x1, y2));
