'use strict';

// classes to build the pieces of the linked list

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
        while(current !== null){
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
list.assignItem('node1');
list.assignItem('node2')
console.log(list);

console.log(findItem('node1'))


// describe('Linked List', () => {
//   it()
// });