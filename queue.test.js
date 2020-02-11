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
      expect(testQueue.enqueue).not.toBeUndefined();
    });

    test("pushes elements to the end of the queue", () => {
      expect(testQueue.items[0]).toBe("Orange");
      testQueue.enqueue("Strawberry");
      expect(testQueue.items[testQueue.items.length - 1]).toBe("Strawberry");
    });

    test("the length of the queue increases with each enqueue", () => {
      expect(testQueue.items.length).toBe(4);
    });
  });

  describe("dequeue method", () => {
    test("should have an dequeue method", () => {
      expect(testQueue.dequeue).not.toBeUndefined();
    });

    test("removes elements from the front of the queue and returns it", () => {
      expect(testQueue.items[0]).toBe("Orange");
      expect(testQueue.dequeue()).toBe("Orange");
      expect(testQueue.items[0]).toBe("Apple");
    });

    test("the length of the queue increases with each enqueue", () => {
      testQueue.dequeue();
      expect(testQueue.items.length).toBe(3);
    });

    test("should account for underflow if queue is empty", () => {
      for (let i = 0; testQueue.items.length; i++) {
        testQueue.dequeue();
      }
      expect(testQueue.dequeue()).toBe("Underflow");
    });
  });
});
