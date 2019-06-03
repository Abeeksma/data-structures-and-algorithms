'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    let node = new Node (data);

    node.previous = this.top;
    this.top = node;
    this.size ++;

    return this.top;
  }

  pop(){
    temp = this.top ;
    this.top = this.top.previous;
    this.size --;
    return temp; 
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.size = 0;
  }
}

