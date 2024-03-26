function binaryInsertion(arr) {
    let n = arr.length;
    for (let i = 1; i <= n - 1; i++) {
        let x = arr[i];
        let left = 0;
        let rigth = i;
        while (left < rigth) {
            let m = Math.trunc((left + rigth) / 2);
            if (arr[m] <= x) {
                left = m + 1;
            } else {
                rigth = m;
            }
        }
        for (let j = i; j >= rigth + 1; j--) {
            arr[j] = arr[j - 1]; 
            
        }
        arr[rigth] = x;
    }
    return arr;
}

const rand = function(arr){
    let n = Math.floor(Math.random() * 15);
    for(let i = 0; i < n; i++){
        arr[i] = Math.floor(Math.random() * 1000);
    }
    return arr;
}

mass = [];

console.log(rand(mass).map((i) => i * i));
console.log(binaryInsertion(mass));

