/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sp = 0;

    if (s === "") return true;

    for (let i=0; i<t.length; i++) {
        if (t[i] === s[sp]) sp++;

        if (sp === s.length) {
            return true;
        }
    }
    return false;
};
