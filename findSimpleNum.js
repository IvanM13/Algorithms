function findSimpleNumber(max) {
    let count = 0;
    let result = [];
    for (let i = 2; i <= max; i++) {
        let simple = true;
        for (let j = 2; j < i; j++) {
            count++;
            if(i % j === 0){
                simple = false;
                break;
            }
        }
        if (simple) {
            result.push(i);
        } 
    }
    console.log("count =", count );
    return result;       
}

console.log(findSimpleNumber(10));