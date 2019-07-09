'use strict';

class Hashtable {
  constructor(size = 100){
    this.storage = [];
    this.size = size;
    this.count = 0; 
  }

  hash(key){
    let prime = 2687;
    let total = 0;
    if(typeof key !== 'string'){
      key = JSON.stringify(key)

    }

    if (!key) {
      return 0;
    }

    for(let i = 0; i < key.length; i++){
      total += prime * total + key.charCodeAt(i);
    }
    total %= this.size;
    return parseInt(total)
  }

  add(key, value){
    const tablePos = this.hash(key);
    this.storage[tablePos] = key;
  }

  get(key){
    return this.storage[this.hash(key)];
  }

  contains(key){
    if(!this.storage[this.hash(key)]){
      return null
    }
    else {
      return this.storage[this.hash(key)];
    }
  }

}


module.exports = Hashtable;
