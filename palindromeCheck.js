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