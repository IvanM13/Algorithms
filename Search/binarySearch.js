function binarySearch(key, numbers){

    let low = 0;
    let high = numbers.length - 1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        if(key < numbers[mid]){
            high = mid - 1;
        }    
        else if(key > numbers[mid]){
            low = mid + 1;
        }
        else{
            return mid;
        }    
    }
    return false;
}

function compare(x, y){
    if(x>y){
        return 1;
    }else if(x<y){
        return -1;
    }
    return 0;
}

function binarySearch2(key, numbers){

    let low = 0;
    let high = numbers.length - 1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        switch(compare(numbers[mid], key)){
            
            case -1: 
                low = mid + 1;
                break;
            case 0: 
                return mid;
            case 1:
                high = mid - 1;
                break;        
    }   
}
return false;
}

function binarySearch3(key, arr) {
    let l = 1; r = arr.length + 1, m = 0;
    while (r - l !== 1) {
        m = Math.floor(l + (r - l) / 2);
        if (arr[m] <= key) {
            l = m;
        } else {
            r = m;
        }
    }
    return m;

}

function binarySearch4(arr, key, low, high) {
    let middle;
    if(low > high){
        return (-1);
    }

    middle = Math.floor(low + high) / 2;

    if(arr[middle] === key){
        return middle;
    }

    if (arr[middle] > key) {
        return binarySearch(arr, key, low, middle - 1);
    } else {
        return binarySearch(arr, key, middle + 1, high);
    }
}


function binarySearch5(key, arr) {
    let a = 0, b = arr.length - 1;

    do {
        let c = Math.floor((a + b) / 2);
        if (arr[c] > key) {
            b = c - 1;
        }else if(arr[c] < key){
            a = c + 1;
        }else{
            return c;
        }
    } while (a <= b);

    return false;
}

let arr = [1,3,5,7,9,11,13,56];

// console.log(binarySearch2(56, arr));

var readline = require('readline')

var rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

rl.question("Enter number: ", function(n){

    console.log("Index of digit = " + binarySearch5(n, arr));
    rl.close()
})

