"use strict";
// const average = (x, y) => (x + y) / 2;
// const abs = (x) => (x < 0) ? -x : x;
// const improve = (guess, x) => average(guess, (x / guess));
// const good = (guess, x) => abs(square(guess) - x) < 0.001;
// const sqrtIter = (guess, x) => (good(guess, x)) ? guess : sqrtIter(improve(guess, x), x);

const sq = require('./square');

const sqrt = function(x) {
    const average = (x, y) => (x + y) / 2;
    // const abs = (x) => (x < 0) ? -x : x;
    const improve = (guess, x) => average(guess, (x / guess));
    const good = (guess, x) => Math.abs(sq.square(guess) - x) < 0.0001;
    const sqrtIter = (guess, x) => (good(guess, x)) ? guess : sqrtIter(improve(guess, x), x);

    return sqrtIter(1.0, x);
}
console.log(Math.floor(sqrt(100 + 37)));
console.log(sqrt(9));
console.log(sqrt(2));

console.log(sq.square(2 + 5));

console.log(sq.square(sq.square(3)));

function sumOfSquares(x, y) {
    return sq.square(x) + sq.square(y);
};

console.log(sumOfSquares(3, 4));

const f = a => sumOfSquares(a + 1, a * 2);

console.log(f(5));

// function merge2Arrays(arrays){
//     let count = arrays.length;
//     let merged = new Array(count);
//     let c = 0;
//     for(let i = 0; i < count; ++i){
//         for(let j = 0; j < arrays[i].length; ++j){

//         merged[c++] = arrays[i][j];
//  }
    
//     }
//       return merged;
// }

// let arr = [1,2,3,4];
// let arr2 = [5,6,7,8];

// console.log(merge2Arrays(arr));

    