const inc = x => x + 1;
const dec = x => x - 1;

function add(a, b){
    if(a === 0){
        return b;
    }
    return add(dec(a), inc(b));
}

console.log(add(55, 45));