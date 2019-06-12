'use strict'; 

const BinaryTree = require('./BinaryTree');

describe('Breadth First Traversal', () => {
  it('it returns empty array for empty tree', () => {
    let tree = new BinaryTree();
    expect(tree.breadthFirst()).toEqual([]);
  });

  it('it returns and array of values breadth first', () => {
    let tree = testTree();
    expect(tree.breadthFirst()).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
  });

});

function testTree() {

  var tree = new BinaryTree();

  tree.root = new BinaryTree.node('a');
  tree.root.left = new BinaryTree.node('b');
  tree.root.right = new BinaryTree.node('c');
  tree.root.left.left = new BinaryTree.node('d');
  tree.root.left.right = new BinaryTree.node('e');
  tree.root.right.left = new BinaryTree.node('f');

  return tree;

}