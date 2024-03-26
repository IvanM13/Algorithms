const sequentialSearch = (arr, target) =>{    
    for(let i = 0; i < arr.length; i++){
        if(target === arr[i]){
            return i;
        }
    }  
    return -1;
    
}

const sequentialSearch2 = (arr, target) =>{ 
    let i = 0;   
    while(arr[i++]){
        if(target === arr[i]){
            return true;
        }
    }  
    return false;
    
}

function simpleSearch(arr, target){
    let i = 0;
    while(i < arr.length && target !== arr[i] ){
        i++;
    }
    // if (target === arr[i]) {
    //     return i;
    // } else {
    //     return "Not";
    // }
    if(target !== arr[i]){
        return "not";
    }
    return i;
}

let arr = [1,2,34,4,56,6,7,8,99];

console.log(sequentialSearch2(arr, 993));
console.log(simpleSearch(arr, 56));

// class Searh{
//     static arr;
//     static i = 0;
//     static target;
//     constructor(arr, target){
//         this.arr = arr;
//         this.target = target;
//     } 
//     getSimpleSearch(arr, target){
//         while(this.i < arr.length && target !== arr[this.i] ){
//             i++;
//         }
//         if (target === arr[this.i]) {
//             return this.i;
//         } else {
//             return "Not";
//         }
//     }
// }

// const mass = new Searh();
// const f = mass.getSimpleSearch(arr, 56);
// console.log(f);

const obj = {
    arr: [1,2,3,4],
    i: 0,
    target: 3,
    getSimpleSearch(arr, target){
        while(this.i < this.arr.length && this.target !== this.arr[this.i] ){
            this.i++;
        }
        if (this.target === this.arr[this.i]) {
            return this.i;
        } else {
             return "Not";
        }
    }
}

console.log(obj.getSimpleSearch());
obj.arr = [543, 94, 43, 876, 45, 78];
obj.target = 78;
console.log("hello " + obj.getSimpleSearch());



let mass = {
    arr: [123, 45, 74, 56, 456], 
    i: 0, 
    target: 456
};

mass.foo = obj.getSimpleSearch;
mass.foo();
console.log(mass.foo());
console.log(Object.getPrototypeOf(mass));

function foo(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i;
        }        
    }
    return 'not';
}

let array = [1,2,3,4,5,6,7,8,9];

console.log("find index = ", foo(array, 55));
