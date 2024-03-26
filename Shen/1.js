function foo(arr) {
    let n = arr.length - 1;
    let k = -1, s, t, tmp;
    while (k !== n) {
        s = k + 1;
        t = k + 1;
        while (t !== n) {
            t++;
            if (arr[t] < arr[s]) {
                s = t;
            }
        }
        tmp = arr[k + 1];
        arr[k + 1] = arr[s];
        arr[s] = tmp
        k++;
    }
    return arr;
}

let mass = [5,1,7,3,9,4,6,8,2];

console.log(foo(mass));