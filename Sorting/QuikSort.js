function sort(arr, l, r) {
    let i, j, w, x;
    i = l;
    j = r;
    x = arr[Math.trunc((l + r) / 2)];
    do {
        while (arr[i] < x) {
            i++;
        }
        while (x < arr[j]) {
            j--;
        }
        if (i <= j) {
            w = arr[i];
            arr[i] = arr[j];
            arr[j] = w;
            i++;
            j--;
        }
    } while (!(i > j));
    if (l < j) {
        sort(arr, l, j);
    }
    if (i < r) {
        sort(arr,  i, r);
    }
}

function quickSort(arr) {
    sort(arr, 0, arr.length - 1);
    return arr;
}

const mass = [4,1,6,7,9,3,2,8,5];

console.log(quickSort(mass));