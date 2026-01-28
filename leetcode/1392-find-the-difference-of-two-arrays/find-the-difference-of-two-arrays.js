/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set();
    const set2 = new Set();
    for (let i=0; i<nums1.length; i++) {
        if (!nums2.includes(nums1[i])) {
            set1.add(nums1[i]);
        }
    }
    for (let i=0; i<nums2.length; i++) {
        if (!nums1.includes(nums2[i])) {
            set2.add(nums2[i]);
        }
    }

    return [Array.from(set1), Array.from(set2)];
};