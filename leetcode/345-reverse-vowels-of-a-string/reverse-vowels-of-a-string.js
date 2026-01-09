/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const vowelArray = [];
    const ret = s.split("");
    for (let i=0; i<s.length; i++) {
        if (vowels.includes(s[i])) {
            vowelArray.push(s[i]);
        }
    }
    for (let i=0; i<s.length; i++) {
        if (vowels.includes(s[i])) {
            ret[i] = vowelArray.pop();
        }
    }
    return ret.join("");
};