// question: Product of Array Except Self

// Description:
// Given an integer array nums, return an array answer such that:

// answer[i] = product of all elements of nums except nums[i]
//constraints: You cannot use division
// You must solve it in O(n) time

//solution 1 using two passes

function productExceptSelf(nums) {
    let result = new Array(nums.length).fill(1);

    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }

    return result;
}

//solution 2 using extra arrays

function productExceptSelf(nums) {
    let n = nums.length;
    let left = new Array(n);
    let right = new Array(n);
    let result = new Array(n);

    left[0] = 1;
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    right[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        result[i] = left[i] * right[i];
    }

    return result;
}