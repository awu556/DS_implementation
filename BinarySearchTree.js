class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    function insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }

    if (this.root === null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }

  remove(data) {
    this.root = removeNode(this.root, data);

    function removeNode(node, key) {
      if (node === null) {
        return null;
      } else if (key < node.data) {
        node.left = removeNode(node.left, key);
        return node;
      } else if (key > node.data) {
        node.right = removeNode(node.right, key);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        } else if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
      }
    }
  }

  // Tree Traversal

  inorder() {
    inOrderHelper(this.root);
    function inOrderHelper(node) {
      if (node !== null) {
        inOrderHelper(node.left);
        console.log(node.data);
        inOrderHelper(node.right);
      }
    }
  }

  preorder() {
    preOrderHelper(this.root);
    function preOrderHelper(node) {
      if (node !== null) {
        console.log(node.data);
        preOrderHelper(node.left);
        preOrderHelper(node.right);
      }
    }
  }

  postorder() {
    postOrderHelper(this.root);
    function postOrderHelper(node) {
      if (node !== null) {
        postOrderHelper(node.left);
        postOrderHelper(node.right);
        console.log(node.data);
      }
    }
  }

  // Helper Methods

  findMinNode() {
    if (this.root === null) {
      throw "Empty tree!";
    }
    let currNode = this.root;

    while (currNode.left !== null) {
      currNode = currNode.left;
    }
    return currNode.data;
  }

  getRootNode() {
    return this.root.data;
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }
}

module.exports = { Node, BinarySearchTree };
