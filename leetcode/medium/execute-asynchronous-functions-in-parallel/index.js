// Link on the task: https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const result = [];
        let total = 0;
        functions.forEach((fn, index, fns) => {
            fn()
                .then((value) => {
                    result[index] = value;
                    total++;
                    if (total === fns.length) {
                        resolve(result);
                    }
                })
                .catch(reject);
        });
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
