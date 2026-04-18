const DoublyNode = require("./DoublyNode");

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addFirst(value) {
    const newNode = new DoublyNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this._size++;
  }

  addLast(value) {
    const newNode = new DoublyNode(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
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
    } else {
      this.head.previous = null;
    }
    this._size--;
    return value;
  }

  removeLast() {
    if (this.tail === null) {
      return null;
    }
    const value = this.tail.value;
    this.tail = this.tail.previous;
    if (this.tail === null) {
      this.head = null;
    } else {
      this.tail.next = null;
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
      let removedCount = this._size;
      let current = this.head;

      while (current !== null) {
        let nextNode = current.next;
        current.next = null;
        current.previous = null; // Usando 'previous' para compatibilidad
        current = nextNode;
      }

      this.head = null;
      this.tail = null;
      this._size = 0; // Usando '_size'

      return removedCount;
    }

    reverseInPlace() {
      if (this.head === null || this.head.next === null) {
        return;
      }

      let current = this.head;
      let temp = null;

      // Intercambiamos los punteros de cada nodo
      while (current !== null) {
        temp = current.previous; 
        current.previous = current.next;
        current.next = temp;
        current = current.previous; // 'previous' ahora apunta al "siguiente" original
      }

      // Ajustamos cabeza y cola
      if (temp !== null) {
        this.tail = this.head;
        this.head = temp.previous;
      }
    }

    removeDuplicates() {
      if (this.head === null || this._size <= 1) {
        return 0;
      }

      let removedCount = 0;
      let pivot = this.head;

      while (pivot !== null) {
        let runner = pivot.next;

        while (runner !== null) {
          if (this._isSameValue(pivot.value, runner.value)) {
            let toDelete = runner;
            runner = runner.next;

            // Desconexión lógica de lista doble
            if (toDelete.next !== null) {
              toDelete.next.previous = toDelete.previous;
            } else {
              this.tail = toDelete.previous;
            }

            if (toDelete.previous !== null) {
              toDelete.previous.next = toDelete.next;
            }

            this._size--; // Usando '_size'
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

  toForwardString() {
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

  toBackwardString() {
    let out = "[";
    let current = this.tail;
    while (current !== null) {
      out += String(current.value);
      if (current.previous !== null) {
        out += ", ";
      }
      current = current.previous;
    }
    out += "]";
    return out;
  }

  _isSameValue(left, right) {
    return left === right;
  }
}

module.exports = DoublyLinkedList;
