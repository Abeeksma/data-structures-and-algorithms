'use strict';

const BinaryTree = require('./BinaryTree');


describe('Max Value Check', () => {
  it('return null given an empty tree', () => {
    let tree = new BinaryTree();
    expect(tree.maxValue()).toBe(null);
  });

  it('returns the the highest value from a tree with numeric values', () => {
    let tree = testTree();
    expect(tree.maxValue()).toEqual(6);
  });
});


function testTree() {

  var tree = new BinaryTree();

  tree.root = new BinaryTree.node(1);
  tree.root.left = new BinaryTree.node(2);
  tree.root.right = new BinaryTree.node(3);
  tree.root.left.left = new BinaryTree.node(4);
  tree.root.left.right = new BinaryTree.node(5);
  tree.root.right.left = new BinaryTree.node(6);

  return tree;

}