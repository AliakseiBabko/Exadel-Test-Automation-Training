function Palindrome (word) {
    const length = word.length;
    const testWord = word.toUpperCase()
    for (let i = 0; i <= length/2; i++) {
        if (testWord.charAt(i) != testWord.charAt(length-i-1)) {return console.log('Not a palindrome')};
    }
    return console.log('It is a palindrome!');
}

Palindrome ('Step on no pets');