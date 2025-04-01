/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function (nums) {
    const dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;

    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<=i+nums[i] && j<nums.length; j++) {
            dp[j] = Math.min(dp[i] + 1, dp[j]);
        }
    }

    return dp[nums.length-1];
};
