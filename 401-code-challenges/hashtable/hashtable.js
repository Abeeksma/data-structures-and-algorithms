'use strict';

class Hashtable {
  constructor(size){
    this.storage = [];
    this.size = size;
    this.count = 0; 
  }

  hash(key){
    let prime = 2687;
    let total = 0;
    if(typeof key !== 'string'){
      JSON.stringify(key)
    }
    for(let i = 0; i < key.length; i++){
      total += prime * total + key.charCodeAt(i);
    }
    total %= this.size;
    return parseInt(total)
  }

  add(key, value){

  }

  get(key){
    return this.storage[this.hash(key)];
  }

  contains(key){
    
  }

}


module.exports = Hashtable;
