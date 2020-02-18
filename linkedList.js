class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedListClass {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(val) {
    let node = new Node(val);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(val, index) {
    if (index > 0 && index > this.size) {
      return false;
    } else {
      let node = new Node(val);
      let curr, prev;

      curr = this.head;

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  removeFrom(index) {
    if (index > 0 && index > this.size) {
      return -1;
    } else {
      let curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      if (index === 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }
      this.size--;
      return curr.element;
    }
  }

  removeElement(val) {
    let current = this.head;
    let prev = null;
    while (current !== null) {
      if (current.val === val) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.val;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  // Helper Methods
  indexOf(element) {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      if (current.element === element) {
        return count;
      }
      count++;
      current = current.next;
    }
    return -1;
  }
}

module.exports = { Node, LinkedListClass };
