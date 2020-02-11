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
}

module.exports = queueClass;
