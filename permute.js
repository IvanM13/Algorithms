function perm(arr){
    let n = arr.length -1;
    let k = n;

    while (arr[k] > arr[k + 1]) {
        k--;
    }

    let t = k + 1;

    while ((arr[t] < arr[n]) && (arr[t + 1] > arr[k])) {
        t++;
    }

    // swap(arr[k], arr[t]);
    let tmp = arr[k];
    arr[k] = arr[t];
    arr[t] = tmp;

    let left = k + 1;
    let right = n;

    while (left < right) {
        // swap(left, right);
        let tmp = left;
        left = right;
        right = tmp;
        left = left + 1;
        right = right - 1;
        
    }
    return arr;
}

// function swap(a, b) {
//     let temp = a;
//     a = b;
//     b = temp;
// }


mass = [1,2,3,4];

console.log(perm(mass));