const arrayClass = require("./array");

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
      let testing = new arrayClass();
      testing.push("Hello");
      testing.push("World");
      testing.push("!");

      expect(testing.data["0"]).toBe("Hello");
      expect(testing.data["1"]).toBe("World");
      expect(testing.data["2"]).toBe("!");
    });

    test("the length of the array increases with each new element", () => {
      let testing2 = new arrayClass();
      testing2.push("One!");
      testing2.push("Two!");
      testing2.push("Three!");
      testing2.push("Four!");
      testing2.push("Five!");

      expect(testing2.length).toBe(5);
    });
  });

  describe("pop method", () => {
    test("should possess a push method", () => {
      expect(newArray.pop).not.toBeUndefined();
    });

    test("the last element of the array should be undefined after popping", () => {
      let testing3 = new arrayClass();
      testing3.push("Bob");
      testing3.push("Loblaw");
      testing3.push("Attorney");
      testing3.push("at");
      testing3.push("Law");
      testing3.pop();

      expect(testing3.data["5"]).toBeUndefined();
    });
  });
});
