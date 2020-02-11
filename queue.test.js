const queueClass = require("./queue");

const loadQueue = arr => {
  let newQueue = new queueClass();
  for (let i = 0; i < arr.length; i++) {
    newQueue.enqueue(arr[i]);
  }
  return newQueue;
};

describe("Queue class", () => {
  let testQueue = new queueClass();

  test("should be a class object", () => {
    expect(typeof testQueue).toEqual("object");
  });

  beforeEach(() => {
    testQueue = loadQueue(["Orange", "Apple", "Banana", "Pear"]);
  });

  describe("enqueue method", () => {
    test("should have an enqueue method", () => {
      expect(testQueue.enqueue()).not.toBeUndefined();
    });
  });
});
