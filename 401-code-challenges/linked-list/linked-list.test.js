'use strict';

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null; 
  }
}
  
class List {
  constructor() {
  this.head = null;
  this.length = 0;
  }

  appendItem(data) {
    const listItem = new ListNode(data);
    let current = this.head;

    if(this.head === null) {
      this.head = listItem;
      this.length++;
    }
    else{
      while(current.next !== null){
        console.log(`Existing Node; ${current.data}`);
        current = current.next;
      }
      current.next = listItem;
      this.length++;
    }
    return this;    
  }

  includesItem(data) {
      if(this.head === null){
        return false;
      }
      else {
        let current = this.head;
        while(current !== null){
          if(current.data === data){
            return true;
          }
          current = current.next;
        }
        return false;
      }
  };

  printContents() {
    let contents = '';

    if(this.head === null){
      return contents;
    }
    else{
      let current = this.head;
      while(current !== null){
        contents = (contents === '' ? current.data : contents += `, ${current.data}`);
        current = current.next;
      }
      return contents;
    }
  };

  removeItem(data) {
    if(this.head.data === data) {
      this.head = this.head.next;
      this.length--;
    }
    else {
      let previous = this.head;
      let current = previous.next;
      while(current) {
        if(current.data = data){
          previous.next = current.next
          current = current.next;
          this.length--;
          break;
        }
        else {
          previous = current;
          current = current.next;
          this.length--;
        }
      }
    }
  };

  insertItem(data) {
    let listItem = new ListNode(data);

    if(this.head) {
      listItem.next = this.head;
    }
      this.head = listItem;
      length++;
  };

  insertBefore(data) {
    let current = this.head;
    let listItem = new ListNode(data);

    while(current !== null) {
      if(current.next.data !== data && current.data !== data) {
        current = current.Next;
      }
      else if(current.next.data === data) {
        listItem.next = current.next;
        current.next = listItem;
        this.length++;
      }
      else if(data === this.head.data) {
        listItem.next = this.head;
        this.head = listItem;
        this.length ++;
      }
      else {
        throw (`no data to insert before`);
      }
    }
  };

  insertAfter(data) {
    let current = this.head;
    let listItem = new ListNode(data);
    
    while(current !== null) {
      if(current.data === data) {
        listItem.next = current.next;
        current.next = listItem;
        this.length ++;
      }
      else {
        current = current.next;
        this.length++;
      }
    }
    throw('no data to insert after');
  };

  // TODO: remove all the lengths and do it differently
  kFromEnd(k) { 
    if (k > this.length || k < 0) {
      return null
    }
    else {
         let current = this.head;
    for(let i = 1; i < Math.floor(this.length-k); i++){
      current = current.next;
      //current.next = current;
    }
    return current.data;
    }
  };

  findMiddle() {
    let current = this.head;
    if(this.length < 1) {
      return null;
    }
    for(let i = 1; i < Math.ceil(this.length/2); i++) {
      current = current.next
    }
    return current.data;
  };

};

let emptyList;
let singleItemList;
let multiItemList;
let fatHappyList;

describe('Linked List', () => {
  // sets new lists before each test
  beforeEach(() =>{
    emptyList = new List();
    singleItemList = new List();
    singleItemList.appendItem('node1');

    multiItemList = new List();
    multiItemList.appendItem('node1');
    multiItemList.appendItem('node2');
    multiItemList.appendItem('node3');

    fatHappyList = new List();
    fatHappyList.appendItem('node1');
    fatHappyList.appendItem('node2');
    fatHappyList.appendItem('node3');
    fatHappyList.appendItem('node4');
    fatHappyList.appendItem('node5');
    console.log(`this is the fat list ${fatHappyList.printContents()} it has ${fatHappyList.length} things`);

  });
  it('can instantiate an empty linked list', () =>{
    //console.log(`emptyList: ${JSON.stringify(emptyList)}`);
    expect(emptyList).toBeDefined();
  });

  it('can properly insert a node into the empty linked list', () => {
    let result = emptyList.appendItem('testNode');
    //console.log(`emptyList insert ${JSON.stringify(result)}`);
    expect(result).toBeDefined();
    expect(result.head.data).toEqual('testNode');
    expect(result.head.next).toBe(null);
  });

  it('can properly insert a node into the single item linked list', () => {
    let result = singleItemList.appendItem('testNode');
    //console.log(`singleitem insert ${JSON.stringify(result)}`);
    expect(result).toBeDefined();
    expect(result.head.next.data).toEqual('testNode');
    expect(result.head.next.next).toBe(null);
  });  
  
  it('can properly insert a node into the multi item linked list', () => {
    let result = multiItemList.appendItem('testNode');
    //console.log(`emptyList insert ${JSON.stringify(result)}`);
    expect(result).toBeDefined();
    expect(result.head.next.next.next.data).toEqual('testNode');
    expect(result.head.next.next.next.next).toBe(null);
  });

  it('if node1 exists in the linked list', () => {
    let result = multiItemList.includesItem('node2');
    expect(result).toBe(true);
  });

  it('returns false if the value input does not exist in the list', () => {
    let result = multiItemList.includesItem('notinthelist');
    expect(result).toBe(false);
  });

  it('returns the contents of the linked list', () => {
    let result = multiItemList.printContents();
    //console.log(`testPrint ${result}`);
    expect(result).toEqual('node1, node2, node3');
  });

  it('inserts a new node at the begining of an empty list', () => {
    let result = emptyList.appendItem('testNode');
    expect(result.head.data).toEqual('testNode');
    expect(result.head.next).toEqual(null);
  });

  it('deletes a node at a given value', () => {

  });
  
  it('find the kth element from the end of a linked list with at least k element', () => {
    let result = fatHappyList.kFromEnd(2);
    //console.log(`k from end is ${result}`);
    expect(result).toEqual('node3');
  });

  it('find the kth element from the end of linked list where k is 0', () => {
    let result = fatHappyList.kFromEnd(0);
    expect(result).toEqual('node5');
  });

  it('returns null is k is greater than list length', () => {
    let result = fatHappyList.kFromEnd(6);
    expect(result).toBe(null);
  });

  it('returns null is k is a negative number', () => {
    let result = fatHappyList.kFromEnd(-1);
    expect(result).toBe(null);
  });

  it('returns the middle node from a list', () => {
    let result = fatHappyList.findMiddle();
    expect(result).toEqual('node3');
  });

  it('returns null if the list is empty', () => {
    let result = emptyList.findMiddle();
    expect(result).toBe(null);
  });
});

