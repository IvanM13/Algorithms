function foo(a, b, h, c, d, k, f, n) {
    for (let x = f; x < n; x++) {
        for (let y = f; y < n; y++) {
            if (a * x + b * y === h && c * x + d * y === k) {
                console.log("x = ", x, "y = ", y);
            }
        }
    }
}

foo(3, 4, -1, 2, -5, 7, -20, 20);

foo(4, -5, -22, 3, 2, 18, -20, 20);

foo(8, -3, 46, 5, 6, 13, -20, 20);

foo(3, 4, 1, 1, -2, 7, -20, 20);

function bin(n) {
    let a;
    let b = [];
    while (n !== 0) {
        a = n % 2;
        b.unshift(a);
        n = Math.floor(n / 2);
    }

    return parseInt(b.join(""));
}

console.log(bin(37));
console.log(bin(45));

function hex(n) {
    let a;
    let b = [];
    while (n !== 0) {
        a = n % 16;
        n = Math.floor(n / 16);

        if (a === 10) {
            a = "A";
            b.unshift(a);

        } else if (a === 11) {
            a = "B";
            b.unshift(a);

        } else if (a === 12) {
            a = "C";
            b.unshift(a);

        } else if (a === 13) {
            a = "D";
            b.unshift(a);

        } else if (a === 14) {
            a = "E";
            b.unshift(a);

        } else if (a === 15) {
            a = "F";
            b.unshift(a);
        } else {
            b.unshift(a);
        }
    }

    return b.join("");
}

console.log(hex(37));
console.log(hex(45));
console.log(hex(422));
console.log(hex(4660));
console.log(hex(15268));

console.log(bin(37));
console.log(bin(45));
console.log(bin(422));
console.log(bin(4660));
console.log(bin(15268));

const num = '3BA4';
const str = num.toString();
const arr = str.split('').map(char => parseInt(char));
console.log(arr);

const num2 = '3BA4';
const str2 = num2.toString();
const arr2 = str2.split('');
console.log(arr2);

function hexRev(a) {
    let sum = 0;
    const num = a;
    const str = num.toString();
    const arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'A') {
            arr[i] = '10';
        }
        if (arr[i] === 'B') {
            arr[i] = '11';
        }
        if (arr[i] === 'C') {
            arr[i] = '12';
        }
        if (arr[i] === 'D') {
            arr[i] = '13';
        }
        if (arr[i] === 'E') {
            arr[i] = '14';
        }
        if (arr[i] === 'F') {
            arr[i] = '15';
        }
    }
    arr.map(c => parseInt(c));

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[arr.length - 1 - i] * 16 ** i;
    }

    return sum;
}

console.log(hexRev('3BA4'));
console.log(hexRev(1234));
console.log(hexRev('1A6'));