function shakerSort(arr) {
    let left = 1; 
    let rigth = arr.length - 1;
    let k = rigth;
    let x;
    do{
        for (let j = rigth; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                x = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = x;
                k = j;
            }
        }
        left = k + 1;
        for (let j = left; j <= rigth; j++){
            if (arr[j - 1] > arr[j]) {
                x = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = x;
                k = j;
            }
        }
        rigth = k - 1;

    }while(!(left > rigth))
    return arr;
}

mass = [12,9,8,7,6,5,4,3,2,1,10,11];
console.log(mass);
console.log(shakerSort(mass));