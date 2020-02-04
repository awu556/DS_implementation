const arrayClass = require("./array");

describe("array class", () => {
  const newArray = new arrayClass();

  test("should be a class", () => {
    expect(typeof newArray).toEqual("object");
  });

  describe("push method", () => {
    test("should possess a push method", () => {
      expect(newArray.push).not.toBeUndefined();
    });

    test("the data array populates with a key-value pair", () => {
      let testing = new arrayClass();
      testing.push("Hello");
      testing.push("World");
      testing.push("!");

      expect(testing.data["0"]).toBe("Hello");
      expect(testing.data["1"]).toBe("World");
      expect(testing.data["2"]).toBe("!");
    });
  });
});
