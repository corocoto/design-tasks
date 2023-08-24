// Link on the task: https://leetcode.com/problems/is-object-empty/description/

/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    const stringified = JSON.stringify(obj);

    return stringified === "[]" || stringified === "{}";
};
