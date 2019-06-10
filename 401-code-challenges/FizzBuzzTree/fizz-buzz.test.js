'use strict';

const tree = require('./fizz-buzz-tree');

describe('fizzbuzz tree', () => {
  
  it('will return null for an empty tree', () => {
    let tree = new BinaryTree(); 
    expect().toBe(null);
  
  });

  it('will return null when given a parameter that is not a tree', () => {
    let tree = 'donkey';
    expect().toBe(null);
  
  });

  it('will replace values with Fizz for values divisible by 3', () => {
    let tree = testTree();
  
  });

  it('will replace values with buzz for values divisible by 5', () => {
    let tree = testTree();
  
  });

  it('will replace values with Fizzbuzz for values divisible by both 3 and 5', () => {
    let tree = testTree();
 
  });  
});


function testTree() {

  var tree = new BinaryTree();

  tree.root = new BinaryTree.node('5');
  tree.root.left = new BinaryTree.node('10');
  tree.root.right = new BinaryTree.node('12');
  tree.root.left.left = new BinaryTree.node('3');
  tree.root.left.right = new BinaryTree.node('donkey');
  tree.root.right.left = new BinaryTree.node('15');

  return tree;

}