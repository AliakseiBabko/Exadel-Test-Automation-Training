function Replacement (text, positionToReplace, insert) {
    const regex = /[ `!@#$%^&*()_+\-=\[\]{};'’:"\\|,.<>\/?~]/; //list of special characters
    let newText = text; //create a copy of the text to work with
    let positionInWord = 0; //a counter for the current position in a word
    let positionInText = 0; //a counter for the current position in the text
    for (let i of text) { //loop through the original text
        if (i === ' ') { //chech if there is a space in current position (word separator)
            positionInWord = 0;  //reset position in the word
            positionInText++;
        } else if (positionInWord === positionToReplace - 1 && !i.match(regex)) { //check if we reach positionToReplace and it's not a special character
            newText = replaceChar (newText, positionInText, insert); //if yes, replace character in the given position 
            positionInWord += insert.length;
            positionInText += insert.length;
        } else if (i.match(regex)) { //check if current character is a special one
            positionInText++; //if yes, we don't count it within the current word
        } else {
            positionInWord++; //if it's not a special character and not a positionToReplace, we just proceed
            positionInText++; 
        };
    }
    console.log(newText);
}

function replaceChar (newText, positionInText, insert) {
    let firstPart = newText.substr(0, positionInText);
    let lastPart = newText.substr(positionInText + 1);
    return firstPart + insert + lastPart;
}

Replacement ("It’s a disaster, he told Carlson. We've already seen the near obstruction of journalism.", 3, '000');
