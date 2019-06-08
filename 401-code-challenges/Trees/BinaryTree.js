'use strict';

import { isModuleDeclaration } from "@babel/types";

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

    //helper to use! making it recursive
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

      }  
      function inOrderVisit(node){
      if(!node){
        return
      }
    };
  }

  postOrder() {
    var result = [];
    postOrder(this.root)
    return result;

  }

};

module.exports = BinaryTree;

BinaryTree.node = Node;