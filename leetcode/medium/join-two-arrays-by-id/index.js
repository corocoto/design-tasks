// Link on the task: https://leetcode.com/problems/join-two-arrays-by-id/description/

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const objResult = {};
    const mergedArray = arr1.concat(arr2);

    for (let i = 0; i < mergedArray.length; i++) {
        const value = mergedArray[i];

        objResult[value.id] = {...objResult[value.id], ...value};
    }

    return Object.values(objResult)
};
