function countingSort(arr, min, max) {
    if (min === undefined) {
    min = 0;
    }
    
    if (max === undefined) {
        max = arr.length;
    }
    
    var count = new Uint32Array(max - min);
    for (var i = 0 ; i < arr.length ; i++) {
        count[arr[i] - min]++;
    }
    
    var result = [];
    for (var i = 1 ; i < count.length ; i++) {
        count[i] += count[i - 1];
    }
    
    for (var i = arr.length - 1 ; i >= 0 ; i--) {
        result[--count[arr[i] - min]] = arr[i];
    }
    
    return result;
    }

const arr = [300, 2, 80, 500, 9, 7, 4, 1, 60]; 
console.log(countingSort(arr, 500, 1));  