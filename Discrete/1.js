let arr = [1,2,3,4,5,6];


function foo(arr) {
    let r = [];
    let x, y;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % arr[i] === 0) {
                x = arr[i];
                y = arr[j];
                r.push([x, y]);
            }            
        }    
    }

    return r;
    
}

console.log(foo(arr));