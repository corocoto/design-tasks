// Link on the task: https://leetcode.com/problems/memoize/description/

/**
 * @param {Function} fn
 */
function memoize(fn) {
    const memoizedValues = {}; 
    return function(...args) {

        const key = JSON.stringify(args);

        if (key in memoizedValues) {
            return memoizedValues[key];
        }

        const newValue = fn(...args);
        memoizedValues[key] = newValue;

        return newValue;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
