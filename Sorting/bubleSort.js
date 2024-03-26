function bubbleSort(array) {
    const n = array.length;
    for (let i = 1; i < n; i++) {
        for (let j = n - 1; j > 0; j--) {
            if (array[j - 1] > array[j]) {
                let x = array[j - 1]; 
                array[j - 1] = array[j]; 
                array[j] = x;
            }
        }
        
    }
    return array;
}

function bubbleSort2(array) {
    let finish, tmp;
    do{
        finish = true;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                finish = false;
            }            
        }
    }while(!finish);

    return array;
}

let rand = function(arr){
    let n = 9;
    for(let i = 0; i < n; i++){
        arr[i] = Math.floor(Math.random() * 1000);
    }
    return arr;
}

let mass = [];

console.log(rand(mass));
console.log(bubbleSort2(mass));

