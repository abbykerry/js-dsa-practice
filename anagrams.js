// 📄 Problem (LeetCode style)

// Title: Group Anagrams

// Description:
// Given an array of strings strs, group the anagrams together.

// You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//example2

Input:
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

Output:
[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]
// 📌 Solution

//solution1 - using sorting

function groupAnagrams(strs) {
    let map = {};

    for (let word of strs) {
        let sorted = word.split("").sort().join("");

        if (!map[sorted]) {
            map[sorted] = [];
        }

        map[sorted].push(word);
    }

    return Object.values(map);
}

//solution2 - using character count

function groupAnagrams(strs) {
    let map = {};

    for (let word of strs) {
        let count = new Array(26).fill(0);

        for (let char of word) {
            count[char.charCodeAt(0) - 97]++;
        }

        let key = count.join(",");

        if (!map[key]) {
            map[key] = [];
        }

        map[key].push(word);
    }

    return Object.values(map);
}
