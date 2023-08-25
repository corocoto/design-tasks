// Link on the task: https://leetcode.com/problems/allow-one-function-call/description/

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let callCount = 0;

    return function(...args){
        return callCount++ === 0 ? fn(...args) : undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
