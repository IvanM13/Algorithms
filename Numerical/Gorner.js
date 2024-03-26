function gorner(a, x) {
    let y = a[0];
    for (let index = 1; index < a.length; index++) {
        y = a[index] + x * y; 
        
    }
    return y;
    
}

function evalate(a, x) {
    let result = a[0] + a[1] * x;
    let xPower = x;
    for (let index = 2; index < a.length; index++) {
        xPower = xPower * x;
        result = result + a[index] * xPower;
        
    }
    return result;
}

function horner(a, x) {
    let result = 0;
    for (let index = a.length-1; index > 0; index--) {
        result = result * x;
        result = result + a[index];
        
    }
    return result;
}


const arr = [1, 2, 3, 4];

console.log(gorner(arr, 1));

console.log(evalate(arr, 1));

console.log(horner(arr, 1));

function evaluatePolynomial(x, coefficients) {
  if (coefficients.length === 0) {
    return 0;
  }

  let term = coefficients[0];

  for (let i = 1; i < coefficients.length; i++) {
    term = term * x + coefficients[i];
  }

  return term;
}

// Пример использования
const poly = [1, -5, 4, -10];
console.log(evaluatePolynomial(3, poly)); // 6