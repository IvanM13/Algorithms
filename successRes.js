// Задача поиска шанса выпадения определенной суммы на игральных костях

function findSum(sum) {
    let count = 0;
    let successRes = 0;
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 6; j++) {
            for (let k = 1; k <= 6; k++) {
                if (i + j + k === sum) {
                    successRes++;
                }                
                count++;
            }            
        }        
    }
    return successRes / count;
}

console.log(findSum(10));