/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let plantCount = 0;
    const bedCopy = [...flowerbed]
    
    for (let i=0; i<flowerbed.length; i++) {
        if (bedCopy[i] === 1) continue;
        if (i > 0 && bedCopy[i-1] ===1) continue;
        if (i < flowerbed.length - 1 && bedCopy[i+1] === 1) continue;
        bedCopy[i] = 1;
        plantCount += 1;
    }

    if (plantCount >= n) return true;
    return false;
};