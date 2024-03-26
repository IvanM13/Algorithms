let inc = n => n++;

let sq = n => n * n;

function sum(a, b){
    if(a > b){
        return 0;
    }
    return sq(a) + sum(++a, b);
}

console.log(sum(0, 10));

function sumIter(x, y) {
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i**2;
        console.log(sum);
    }
    // return sum;
}

sumIter(0, 10);
