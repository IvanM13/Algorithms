function gaussJordan(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    
    for (let col = 0; col < numCols - 1; col++) {
      let maxRow = col;
      for (let row = col + 1; row < numRows; row++) {
        if (Math.abs(matrix[row][col]) > Math.abs(matrix[maxRow][col])) {
          maxRow = row;
        }
      }
      [matrix[col], matrix[maxRow]] = [matrix[maxRow], matrix[col]];
      
      for (let row = 0; row < numRows; row++) {
        if (row !== col) {
          const factor = matrix[row][col] / matrix[col][col];
          for (let i = col; i < numCols; i++) {
            matrix[row][i] -= matrix[col][i] * factor;
          }
        }
      }
    }
    
    for (let row = 0; row < numRows; row++) {
      const divisor = matrix[row][row];
      for (let col = 0; col < numCols; col++) {
        matrix[row][col] /= divisor;
      }
    }
    
    return matrix;
  }
  const matrix = [
    [2, 1, -1, 8],
    [-3, -1, 2, -11],
    [-2, 1, 2, -3]
  ];
  const matrix2 = [
    [1, -2, 7],
    [3, 4, 1],
  ];

  const matrix3 = [
    [2, 1, 8],
    [1, 3, 9],
  ];
  
  
const result = gaussJordan(matrix);
console.log(result);

console.log(gaussJordan(matrix2));
console.log();
console.log(gaussJordan(matrix3));