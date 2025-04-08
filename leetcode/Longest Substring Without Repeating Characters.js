/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const str = s.split("");
    
    let lo = 0, hi = 0, maxLen = 0;
    const set = new Set();

    while (hi < str.length) {
        while (set.has(str[hi])) {
            set.delete(str[lo++]);
        }
        maxLen = Math.max(maxLen, hi-lo+1);
        set.add(str[hi++]);
    }

    return maxLen;
};
