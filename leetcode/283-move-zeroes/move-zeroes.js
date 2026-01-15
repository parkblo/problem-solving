/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    let right = 0;

    const swap = (a, b) => {
        [nums[a], nums[b]] = [nums[b], nums[a]]
    }

    const fillZero = (start, end) => {
        for (let i=start; i<=end; i++) {
            nums[i] = 0;
        }
    }

    while (right + 1 < nums.length) {
        if (nums[right] !== 0) {
            left++;
            right++;
            continue;
        }

        if (nums[right+1] !== 0) {
            nums[left] = nums[right+1];
            fillZero(++left, ++right);
        } else {
            right++;
        }
    }
};