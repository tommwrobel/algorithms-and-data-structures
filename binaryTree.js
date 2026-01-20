class BinarySearchTree {
  /**
   * Initializes an empty binary search tree.
   */
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a new value into the tree following BST rules
   * (smaller values to the left, larger values to the right).
   * 
   * @param {any} value - The value to insert.
   * @returns {BinarySearchTree} - Returns the tree instance (for method chaining).
   */
  insert(value) {

    if (!this.root) {
      this.root = new BinarySearchTreeNode(value);
      return this;
    }

    let node = this.root;
    while(true) {
      if (value === node.value) return this; 

      if (value < node.value) {
        if (!node.left) {
          node.left = new BinarySearchTreeNode(value);
          return this;
        }
        node = node.left;
      } else {
        if (!node.right) {
          node.right = new BinarySearchTreeNode(value);
          return this;
        }
        node = node.right;
      }
    }
  }

  /**
   * Checks if a specific value exists in the tree.
   * 
   * @param {any} value - The value to search for.
   * @returns {boolean} - True if the value exists, otherwise false.
   */
  contains(value) {}

  /**
   * Searches for and returns the specific Node object for a given value.
   * Useful when you need to access node data rather than just check for existence.
   * 
   * @param {any} value - The value to search for.
   * @returns {Node|null} - The found Node object or null if not found.
   */
  search(value) {}

  /**
   * Removes a node with the specified value from the tree while maintaining the BST structure.
   * Handles three cases: leaf node, node with one child, and node with two children.
   * 
   * @param {any} value - The value to remove.
   * @returns {boolean} - True if the element was removed, false if it didn't exist.
   */
  delete(value) {}

  /**
   * Returns the minimum value stored in the tree.
   * (In a BST, this is always the leftmost node).
   * 
   * @returns {any|null} - The minimum value or null if the tree is empty.
   */
  getMin() {}

  /**
   * Returns the maximum value stored in the tree.
   * (In a BST, this is always the rightmost node).
   * 
   * @returns {any|null} - The maximum value or null if the tree is empty.
   */
  getMax() {}

  /**
   * Traverses the tree using DFS: Pre-Order (Root -> Left -> Right).
   * Useful for copying the tree structure.
   * 
   * @param {function(any): void} callback - Function called for each node's value.
   */
  preOrder(callback) {}

  /**
   * Traverses the tree using DFS: In-Order (Left -> Root -> Right).
   * Returns values sorted in ascending order.
   * 
   * @param {function(any): void} callback - Function called for each node's value.
   */
  inOrder(callback) {}

  /**
   * Traverses the tree using DFS: Post-Order (Left -> Right -> Root).
   * Useful for deleting the tree (bottom-up approach).
   * 
   * @param {function(any): void} callback - Function called for each node's value.
   */
  postOrder(callback) {}

  /**
   * Traverses the tree using BFS: Level-Order (Level by level, top to bottom).
   * Requires a Queue data structure.
   * 
   * @param {function(any): void} callback - Function called for each node's value.
   */
  levelOrder(callback) {}

  /**
   * Checks if the tree contains no nodes.
   * 
   * @returns {boolean} - True if the tree is empty.
   */
  isEmpty() {}

  /**
   * Clears the entire tree, removing all nodes.
   */
  clear() {}
}


class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      this.left = new BinarySearchTreeNode(value);
    } else {
      this.right = new BinarySearchTreeNode(value);
    }
  }
}