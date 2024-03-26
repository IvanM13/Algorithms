function factorial(n){
    function iter(product, count){
        if(count > n){
            return product;
        }
        return iter((count * product), (count + 1));
    }
    return iter(1, 1);
}

const fact = x =>{
    if(x === 0){
        return 1;
    }
    return x * fact(x - 1);
}

function iter(product, count, max) {
    if(count > max){
        return product;
    }
    return iter((count * product), (count + 1), max);
}

const factor = (n) => iter(1, 1, n);

console.log(factorial(6));

console.log(fact(7));

console.log(factor(6));