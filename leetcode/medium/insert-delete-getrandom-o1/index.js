// Link on the task: https://leetcode.com/problems/insert-delete-getrandom-o1/description/

var RandomizedSet = function() {
    this.collection = new Set();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.collection.has(val)) {
        return false;
    }

    this.collection.add(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    return this.collection.delete(val);
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const values = Array.from(this.collection.values());
    return values[Math.floor(Math.random() * values.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
