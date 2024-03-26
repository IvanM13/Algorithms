function foo(a, b, c, f, n){
    for (let x = f; x < n; x++) {
        for (let y = f; y < n; y++) {
            if (a * x + b * y === c) {
                console.log("x = ", x, "y = ", y);
            }
            
        }
        
    }
}

foo(3, 2, 7, -10, 20);

function foo2(a, b, n) {
    let y;
    for (let x = 0; x < n; x++) {
        console.log(y = a * x + b);    
    }
}

foo2(-2, 1, 10);

