/*659. Split Array into Consecutive Subsequences
Medium

Given an array nums sorted in ascending order, return true if and only if you can split it into 1 or more subsequences such that each subsequence consists of consecutive integers and has length at least 3.

 

Example 1:

Input: [1,2,3,3,4,5]
Output: True
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3
3, 4, 5

Example 2:

Input: [1,2,3,3,4,4,5,5]
Output: True
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3, 4, 5
3, 4, 5

Example 3:

Input: [1,2,3,4,4,5]
Output: False

 

Constraints:

    1 <= nums.length <= 10000

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    // if the length of nums is less than 3, it is not possible to split array so return false;
    if(nums === null || nums.length < 3){
        return false;
    }
    const n = nums.length;
};