const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.storage = [];
    this.head = 0;
    this.tail = 0;
  }

  getUnderlyingList() {
    let result = [];
    let obj = {};
    let objNext = {};
    for (let i = this.storage.length - 1; i >= 0; i--) {
      if (i == this.storage.length - 1) {
        objNext = { value: this.storage[i], next: null };
        result.push(objNext);
      } else {
        obj = { value: this.storage[i], next: objNext };
        objNext = obj;
        result.push(obj);
      }
    }
    return obj;

    // remove line with error and write your code here
  }

  enqueue(value) {
    this.storage.push(value);
    this.tail++;
    // remove line with error and write your code here
  }

  dequeue() {
    let el = this.storage.shift();
    return el;
    // remove line with error and write your code here
  }
}
/*const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(5);
queue.dequeue();
queue.getUnderlyingList();*/

module.exports = {
  Queue,
};
