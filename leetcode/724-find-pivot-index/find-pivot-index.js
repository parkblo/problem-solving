/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    const prefixSum = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) { prefixSum[i] = nums[i]; continue; }
        prefixSum[i] = prefixSum[i - 1] + nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        const leftSum = i === 0 ? 0 : prefixSum[i - 1];
        const rightSum = i === nums.length - 1 ? 0 : prefixSum[nums.length - 1] - prefixSum[i];
        if (leftSum === rightSum) return i;
    }

    return -1;
};