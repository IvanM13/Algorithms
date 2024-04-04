function swap(arr, a, b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

function permute(arr, start, end) {
    if(start === end){
        console.log(arr);
       return;
    }
    for (let i = start; i <= end; i++){
        // let tmp  = arr[start];
        // arr[start] = arr[i];
        // arr[i] = tmp;
        swap(arr, start, i);
        permute(arr, start + 1, end);
        // tmp  = arr[start];
        // arr[start] = arr[i];
        // arr[i] = tmp;
        swap(arr, start, i);
        // swap(arr[i], arr[start])

    }
}
let arr = [1,2,3,4];
permute(arr, 0, arr.length - 1);
console.log();
// let arr1 = [1,2,3];
// let arr2 = [1,2,4];
// let arr3 = [1,3,4];
// let arr4 = [2,3,4];
// let 
// permute(arr1, 0, arr1.length - 1);
// console.log();
// permute(arr2, 0, arr2.length - 1);
// console.log();

// permute(arr3, 0, arr1.length - 1);
// console.log();

// permute(arr4, 0, arr1.length - 1);
// console.log();


// function swap(arr, a, b) {
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }

// function permutation(arr, k) {
//     if (k === 1) {
//         console.log(arr);
//         return;
//     }
//     for (let i = 0; i < k; i++) {
//         permutation(arr, k - 1 );
//         if (k % 2 == 0) {
//             let tmp = arr[i];
//             arr[i] = arr[k - 1];
//             arr[k - 1] = tmp;
//         } else {
//             let tmp = arr[0];
//             arr[0] = arr[k - 1];
//             arr[k - 1] = tmp; 
//         }
        
//     }
// }

// let arr = ['A', 'B', 'C'];

// let  k = arr.length;
// permutation(arr, k);