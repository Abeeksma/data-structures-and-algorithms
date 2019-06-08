'use strict';

const BinaryTree = require('./BinaryTree');

describe('Binary Tree', () => {
  it('can traverse the data tree using preOder', () =>{
    var tree = testTree;

    expect(tree.preOrder()).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
  });
});

function testTree() {

  var tree = new BinaryTree();

  tree.root = binaryTree.node('a');
  tree.root.left = binaryTree.node('b');
  tree.root.right = binaryTree.node('c');
  tree.root.left.left = binaryTree.node('d');
  tree.root.left.right = binaryTree.node('e');
  tree.root.right.left = binaryTree.node('f');

}