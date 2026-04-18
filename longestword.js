function longestWord(sen) {
    const longestWord = (sen) => sen.replace(/[^a-zA-Z0-9 ]/g, "").split(" ").reduce((a, b) => a.length >= b.length ? a : b);
    return longestWord(sen);
}
console.log(longestWord("fun?!! time"));