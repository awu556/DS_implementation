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

    // beforeEach(() => {
    //   testLinked = addNodes([12, 20, 50, "Pear"]);
    // });

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
});
