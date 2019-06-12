'use strict';

const { Queue } = require('../stacks-and-queues/stack-and-queue.test');

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

  breadthFirst() {
    let q = new Queue();
    let breadthFirstArray = [];
    if (this.root !== null) {
      q.enqueue(this.root);
    }

    visitNodes();
    return breadthFirstArray;

    function visitNodes(){
      if(q.front === null){
       return
      }

      let current = q.dequeue()
      breadthFirstArray.push(current.value)
      
      if (current.left !== null) {
        q.enqueue(current.left);
      }
      if (current.right !==null){
        q.enqueue(current.right);
      }
      visitNodes();
    }
  }

};

module.exports = BinaryTree;

BinaryTree.node = Node;