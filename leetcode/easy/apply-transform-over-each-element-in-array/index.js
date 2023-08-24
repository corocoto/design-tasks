// Link on the task: https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i, arr));
    }

    return newArray;
};
