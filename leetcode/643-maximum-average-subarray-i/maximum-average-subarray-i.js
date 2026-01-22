/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let answer = -Infinity;
    for (let left=0, right=k-1; right<nums.length; left++, right++) {
        let sum = 0;
        for (let i=left; i<=right; i++) {
            sum += nums[i];
        }
        sum /= k;
        answer = Math.max(answer, sum);
    }
    return answer;
};