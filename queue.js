class queueClass {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.items.length === 0) return "Underflow";
    return this.items.shift();
  }

  front() {
    if (this.items.length === 0) return "Queue is empty";
    return this.items[0];
  }

  isEmpty() {
    if (this.items.length === 0) return true;
    else return false;
  }

  printQueue() {
    let emptyStr = "";
    for (let i = 0; i < this.items.length; i++) {
      emptyStr += this.items[i] + " ";
    }
    return emptyStr.trim();
  }
}

module.exports = queueClass;
