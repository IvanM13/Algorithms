function insertionSort(step, arr){
    for (let i = step; i < arr.length; i++) {
        let tmp = arr[i]; let j = i - step;
        while ((j >= 0) && (tmp < arr[j])) {
            arr[j + step] = arr[j];
            j = j - step;
        }
        arr[j + step] = tmp; 
    }
    return arr;
}

function sortShell(arr) {
    let step = Math.floor(arr.length / 2);
    while(step >= 1)
    {
        insertionSort(step, lst);
        step = Math.floor(3 * step / 5);
    }
    return arr;
}

function ShellSort(arr) {
    let t = [9, 5, 3, 1];
    // t[0] = 9; t[1] = 5; t[2] = 3; t[3] = 1;
    for (let m = 0; m < t.length; m++) {
        let k = t[m];
        for (let i = k; i < arr.length; i++) {
            let x = arr[i]; 
            j = i - k;
            while ((j >= k) && (x < arr[j])) {
                arr[j + k] = arr[j];
                j = j - k;
            }
            if ((j >= k) || (x >= arr[j])) {
                arr[j + k] = x; 
            } else {
                arr[j + k] = arr[j];
                arr[j] = x; 
            }
                       
        }
        
    }
    return arr;      
}


let rand = function(arr){
    let n = Math.trunc(Math.random() * 20);
    for(let i = 0; i < n; i++){
        arr[i] = Math.floor(Math.random() * 1000);
    }
    return arr;
}

let mass = [];

console.log(ShellSort(rand(mass)));



const lst = [123,5,6766,34,546,345, 2, 8, 1, 89, 4, 43, 67, 3];

console.log(ShellSort(lst));


// console.log(insertionSort(1,lst));