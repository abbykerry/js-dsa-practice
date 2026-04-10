//palindrome is a word that read the same forward and backward.
function isPalindrome(str) {
    // first we normalize the string by converting it to lowercase and removing non-alphanumeric characters
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // then we reverse the normalized string
    const reversedStr = normalizedStr.split("").reverse().join("");
    // finally, we compare the normalized string with the reversed string
    return normalizedStr === reversedStr;
}

console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("Racecar")); // true

//solution using two pointer
function isPalindromeTwoPointer(str){
    let left = 0; //start of string
    let right = str.length -1; //last index of string

    //then we loop through the string and check if the characters at the left and right pointers are the same, ignoring case and non-alphanumeric characters
    while(left<right){
        if (str[left].toLowerCase() !== str[right].toLowerCase()
        ){
            return false;
        }
        left++; //move from left to right
        right--;//move from right to left
    }
    return true;
}

console.log(isPaldindromeTwoPointer("Abby"));//false
console.log(isPaldindromeTwoPointer())