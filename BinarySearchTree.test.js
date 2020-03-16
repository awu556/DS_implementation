const { BinarySearchTree } = require("./BinarySearchTree");

describe("Binary Search Tree class", () => {
  let testBST = new BinarySearchTree();

  test("should be a class object", () => {
    expect(typeof testBST).toEqual("object");
  });
});
