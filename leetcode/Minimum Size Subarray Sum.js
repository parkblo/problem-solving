/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(target, nums) {
    let left = 0, sum = 0, minLen = Infinity;

    for (let right=0; right<nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            if (right - left + 1 < minLen) {
                minLen = (right - left + 1);
            }
            sum -= nums[left];
            left++;
        }
    }

    minLen = minLen === Infinity ? 0 : minLen;
    return minLen;
};
