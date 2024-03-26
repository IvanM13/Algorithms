let arr1 = [1,2,3,4,5];
let arr2 = arr1;

function foo(x, y) {
    let n = x.lentgh - 1;
    let i = 0;

    while (i !== n) {
        i++;
        y[i] = x[i];
    }
    console.log(y);
}

foo(arr1, arr2);
