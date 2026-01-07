/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const result = [];
    const maxCandy = Math.max(...candies);
    for (let i=0; i<candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandy) result.push(true);
        else result.push(false);
    }
    return result;
};