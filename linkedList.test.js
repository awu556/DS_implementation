const { Node, LinkedListClass } = require("./linkedList");

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

  beforeEach(() => {
    testLinked = addNodes([12, 20, 50, "Pear"]);
  });

  describe("add method", () => {
    test("should have an add method", () => {
      expect(testLinked.add).not.toBeUndefined();
    });

    test("pushes elements to the end of the linked list", () => {
      console.log(testLinked);
    });
  });
});
