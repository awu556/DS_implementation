const arrayClass = require("./array");

const pushTest = arr => {
  let newArr = new arrayClass();
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

describe("array class", () => {
  const newArray = new arrayClass();

  test("should be a class object", () => {
    expect(typeof newArray).toEqual("object");
  });

  describe("push method", () => {
    test("should possess a push method", () => {
      expect(newArray.push).not.toBeUndefined();
    });

    test("the data object populates with a key-value pair", () => {
      const test1 = pushTest(["Hello", "World", "!"]);

      expect(test1.data["0"]).toBe("Hello");
      expect(test1.data["1"]).toBe("World");
      expect(test1.data["2"]).toBe("!");
    });

    test("the length of the array increases with each new element", () => {
      const test2 = pushTest(["One!", "Two!", "Three!", "Four!", "Five!"]);

      expect(test2.length).toBe(5);
    });
  });

  describe("pop method", () => {
    test("should possess a pop method", () => {
      expect(newArray.pop).not.toBeUndefined();
    });

    test("the last element of the array should be undefined after popping", () => {
      let test3 = pushTest(["Bob", "Loblaw", "Attorney", "at", "Law"]);
      test3.pop();

      expect(test3.data["5"]).toBeUndefined();
    });

    test("the length of the array should decrease after popping", () => {
      let test4 = pushTest(["Apple", "Orange", "Banana"]);
      expect(test4.length).toBe(3);
      test4.pop();
      expect(test4.length).toBe(2);
    });

    test("should return the last element when called", () => {
      let test4 = pushTest(["Life", "finds", "a", "way"]);

      expect(test4.pop()).toBe("way");
    });
  });

  describe("insertAt method", () => {
    let test5;

    beforeEach(() => {
      test5 = pushTest(["Somebody", "told", "me"]);
    });

    test("should possess a insertAt method", () => {
      expect(newArray.insertAt).not.toBeUndefined();
    });

    test("should insert elements at the given index", () => {
      test5.insertAt("once", 1);
      expect(test5.data["1"]).toBe("once");
    });
  });
});
