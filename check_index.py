numbers = [2, 3, 5, 6, 8, 9]
target = 11
#checking the sum of two numbers in the list that equals the target

def check_index(numbers, target):
    #loop through the list of numbers
    for i in range(len(numbers)):
        #now we loop through the list again to check for the sum of two numbers
        for j in range (i + 1, len(numbers)):
            #if the sum of the two numbers equals the target, we return their indices
            if numbers[i] + numbers[j] == target:
                return [i, j]
    #if no such pair is found, we return an empty list
    return []

result = (check_index(numbers, target))
print(result)