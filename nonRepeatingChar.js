//Searching challenge. Function us SearchingChallenge(str), take str parametetr being passed, 
// which will contain only aplphabetic characters and spaces, and return the first non-repeating character.
// For example: if str is "agettkgaee", then the program should return K. 
//The string will always contain at least one character and there will always
//be at least one non-repeating character. Once the function is working,
//take final output string and combine with token, both in reverse order
//and seperated by a colon.

//pseudo
//use hash mapping to store count
//loop through to find character occurence/frequency and store count
//loop through again to find nonrepeating char with count 1
//reverse char, reverse token, join with colon separation


function name(str) {
    const token = "qmpz72ke3";
    const occurence = {}; //empty object
    for (let char of str) {
        occurence(char) = (occurence[char] || 0 + 1);
    }
    let nonRepeating = "";
    for (let char of str){
        if (occurence[char] === 1){
            nonRepeating = char;
            break;
        }
    }
    const tokenReverse = token.split("").reverse().join("");
    return nonRepeating = ":" + tokenReverse;
}
