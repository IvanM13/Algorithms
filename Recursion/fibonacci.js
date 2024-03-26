const fibonacci = (k) => {
    // if(k === 0){
    //     return 0;
    // }
    // else if(k === 1){
    //     return 1;
    // }else{
    //     return fibonacci(k - 1) + fibonacci(k - 2);
    // }
    if(k > 1){
        return fibonacci(k - 1) + fibonacci(k - 2);
    }
    return 1;
}
const fib = n => fib_iter(1, 0, n);

function fib_iter(a, b, count){
    if(count === 0){
        return b;
    }
    return fib_iter((a + b), a, (count - 1));
}

let arr = [];

const f = x =>{
    for(let i = 0; i < x; i++){
        arr[i] = fib(i);
    }
}

f(16);
console.log(arr);


function con(arr, n) {
    if(n < arr.length){
        console.log(arr[n]);
        return con(arr, n + 1); 
    }
}

con(arr, 0);

let array = [];

for (let index = 0; index < 16; index++) {
    array[index] = fibonacci(index);
}

console.log(array);

function fib2(n) {
    if(n < 2){
        return n;
    }
    return fib2(n - 1) + fib2(n - 2);
}


let array2 = [];

for (let index = 0; index < 16; index++) {
    array2[index] = fib2(index);
}

console.log(array2);