function wq(q, r, s){
    return q && r && s;
};

const we = (l, m, n) => l || m || n;

console.log(wq(true, true, true));

console.log(wq(true, false, true));

console.log(we(true, false, false));

console.log(we(false, false, false));

console.log(we(false, true, false));