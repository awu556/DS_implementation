const stackClass = require("./stack");

const stackPush = arr => {
  let newStack = new stackClass();
  for (let i = 0; i < arr.length; i++) {
    newStack.push(arr[i]);
  }
  return newStack;
};

describe("stack class", () => {
  let testStack = new stackClass();

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
});
