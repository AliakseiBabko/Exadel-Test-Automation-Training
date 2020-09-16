function Replacement (text, position, character) {
    let newText = text; //create a copy of the text to work with
    let currentPosition = 0; //a marker to indicate the current position in a word  
    const textLength = newText.length; //to prevent counting text length each time
    for (let i = 0; i <= textLength; i++) {
        if (newText.charAt(i) === ' ') {
            currentPosition = 0;  //reset counter when we reached a space
        } else if (currentPosition === position - 1) {
            newText = replaceChar (newText, i, character); //replace character in the given position 
            currentPosition++;
        } else {
            currentPosition++; //
        };        
    }
    console.log(newText);
}

function replaceChar (newText, i, character) {
    let firstPart = newText.substr(0, i);
    let lastPart = newText.substr(i + 1);
    return firstPart + character + lastPart;
}

Replacement ('Top aide to a Durham steps down amid Russia origins probe', 2, '0');
