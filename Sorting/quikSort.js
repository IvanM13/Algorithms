function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];


}

mass = [4,1,6,7,9,3,2,8,5];

console.log(quickSort(mass));