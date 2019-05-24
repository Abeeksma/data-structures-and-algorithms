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
      if(this.head === null) {
        this.head = listItem
      }
      else{
        let current = this.head;
        while(current.next !== null){
          current = current.next;
        }
        current.next = listItem;
      }    
  };

  findItem(data) {
    if(data){
      let current = this.head;
      let i = 0;
      while(current.data !== data && i < index){
        current = current.next;
        i++; 
      }
      return current.data === data ? current.data : undefined
    }
    else {return undefined};
  };

  listContents() {
    
  };

};

const list = new List();

describe('Linked List', () => {
  it('can instantiate an empty linked list', () =>{
    let result = new List();
    expect(result).toBeDefined();
  })
});