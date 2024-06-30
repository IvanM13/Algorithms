const fs = require('fs');
let cache = {};

function fiboTest(n) {
if (n <= 1) return n;
    if (cache[n]) return cache[n];
    return (cache[n] = fiboTest(n - 1) + fiboTest(n - 2));
}

for (let index = 0; index <= 10; index++) {
    console.log(fiboTest(index))
}
fs.writeFile('cache.json', JSON.stringify(cache), function(error){
    if (error) {
        return console.log(error);
    }
    console.log('win!');
})


console.log(cache);