const { BinarySearchTree } = require("./BinarySearchTree");

const bulkInsert = (arr) => {
  let resultBST = new BinarySearchTree();
  for (let i = 0; i < arr.length; i++) {
    resultBST.insert(arr[i]);
  }
  return resultBST;
};

describe("Binary Search Tree class", () => {
  let testBST = new BinarySearchTree();

  test("should be a class object", () => {
    expect(typeof testBST).toEqual("object");
  });

  describe("insert method", () => {
    test("should possess a insert method", () => {
      expect(testBST.insert).not.toBeUndefined();
    });

    test("should insert values into the BST", () => {
      let test = bulkInsert([10, 20, 30, 40]);
      expect(test.root.data).toEqual(10);
    });
  });
});
