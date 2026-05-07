#Given an array of strings, group anagrams together.
#Example:
#Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
#Output:
#[
#  ["ate","eat","tea"],
#  ["nat","tan"],
#  ["bat"]
#]  

#solution 1: using sorted string as key in hashmap
def group_anagrams(strs):
    hashmap = {}

    for word in strs:
        sorted_word = "".join(sorted(word))

        if sorted_word not in hashmap:
            hashmap[sorted_word] = []

        hashmap[sorted_word].append(word)

    return list(hashmap.values())