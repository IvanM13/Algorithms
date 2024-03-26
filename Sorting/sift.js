function sift(arr, left, right) {
    let i = left;
    let j = 2 * i + 1;
    let x = arr[i];
    if (j < right && arr[j] < arr[j + 1]) {
        j++;
    }
    while (j <= right && x < arr[j]) {
        arr[i] = arr[j];
        i = j;
        j = 2 * j + 1;
        if (j < right && arr[j] < arr[j + 1]) {
            j++;
        }
    }
    arr[i] = x;
}

function heapSort(arr) {
    let n = arr.length;
    let x;
    let l = Math.floor(n / 2);
    let r = n - 1;

    while (l > 0) {
        l--;
        sift(arr, l, r);
    }
    while (r > 0) {
        x = arr[0];
        arr[0] = arr[r];
        arr[r] = x;
        r--;
        sift(arr, l, r);
    }

    return arr;
}

let rand = function (arr) {
    let n = 9;
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 1000);
    }
    return arr;
}

mass = [];

console.log(rand(mass));
console.log(heapSort(mass));
