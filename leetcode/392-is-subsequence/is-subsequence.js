/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let a = 0;

    if (s.length <= 0) return true; 

    for (let i=0; i<t.length; i++) {
        if (t[i] === s[a]) {
            a++;
        }

        if (a >= s.length) {
            return true;
        }
    }
    return false;
};