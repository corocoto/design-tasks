// Link on the task: https://leetcode.com/problems/design-an-ordered-stream/description/

/**
 * @param {number} n
 */
var OrderedStream = function (n) {
    this.list = new Array(n);
    this.pointer = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
    this.list[idKey - 1] = value;
    const result = [];

    while (this.pointer !== this.list.length) {
        if (typeof this.list[this.pointer] === 'undefined') {
            break;
        } 
        result.push(this.list[this.pointer++]);
    }
        
    return result;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
