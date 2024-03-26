
function diamond(sign, rows) {
    for (let i = 1; i <= rows; i++) {
        console.log(' '.repeat(rows - i) + sign.repeat(2 * i - 1));
    }
        for (let i = rows - 1; i >= 1; i--) {
            console.log(' '.repeat(rows - i) + sign.repeat(2 * i - 1));
        }
    }
    
    
diamond('*', 20);


