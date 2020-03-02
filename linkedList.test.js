const { LinkedListClass } = require("./linkedList");

const addNodes = nodes => {
  let newLL = new LinkedListClass();
  for (let i = 0; i < nodes.length; i++) {
    newLL.add(nodes[i]);
  }
  return newLL;
};

describe("Linked List class", () => {
  let testLinked = new LinkedListClass();

  test("should be a class object", () => {
    expect(typeof testLinked).toEqual("object");
  });

  describe("add method", () => {
    test("should have an add method", () => {
      expect(testLinked.add).not.toBeUndefined();
    });

    test("if there are no nodes in the list, adds a node that becomes the head", () => {
      testLinked.add(5);
      expect(testLinked.head).not.toBeUndefined();
      expect(testLinked.head.val).toBe(5);
    });

    test("if adding multiple elements, populates other elements as next", () => {
      testLinked.add(10);
      expect(testLinked.head).not.toBeUndefined();
      expect(testLinked.head.val).toBe(5);
      expect(testLinked.head.next.val).toBe(10);
    });

    test("each element added increases the size of the linked list", () => {
      testLinked.add(14);
      testLinked.add(2);
      testLinked.add(7);
      expect(testLinked.size).toBe(5);
    });
  });

  describe("insertAt method", () => {
    beforeEach(() => {
      testLinked = new LinkedListClass();
    });

    test("should have an insertAt method", () => {
      expect(testLinked.insertAt).not.toBeUndefined();
    });

    test("inserts a new node at the index provided", () => {
      testLinked.add(10);
      testLinked.insertAt("Hello World!", 1);
      expect(testLinked.head.next.val).toBe("Hello World!");
    });

    test("increases the size of the linked list", () => {
      testLinked = addNodes(["Car", "Van", "Bus"]);
      testLinked.insertAt("Boat", 1);
      testLinked.insertAt("Yatcht", 3);
      expect(testLinked.size).toBe(5);
    });

    test("if inserting at the head, replaced the current head with a new head", () => {
      testLinked = addNodes([12, 20, 15, 9, 11]);
      expect(testLinked.head.val).toBe(12);
      testLinked.insertAt(40, 0);
      expect(testLinked.head.val).toBe(40);
    });
  });

  describe("removeFrom method", () => {
    test("should have an removeFrom method", () => {
      expect(testLinked.removeFrom).not.toBeUndefined();
    });

    test("should remove the element from the index", () => {
      testLinked.removeFrom(1);
      expect(testLinked.head.next.val).toBe(20);
    });

    test("should decrease the size of the linked list", () => {
      expect(testLinked.size).toBe(5);
      testLinked.removeFrom(2);
      testLinked.removeFrom(3);
      expect(testLinked.size).toBe(3);
    });

    test("should reassign the head if the index to remove is 0", () => {
      expect(testLinked.head.val).toBe(40);
      testLinked.removeFrom(0);
      expect(testLinked.head.val).toBe(20);
    });
  });

  describe("removeElement method", () => {
    test("should have an removeElement method", () => {
      expect(testLinked.removeElement).not.toBeUndefined();
    });

    test("should search through the linked list to remove the element", () => {
      testLinked = addNodes([22, 44, 66, 11]);
      testLinked.removeElement(11);
      expect(testLinked.head.next.next.next).toBeNull();
    });

    test("should decrease the size of the linked list", () => {
      expect(testLinked.size).toBe(3);
    });
  });

  // Helper Method Tests

  describe("indexOf method", () => {
    test("should have an indexOf method", () => {
      expect(testLinked.indexOf).not.toBeUndefined();
    });

    test("should return the index of the given element at the index", () => {
      testLinked = addNodes([22, 44, 66, 11]);
      expect(testLinked.indexOf(66)).toBe(2);
    });

    test("should return -1 if the value isn't present in the linked list", () => {
      expect(testLinked.indexOf(109)).toBe(-1);
    });
  });
});
