function solve(source, target, interm, n){
    if(n === 0){
        return;
    }
    solve(source, interm, target, n - 1);
    console.log("%d: %d -> %d", n, source, target);
    solve(interm, target, source, n - 1);
}

let n = 4;

solve(1, 3, 2, n);
