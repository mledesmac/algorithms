"use strict";
/**
 * Find the number that his plus is equals to 'target'
 */
const listOne = [1, 7, 3, 4, 5, 6, 6];
const listTwo = [9, 22, 3, 67, 10];
const target = 11;
const targetMin = target - 1; // 12
const targetMax = target + 1; // 10
const setCompare = new Set();
const numberMatch = [], numberMatchMin = [], numberMatchMax = [];
let isExactNumber = false, isExactNumberMin = false, isExactNumberMax = false;
for (const find of listOne) {
    setCompare.add(find);
}
for (const find of listTwo) {
    // Case of 11
    const exactNumber = Math.abs(find - target);
    isExactNumber = setCompare.has(exactNumber);
    if (isExactNumber) {
        numberMatch.push(exactNumber);
    }
    if (!isExactNumber) {
        //Case of 10
        const exactNumberMin = Math.abs(find - targetMin);
        isExactNumberMin = setCompare.has(exactNumberMin);
        if (isExactNumberMin) {
            numberMatchMin.push(exactNumberMin);
        }
        else {
            // Case 12
            console.log(find + ' - ' + targetMax);
            const exactNumberMax = Math.abs(find - targetMax);
            isExactNumberMax = setCompare.has(exactNumberMax);
            if (isExactNumberMax) {
                numberMatchMax.push(exactNumberMax);
            }
        }
    }
}
console.log('---Exact---');
console.log(numberMatch);
console.log('---Max---');
console.log(numberMatchMax);
console.log('---Min---');
console.log(numberMatchMin);
