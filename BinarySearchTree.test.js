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

    test("first value inserted should be the root value", () => {
      let test = bulkInsert([10, 20, 30, 40]);
      expect(test.root.data).toEqual(10);
    });

    test("every value added less than the root should be on the left branch", () => {
      let test = bulkInsert([20, 16, 31, 8]);
      expect(test.root.left.data).toBe(16);
    });

    test("every value added greater than the root should be on the right branch", () => {
      let test = bulkInsert([20, 16, 31, 8]);
      expect(test.root.right.data).toBe(31);
    });
  });
});
