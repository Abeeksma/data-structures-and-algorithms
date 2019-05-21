'use strict'

//let array = [1, 2, 3, 4, 5, 6];
//let array = [];
//let array = 'not an array';

function reverseArray(array) {
  if(!Array.isArray(array)){
    return 'cannot reverse an array if you don\'t give me an array';
  }
  else if (array.length === 0){
    return [];
  }
  else {
  for (let i = 0; i <= Math.floor((array.length - 1)/2); i++) {
      let swappingNumber = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = swappingNumber;
  }
  return array;
  }
};

//console.log(reverseArray(array));



function anotherReverseArray (array) {
  if (!Array.isArray(array)){
    return 'cannot reverse that which is not an array with this array reversal function';
  }
  else if (array.length === 0){
    return [];
  }
  else{
  let reversedArray = [];
  for(let i = array.length -1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
  }
};

console.log(anotherReverseArray(array));


