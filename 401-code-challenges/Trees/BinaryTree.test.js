'use strict';

const BinaryTree = require('./BinaryTree');

describe('Binary Tree', () => {
  it('can traverse the data tree using preOder', () => {
    var tree = testTree();

    expect(tree.preOrder()).toEqual(['a', 'b', 'd', 'e', 'c', 'f']);
  });

  it('can traverse the data tree using inOrder', () => {
    var tree = testTree();

    expect(tree.inOrder()).toEqual(['d', 'b', 'e', 'a', 'f', 'c']);
  });

  it('can traverse the dat tree using postOrder', () => {
    var tree = testTree();

    expect(tree.postOrder()).toEqual(['d', 'e', 'b', 'f', 'c', 'a']);
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