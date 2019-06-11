'use strict'

// the plan!!
// make two arrays, one for opening brackets one for closing brackets
// split input into an array
// for each thing in the input/split array check if it exists in the bracket arrays
// pop i check i put it on a stack 

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    if (!value) {
      return `You must pass in a value to add`;
    }

    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pushMultiple(arr) {
    if (!arr) {
      return `You must pass in at least two values`;
    }

    arr.forEach((value) => {
      const newNode = new Node(value);
      if (!this.top) {
        this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
    });
  }

  pop() {
    if (!this.top) {
      return `You dont have anything in your stack!`;
    }

    let removedNode = this.top;
    this.top = this.top.next;
    removedNode.next = null;
    return removedNode;
  }

  peek() {
    if (!this.top) {
      return `You dont have anything in your stack!`;
    }

    return this.top.value;
  }
}

////stack and node constructor ^^^^^^^^^6

/// now for work ///

let openingBrackets = ['(', '[', '{'];
let closingBrackets = [')', ']', '}'];

bracketRacket = function(array){
  //split up the input so i can mess with it
  const splitArray = array.split('');
  
  let brackArr = [];
  let stack = new Stack();

  //filter out my brackets into a workspace
  splitArray.forEach(char => {
    if(char === '(' || char === '[' || char === '{' || char === ')' || char === ']' || char === '}'){
      brackArr.push(char);
    }
    else {return char}
  });

  for(let i = 0; i < splitArray.length -1; i++){
  
  }
}



