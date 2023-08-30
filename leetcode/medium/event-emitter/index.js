// Link on the task: https://leetcode.com/problems/event-emitter/description/

class EventEmitter {
  storage = {};

  subscribe(event, cb) {
    if(this.storage[event]) {
        this.storage[event].push(cb);
    } else {
        this.storage[event] = [cb];
    }   

    return {
        unsubscribe: () => {
            this.storage[event].shift();
            return undefined;
        }
    };
  }

  emit(event, args = []) {
      return this.storage[event]?.map((cb) => cb(...args)) ?? [];
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
