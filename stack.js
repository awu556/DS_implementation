class stackClass {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }
}

module.exports = stackClass;
