// Link on the task: https://leetcode.com/problems/to-be-or-not-to-be/description/

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe(compareValue) {
            if (val === compareValue) {
                return true;
            }
            throw new Error("Not Equal");
        },
        notToBe(compareValue) {
            if (val !== compareValue) {
                return true;
            }
            throw new Error("Equal");
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
