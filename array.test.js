const arrayClass = require("./array");

describe("array class", () => {
  test("should be a class", () => {
    expect(typeof arrayClass).toEqual("function");
  });
  describe("push method", () => {
    test("should possess a push method", () => {
      expect(arrayClass.push()).toBeTruthy();
    });
  });
});
