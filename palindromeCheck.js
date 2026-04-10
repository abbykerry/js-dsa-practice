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

console.log(isPalindromeTwoPointer("Abby"));//false
console.log(isPalindromeTwoPointer("rotator"));//true

//solution 3
function isPalindromeRecursive(str){
    //normalize the string
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    //base case: if the string is empty or has only one character, it's a palindrome
    if (normalizedStr.length <= 1) {
        return true;
    }
    
    //recursive case: check if the first and last characters are the same, and then check the substring that excludes those characters
    if (normalizedStr[0] === normalizedStr[normalizedStr.length - 1]) {
        return isPalindromeRecursive(normalizedStr.slice(1, -1)); //slice(1, -1) creates a new string that excludes the first and last characters
    }
    return false;

}
console.log(isPalindromeRecursive("civic"));   // true
console.log(isPalindromeRecursive("eye"));   // true
console.log(isPalindromeRecursive("Dance")); // false
console.log(isPalindromeRecursive("A"));     // true
console.log(isPalindromeRecursive(""));      // true
console.log(isPalindromeRecursive("Level")); // true
