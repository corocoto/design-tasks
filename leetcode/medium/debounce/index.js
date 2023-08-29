// Link on the task: https://leetcode.com/problems/debounce/description/

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    this.timerId = null;
    return function(...args) {
        if (this.timerId !== null) {
            clearTimeout(this.timerId);
        } 

        this.timerId = setTimeout(fn, t, ...args)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
