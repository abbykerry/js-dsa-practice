//Given a string s, find the length of the longest substring without repeating characters.
// Input: "abcabcbb"
// Output: 3
// Explanation: "abc" is the longest substring without repeating characters.

//solution1 Slide Window

function lengthOfLongestSubstring(s) {
    // Set to store unique characters in current window
    const set = new Set();

    let left = 0;   // left pointer of window
    let maxLength = 0;

    // Expand the window with right pointer
    for (let right = 0; right < s.length; right++) {
        // If duplicate found, shrink window from left
        while (set.has(s[right])) {
            set.delete(s[left]); // remove leftmost char
            left++;              // move left pointer
        }

        // Add current character to set
        set.add(s[right]);

        // Update max length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

/*
Algorithm: Sliding Window + Hash Set
Time Complexity: O(n)  // each character visited at most twice
Space Complexity: O(min(n, k))  // k = charset size
*/

//Solution2 HASH MAP
function lengthOfLongestSubstringMap(s) {
    // Map to store last seen index of each character
    const map = new Map();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // If character seen before, jump left pointer
        if (map.has(s[right])) {
            // Ensure left only moves forward
            left = Math.max(left, map.get(s[right]) + 1);
        }

        // Update last seen index
        map.set(s[right], right);

        // Update max length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

/*
Algorithm: Sliding Window + Hash Map (Index Tracking)
Time Complexity: O(n)
Space Complexity: O(min(n, k))
*/