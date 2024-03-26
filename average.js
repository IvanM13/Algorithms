// const sum = (total, current) => total + current;
// const total = arr => arr.reduce(sum);
// const size = arr => arr.length;
// const divide = (a, b) => a / b;
// const average = arr => divide(total(arr), size(arr));

const sum = (total, current) => total + current;
const total = arr => arr.reduce(sum);
const average = function(arr){
    const size = arr => arr.length;
    const divide = (a, b) => a / b;
    return divide(total(arr), size(arr));
}
const input = [1,2,3,4,5,678,7,8,9];
console.log(average(input));
console.log(sum(34, 67));
console.log(total(input));

// console.log(compare);

