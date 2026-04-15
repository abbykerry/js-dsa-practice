#function that takes an integer as input, 
# and returns the number of bits that are equal to one in the binary representation of that number. 
def countBits(n):
    # Convert the number to binary and count the number of '1's
    return bin(n).count('1')

# Example usage:
number = 5423  # Binary representation is '1010101010101010101010101010101'
result = countBits(number)
print(result)  #expected output: 8

print(bin(5423))

#solution using bit manipulation
def countBits(n):
    count = 0
    while n:
        count += n & 1  # Increment count if the least significant bit is 1
        n >>= 1         # Right shift n by 1 to check the next bit
    return count

print(countBits(13))  