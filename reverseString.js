function reverseString(str) {
    // you can use built-in methods to reverse the string
    const word = str.split("").reverse().join(""); // split the string into an array of characters, reverse the array, and join it back into a string
    return word;
}

// test it
console.log(reverseString("hello")); // expected: "olleh"

// you can also reverse the string without using built-in methods
function reversedString(str){
    let reversed = "";
    for (let i = str.length - 1; i>= 0; i--){
        reversed += str[i]; //take each character from the end of the string and add it to the reversed string
}
    return reversed;
}

//testing it
console.log(reversedString("world")); // expected: "dlrow"