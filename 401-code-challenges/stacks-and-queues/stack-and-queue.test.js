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
    if(!this.stack){
      return 'Empty Stack'
    }
    return this.stack.top.data
  }
  
}

class Queue {
  constructor() {
    this.front = null;
    this.size = 0;
  }

  enqueue(data) {
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
    if(!this.queue) {
      return 'Queue is empty'
    }
    return this.queue.front.data
  }

}

module.exports = Node, Stack, Queue; 




let emptyStack;
let oneItemStack;
let multiItemStack;

describe('The stack', () => {
  //setting stack for testing
  beforeEach(() => {

    emptyStack = new Stack();

    oneItemStack = new Stack();
    oneItemStack.push('node1');

    multiItemStack = new Stack();
    multiItemStack.push('node1');
    multiItemStack.push('node2');
    multiItemStack.push('node3');

  });

  it('can create an empty stack', () =>{
    expect(emptyStack).toBeDefined();
    expect(emptyStack.top).toBeNull();
    expect(emptyStack.size).toBe(0);
  });

  it('can add a node to the top of the stack', () => {
    expect(emptyStack.push('node1')).toBeDefined();
    expect(emptyStack.top.data).toBe('node1') 
  });

  it('can add a node to a stack with nodes in it', () => {
    expect(oneItemStack.push('node2')).toBeDefined();
    expect(oneItemStack.top.data).toBe('node2');
  });

  it('can properly add a node to the top of a multi Item stack', () => {
    expect(multiItemStack.push('node4')).toBeDefined();
    expect(multiItemStack.top.data).toBe('node4');
  });

  it.skip('can peek at the top of the stack and return the top value', () => {
    expect(multiItemStack.peek()).toEqual('node3')
    console.log(multiItemStack.peek());
  });
});
