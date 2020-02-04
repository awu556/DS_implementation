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
      let data = new arrayClass();
      data.push(5);
      data.push(6);
    });
  });
});
