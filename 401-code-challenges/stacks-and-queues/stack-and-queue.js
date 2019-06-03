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
    popped = this.top ;
    this.top = this.top.previous;
    this.size --;
    return popped; 
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  enqueue(data){
    let node = new Node (data);

    if(!this.first) {
      this.first = node
    }
    else {
      firstNode = this.first
      while(firstNode.next){
        firstNode = firstNode.next;
      }
      firstNode.next = node;
    }
    this.size ++;
    return node;
  }

  dequeue(){
    leavingQueue = this.first
    this.first = this.first.next;
    this.size --;
    return leavingQueue;
  }
}

