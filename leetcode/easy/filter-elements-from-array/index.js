// Link on the task: https://leetcode.com/problems/filter-elements-from-array/description/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            newArray.push(arr[i]);
        }
    }

    return newArray;
};
