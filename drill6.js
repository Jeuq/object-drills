/* eslint-disable strict */
// definitions //
let cipher = [
    {letter: 'a', codePosition: 2},
    {letter: 'b', codePosition: 3},
    {letter: 'c', codePosition: 4},
    {letter: 'd', codePosition: 5},
];

let arrayOfWords = ['brain', 'driver', 'kumquat', 'aardvark', 'Christmas']


const decode = (cipher, word) => {
    word.to;
    let position = 0;
    for (let i = 0; i < cipher.length; i++) {
        if (cipher[i].letter == word[0]) { 
            position = (cipher[i].codePosition)-1;
        }
    }
    if (position !== 0) {
        return (word[position]);
    } else {
        return (' ');
    }
}


const decodeWords = (arrayOfWords) => {
    let codeString = '';
    for (let j=0; j<arrayOfWords.length; j++) {
        let decoder = decode(cipher, arrayOfWords[j].toLowerCase());
        console.log(decoder);
        codeString = codeString + decoder;
    }
    console.log(codeString);
}


decodeWords(arrayOfWords)