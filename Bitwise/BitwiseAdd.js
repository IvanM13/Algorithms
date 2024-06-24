function BitwiseAdd(a, b) {
    while( b !== 0){
        let carry = (a & b);
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}

console.log(BitwiseAdd(4, 6));