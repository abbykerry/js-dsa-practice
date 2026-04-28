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
console.log(twoSum([2, 7, 11, 15], 9));