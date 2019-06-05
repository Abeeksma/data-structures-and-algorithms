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

  peek(){

  }
  
}

class Queue {
  constructor() {
    this.front = null;
    this.size = 0;
  }

  enqueue(data){
    let node = new Node (data);

    if(!this.front) {
      this.front = node
    }
    else {
      firstNode = this.front
      while(firstNode.next){
        firstNode = firstNode.next;
      }
      firstNode.next = node;
    }
    this.size ++;
    return node;
  }

  dequeue(){
    leavingQueue = this.front
    this.front = this.front.next;
    this.size --;
    return leavingQueue;
  }

  peek(){

  }

}


module.exports = Node, Stack, Queue; 


describe('The stack', () => {
  it('can create an empty stack', () =>{
    let result = new Stack();
    
    expect(result).toBeDefined();
    expect(result.top).toBeNull();
    expect(result.size).toBe(0);
    
  });
});