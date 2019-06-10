'use strict';

const BinaryTree = require('./BinaryTree');

class BinarySearchTree extends BinaryTree {
 
  add() {
    var newNode = new BinaryTree.node();

    if(this.root === null){
      this.root = newNode;
    }
    else {
      addNode(this.root, newNode);
    }

    function addNode(node, newNode) {
      if(newNode.data < node.data) {
        if(node.left === null) {
          node.left === newNode;
        }
        else{
          addNode(node.left, newNode);
        }
      }
    else {
      if(node.right === null) {
        node.right = newNode;
      }
      else {
        addNode(node.right, newNode);
      }
    }
    }
  }

  conatins(node, data) {
    if(node === null) {
      return null
    }
    else if (data < node.data) {
      return this.search(node.left, data);
    }
    else if (data > node.data) {
      return this.search(node.right, data);
    }
    else {
      return node;
    }
  }
}

