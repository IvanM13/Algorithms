function expt(b, n){
    if(n === 0){
        return 1;
    }
    return b * expt(b, (n - 1));
}

const expt2 = (b, n) => iter_expt(b, n, 1);

function iter_expt(b, count, product) {
    if(count === 0){
        return product;
    }
    return iter_expt(b, (count - 1), (b * product));
}

console.log(expt(5, 3));

console.log(expt2(8, 3));
