/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i in nums) {
        for (let j in nums) {
            if (nums[i] + nums[j] == target && i != j) {
                return [i, j]
            }
        }
    }
};
// @lc code=end

