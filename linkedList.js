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
        node.next = head;
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
}

module.exports = { Node, LinkedListClass };
