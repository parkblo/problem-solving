/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let curr = 0;
    let ans = 0;
    for (let i=0; i<gain.length; i++) {
        curr += gain[i];
        ans = Math.max(ans, curr);
    }
    return ans;
};