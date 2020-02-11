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
        current.next = node;
      }
    }
    this.size++;
  }
}

module.exports = { Node, LinkedListClass };
