//Given an array of integers nums and an integer target, return the indices 
// of the two numbers such that they add up to target.

// Input:
// target = 9

// Output:
// [0, 1]
//Brute force
function twoSum(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                 return [i,j];
            }
            return 0;
        }
    }
    
}
// nums = [2, 7, 11, 15]
console.log("The indices of the two numbers are: ", twoSum([2, 7, 11, 15], 9));
// time complexity for solution 1 is O(n^2)


//solution 2 
function twoNumbers(nums, target){
    let myStorage = {}; //object to store numbers and their indices eg 1:2
    for(let i = 0; i < nums.length; i++){
        let otherNo = target - nums[i];
        if(myStorage[otherNo] !== undefined){
            return [myStorage[otherNo], i];
        }
        myStorage[nums[i]] = i; //storing the no and its index
        console.log(myStorage);
    }
}

console.log("The indices of the two numbers are:", twoNumbers([3,5,7,6,4,2], 10));

//time complexity
//myStorage = {} is instant lookup (O(1)) and
//storing is instant (O(1))
//total time = (work per step) * (number of steps). but loop runs n times
//so n * O(1) = O(n)