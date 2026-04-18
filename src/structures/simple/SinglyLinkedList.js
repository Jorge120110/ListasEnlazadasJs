const SimpleNode = require("./SimpleNode");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addFirst(value) {
    const newNode = new SimpleNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
    this._size++;
  }

  addLast(value) {
    const newNode = new SimpleNode(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this._size++;
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this._size--;
    return value;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (this._isSameValue(current.value, value)) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  countOccurrences(value) {
      let count = 0;
      let current = this.head;
      while (current !== null) {
        if (this._isSameValue(current.value, value)) {
          count++;
        }
        current = current.next;
      }
      return count;
    }

    clean() {
      let removedCount = this._size; // Cambiado a _size
      let current = this.head;
      
      while (current !== null) {
        let nextNode = current.next;
        current.next = null;
        current = nextNode;
      }
      
      this.head = null;
      this.tail = null;
      this._size = 0; // Cambiado a _size
      
      return removedCount;
    }

    reverseInPlace() {
      if (this.head === null || this.head.next === null) {
        return;
      }

      let previous = null;
      let current = this.head;
      let next = null;

      this.tail = this.head;

      while (current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
      }

      this.head = previous;
    }

    removeDuplicates() {
      if (this.head === null || this._size <= 1) { // Cambiado a _size
        return 0;
      }

      let removedCount = 0;
      let pivot = this.head;

      while (pivot !== null) {
        let runner = pivot;

        while (runner.next !== null) {
          if (this._isSameValue(pivot.value, runner.next.value)) {
            let duplicate = runner.next;
            runner.next = duplicate.next;

            if (duplicate === this.tail) {
              this.tail = runner;
            }

            this._size--; // Cambiado a _size
            removedCount++;
          } else {
            runner = runner.next;
          }
        }
        pivot = pivot.next;
      }

      return removedCount;
    }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  toString() {
    let out = "[";
    let current = this.head;
    while (current !== null) {
      out += String(current.value);
      if (current.next !== null) {
        out += ", ";
      }
      current = current.next;
    }
    out += "]";
    return out;
  }

  _isSameValue(left, right) {
    return left === right;
  }
}

module.exports = SinglyLinkedList;
