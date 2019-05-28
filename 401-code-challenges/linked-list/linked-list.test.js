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
  }

  assignItem(data) {
    const listItem = new ListNode(data);
    let current = this.head;

    if(this.head === null) {
      this.head = listItem;
    }
    else{
      while(current.next !== null){
        console.log(`Existing Node; ${current.data}`);
        current = current.next;
      }
      current.next = listItem;
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

  removeItem() {

  };

};

let emptyList;
let singleItemList;
let multiItemList;

describe('Linked List', () => {
  // sets new lists before each test
  beforeEach(() =>{
    emptyList = new List();
    singleItemList = new List();
    singleItemList.assignItem('node1');

    multiItemList = new List();
    multiItemList.assignItem('node1');
    multiItemList.assignItem('node2');
    multiItemList.assignItem('node3');

  });
  it('can instantiate an empty linked list', () =>{
    console.log(`emptyList: ${JSON.stringify(emptyList)}`);
    expect(emptyList).toBeDefined();
  });

  it('can properly insert a node into the empty linked list', () => {
    let result = emptyList.assignItem('testNode');
    console.log(`emptyList insert ${JSON.stringify(result)}`);
    expect(result).toBeDefined();
    expect(result.head.data).toEqual('testNode');
    expect(result.head.next).toBe(null);
  });

  it('can properly insert a node into the single item linked list', () => {
    let result = singleItemList.assignItem('testNode');
    console.log(`singleitem insert ${JSON.stringify(result)}`);
    expect(result).toBeDefined();
    expect(result.head.next.data).toEqual('testNode');
    expect(result.head.next.next).toBe(null);
  });  
  
  it('can properly insert a node into the multi item linked list', () => {
    let result = multiItemList.assignItem('testNode');
    console.log(`emptyList insert ${JSON.stringify(result)}`);
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
    console.log(`testPrint ${result}`);
    expect(result).toEqual('node1, node2, node3');
  });
});