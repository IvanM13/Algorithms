function reverse(arr, j) {
    let i = 0;
    while (i < j) {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
        i++;
        j--;
    }
    return arr;
}

// function antilex(arr, m) {
// if (m === 1) {
// console.log(arr);
// return;
// } else {
// for (let i = 1; i < m; i++) {
// antilex(arr, m - 1);
//             if (i < m) {
//                 let t = arr[i];
//                 arr[i] = arr[m];
//                 arr[m] = t;
//                 reverse(arr, m - 1);
//             }
            
//         }
//     }
// }

let mass = [1,2,3, 4, 5, 6, 7, 8];
let m = mass.length;


function foo(arr) {
    let min, max, tmp;
    min = 0;
    max = arr.length - 1;
    while (min <= max) {
        tmp = arr[min];
        arr[min] = arr[max];
        arr[max] = tmp;
        min++;
        max--;
    }
    return arr;
}

console.log(mass)
console.log(foo(mass));