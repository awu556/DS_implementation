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

    test("every subsequent value added is placed correctly based on the values before it", () => {
      let test = bulkInsert([14, 8, 3, 22, 46]);
      expect(test.root.left.left.data).toBe(3);
      expect(test.root.right.right.data).toBe(46);
    });
  });

  describe("remove method", () => {
    test("should possess a remove method", () => {
      expect(testBST.remove).not.toBeUndefined();
    });

    test("removes a value that was added to the BST", () => {
      let test = bulkInsert([21, 31, 14, 8]);
      test.remove(8);
      expect(test.root.left.left).toBe(null);
    });

    test("accounts for removing a node that has children on the left", () => {
      let test = bulkInsert([21, 31, 14, 8]);
      test.remove(14);
      expect(test.root.left.data).toBe(8);
    });

    test("accounts for removing a node that has children on the right", () => {
      let test = bulkInsert([21, 31, 25, 8]);
      test.remove(31);
      expect(test.root.right.data).toBe(25);
    });

    test("accounts for removing the root node", () => {
      let test = bulkInsert([21, 31, 25, 8]);
      test.remove(21);
      expect(test.root).toBeUndefined();
    });
  });

  describe("inorder method", () => {
    test("should possess a inorder method", () => {
      expect(testBST.inorder).not.toBeUndefined();
    });

    // test("should print out all the values in an inorder traversal", () => {
    //   let test = bulkInsert([32, 22, 25, 43, 76]);
    //   expect(test.inorder(32));
    // });
  });

  describe("preorder method", () => {
    test("should possess a preorder method", () => {
      expect(testBST.preorder).not.toBeUndefined();
    });

    // test("should print out all the values in an preorder traversal", () => {
    //   let test = bulkInsert([32, 22, 25, 43, 76]);
    //   expect(test.preorder(32));
    // });
  });

  describe("postorder method", () => {
    test("should possess a postorder method", () => {
      expect(testBST.postorder).not.toBeUndefined();
    });

    // test("should print out all the values in an postorder traversal", () => {
    //   let test = bulkInsert([32, 22, 25, 43, 76]);
    //   expect(test.postorder(32));
    // });
  });

  describe("findMinNode method", () => {
    test("should possess a findMinNode method", () => {
      expect(testBST.findMinNode).not.toBeUndefined();
    });

    test("should print out all the values in an findMinNode traversal", () => {
      let test = bulkInsert([32, 22, 25, 43, 76]);
      expect(console.log(test.findMinNode()));
    });
  });
});
