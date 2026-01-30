/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    for (let i=0; i<arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    const set = new Set();
    for (const [key, val] of map.entries()) {
        if (set.has(val)) {
            return false;
        }
        set.add(val);
    }
    
    return true;
};