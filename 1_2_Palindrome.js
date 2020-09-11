function Palindrome (word) {
    const length = word.length;
    for (let i = 0; i <= length/2; i++) {
        if (word.charAt(i) != word.charAt(length-i-1)) {return console.log('The word is not a palindrome')};
    }
    return console.log('The word is a palindrome');
}

Palindrome ('Step on no pets');