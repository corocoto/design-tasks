// Link on the task: https://leetcode.com/problems/chunk-array/description/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const result = [];

    while (arr.length > 0) {
        const chunk = arr.splice(0, size);
        result.push(chunk);
    } 

    return result;
};
