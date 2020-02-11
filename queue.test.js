const QueueClass = require("./queue");

const loadQueue = arr => {
  let newQueue = new QueueClass();
  for (let i = 0; i < arr.length; i++) {
    newQueue.enqueue(arr[i]);
  }
  return newQueue;
};

describe("Queue class", () => {
  let testQueue = new QueueClass();

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

  describe("front method", () => {
    test("should have an front method", () => {
      expect(testQueue.front).not.toBeUndefined();
    });

    test("should return the first element of the queue", () => {
      expect(testQueue.front()).toBe("Orange");
    });

    test("should notify if the queue is empty", () => {
      for (let i = 0; testQueue.items.length; i++) {
        testQueue.dequeue();
      }
      expect(testQueue.front()).toBe("Queue is empty");
    });
  });

  // Helper Methods

  describe("isEmpty method", () => {
    test("should have an isEmpty method", () => {
      expect(testQueue.isEmpty).not.toBeUndefined();
    });

    test("returns true if the array is empty, and false if it is not", () => {
      expect(testQueue.isEmpty()).toBe(false);
      for (let i = 0; testQueue.items.length; i++) {
        testQueue.dequeue();
      }
      expect(testQueue.isEmpty()).toBe(true);
    });
  });

  describe("printQueue method", () => {
    test("should have an printQueue method", () => {
      expect(testQueue.printQueue).not.toBeUndefined();
    });

    test("should print out all the elements in the items array", () => {
      expect(testQueue.printQueue()).toEqual("Orange Apple Banana Pear");
    });
  });
});
