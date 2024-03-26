function itsPalindrome(numberAsString) {
    let arr = numberAsString.split('');
    // console.log(arr.length);
    // let palindome = true;
    for (let index = 0; index < arr.length; index++) {
        // const element = arr[index];
        if (arr[index] !== arr[arr.length - 1 - index]) {
            return false;
        }
    }
    return true;
};


console.log(itsPalindrome("1001"));
console.log(itsPalindrome("123321"));
console.log(itsPalindrome("123"));
console.log(itsPalindrome("9889"));
console.log(itsPalindrome("12344321"));
console.log(itsPalindrome("asddsa"))