'use strict';

/*
  traverse the tree [tree.inOrder()?]
  check if current node.value is divible by 3, 5, or both
  if divisible by 3 replace node.value with 'Fizz'
  if divisible by 5 replace node.value with 'buzz'
  if divisible by both replace node.value with 'Fizzbuzz'
  if not divisible by 3 or 5 do nothing
*/

let fizzBuzz = function(tree) {
  fizzbuzzSearch(this.root);
   
  function fizzbuzzSearch(node){  
    if(!node){
      return null;
    }
    else if(node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'Fizzbuzz';
    }
    else if (node.value % 5 === 0) {
      node.value = 'buzz';
    }
    else if (node.value % 3 === 0) {
      node.value = 'Fizz';
  }
  fizzbuzzSearch(node.left);
  fizzbuzzSearch(node.right);
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.left = this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    var result = [];
    preOrderVisit(this.root);
    return result;

      function preOrderVisit(node) {
      if(!node){
        return
      }
      result.push(node.value);
      preOrderVisit(node.left);
      preOrderVisit(node.right);
    };
  }

  inOrder() {
    var result = [];
    inOrderVisit(this.root)
    return result;
 
      function inOrderVisit(node){
        if(!node) {
          return
      }
        inOrderVisit(node.left);
        result.push(node.value);
        inOrderVisit(node.right);
    };
  }

  postOrder() {
    var result = [];
    postOrderVisit(this.root)
    return result;

      function postOrderVisit(node) {
        if(!node) {
          return
      }
        postOrderVisit(node.left);
        postOrderVisit(node.right);
        result.push(node.value);
    };
  }

};

module.exports = BinaryTree, fizzBuzz;
BinaryTree.node = Node; 