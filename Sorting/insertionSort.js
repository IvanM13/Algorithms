"use strict"

function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;   
    }
    return arr;
}

function StraightInserion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let x = arr[i]; let j = i;
        while ((j > 0) && (x < arr[j - 1])) {
            arr[j] = arr[j-1]; j--;
        }
        arr[j] = x;    
    }
    return arr;
}

function insertSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]){
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }            
        }        
    }    
    return arr;
}

function insertionSort2(arr) {
    let len = arr.length, value, i, j;
    for (i = 0; i < len; i++) {
        value = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > value; j--) {
            arr[j + 1] = arr[j];            
        }
        arr[j + 1] = value;
    }
    return arr;

}

const rand = function(arr){
    let n = 9;
    for(let i = 0; i < n; i++){
        arr[i] = Math.floor(Math.random() * 1000);
    }
    return arr;
}


// let mass = [3, 2, 8, 5, 9, 7, 4, 1, 6];

// let n = 9;

let mass2 = [];
rand(mass2);

console.log(mass2);

console.log(insertionSort2(mass2));

