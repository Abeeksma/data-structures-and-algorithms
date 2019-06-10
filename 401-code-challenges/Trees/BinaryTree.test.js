'use strict';

const BinaryTree = require('./BinaryTree');

describe('Binary Tree', () => {
  it('can traverse the data tree using preOder', () =>{
    var tree = testTree();

    expect(tree.preOrder()).toEqual(['a', 'b', 'd', 'e', 'c', 'f']);
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