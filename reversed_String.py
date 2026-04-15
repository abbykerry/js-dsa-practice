#function that takes in a string of one or more words, and returns the same string,
#  but with all words that have five or more letters reversed

def spin_words(sentence):
    # Split the sentence into words
    words = sentence.split()
    
    # Reverse words that have five or more letters
    for i in range(len(words)):
        if len(words[i]) >= 5:
            words[i] = words[i][::-1]  # Reverse the word using slicing
    
    # Join the words back into a sentence
    return ' '.join(words)

# Example usage:
input_sentence = "Hey fellow warriors"
result = spin_words(input_sentence)
print(result)  # Output: "Hey wollef sroirraw"

#solution using list comprehension
def spin_words(sentence):
    return ' '.join([word[::-1] if len(word) >= 5 else word for word in sentence.split()])

#A different example usage:
input_sentence = "This is a test"
result = spin_words(input_sentence)
print(result)  # Output: "This is a test" (no words have five or more letters, so the sentence remains unchanged)

