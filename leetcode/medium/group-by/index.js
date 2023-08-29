// Link on the task: https://leetcode.com/problems/group-by/description/

/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const result = {};

    for (let i = 0; i < this.length; i++) {
        const value = this[i];
        const key = fn(this[i]);

        if (result[key]) {
            result[key].push(value);
        } else {
            result[key] = [value];
        }
    }

    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
