// source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/



// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].




var twoSum = function(nums, target) {
    let dict = {};
    let result = [];
    
    for (i = 0; i < nums.length; i++) {      // loop once to create dictionary
        let num = nums[i];
        if (dict[num]) {
            dict[num].count++;
            dict[num].index.push(i);
        } else {
            dict[num] = {count: 1, index: [i]};
        };
    };
    
    for (i = 0; i < nums.length; i++) {
        let num = nums[i];
        let difference = target - num;
        
        if (difference == num) {             // if two of same number are required, check that more than one are present
            if (dict[num].count > 1) {
                result = dict[num].index;    // REFACTOR: per instructions, exactly one solution--index will not exceed length of 2
                break
            };
            
        } else {                             // else, check if difference is present in dictionary
            if (dict[difference]) {
                result.push(dict[num].index[0]);
                result.push(dict[difference].index[0]);
                break
            };
        };   
    };
    
    return result
};