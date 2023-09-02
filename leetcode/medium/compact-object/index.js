// Link on the task: https://leetcode.com/problems/compact-object/description/

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        return obj.reduce((acc,item) => {
            if (item instanceof Object) {
                acc.push(compactObject(item))
            } else if (Boolean(item)) {
                acc.push(item)
            }
            return acc;
        }, []);
    }

    for(const key in obj) {
        if (obj[key] instanceof Object) {
            obj[key] = compactObject(obj[key])
        } else if (!Boolean(obj[key])) {
            delete obj[key]
        }
    }

    return obj;
};
