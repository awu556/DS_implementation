const StackClass = require("./stack");

const stackPush = arr => {
  let newStack = new StackClass();
  for (let i = 0; i < arr.length; i++) {
    newStack.push(arr[i]);
  }
  return newStack;
};

describe("stack class", () => {
  let testStack = new StackClass();

  test("should be a class object", () => {
    expect(typeof testStack).toEqual("object");
  });

  beforeEach(() => {
    testStack = stackPush(["Zebra", "Gorilla", 12, 19]);
  });

  describe("push method", () => {
    test("should possess a push method", () => {
      expect(testStack.push).not.toBeUndefined();
    });

    test("the data object populates with a key-value pair", () => {
      expect(testStack.items[0]).toBe("Zebra");
      expect(testStack.items[1]).toBe("Gorilla");
      expect(testStack.items[2]).not.toBe("!");
    });

    test("the length of the array increases with each new element", () => {
      expect(testStack.items.length).toBe(4);
      testStack.push("Wombat");
      expect(testStack.items.length).toBe(5);
    });
  });

  describe("pop method", () => {
    test("should possess a pop method", () => {
      expect(testStack.pop).not.toBeUndefined();
    });

    test("the pop method removes the last element and returns it", () => {
      expect(testStack.pop()).toBe(19);
      expect(testStack.pop()).toBe(12);
    });

    test("the size of the stack decreases after each pop", () => {
      expect(testStack.items.length).toBe(4);
      testStack.pop();
      expect(testStack.items.length).toBe(3);
    });

    test("the pop method accounts for underflow, or no items left in the stack", () => {
      let popCount = 0;
      while (popCount !== 4) {
        testStack.pop();
        popCount += 1;
      }
      expect(testStack.pop()).toBe("Underflow");
    });
  });

  describe("peek method", () => {
    test("should possess a peek method", () => {
      expect(testStack.peek).not.toBeUndefined();
    });

    test("the peek method returns the topmost element without deleting it", () => {
      expect(testStack.peek()).toBe(19);
      expect(testStack.items.length).toBe(4);
    });
  });

  // Helper Method Tests

  describe("isEmpty method", () => {
    test("should possess a isEmpty method", () => {
      expect(testStack.isEmpty).not.toBeUndefined();
    });

    test("the isEmpty method returns true if the stack has elements and false if it doesn't", () => {
      expect(testStack.isEmpty()).toBeTruthy();
      let popCount = 0;
      while (popCount !== 4) {
        testStack.pop();
        popCount += 1;
      }
      expect(testStack.isEmpty()).toBeFalsy();
    });
  });

  describe("printStack method", () => {
    test("should possess a printStack method", () => {
      expect(testStack.printStack).not.toBeUndefined();
    });

    test("the printStack method returns a string of all items concatenated", () => {
      expect(testStack.printStack()).toBe("Zebra Gorilla 12 19");
    });
  });
});
