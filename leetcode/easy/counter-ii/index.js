// Link on the task: https://leetcode.com/problems/counter-ii/description/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    return {
        value: init,
        increment() {
            return ++this.value;
        },
        decrement() {
            return --this.value;
        },
        reset() {
            this.value = init;
            return this.value;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
