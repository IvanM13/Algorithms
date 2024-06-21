function reverseMessage(words) {
    words = words.split('').reverse().join('');
    return words.split(' ').reverse().join(' ');
}

let message = 'сегодня была прекрасная погода';

console.log(message);
console.log(reverseMessage(message));