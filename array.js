class arrayClass {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.data;
  }

  pop() {
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

module.exports = arrayClass;
