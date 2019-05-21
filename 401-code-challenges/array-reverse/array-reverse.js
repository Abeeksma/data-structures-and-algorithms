'use strict'

let array = [1, 2, 3, 4, 5, 6, 7, 8];

function reverseArray(array) {
  for (let i = 0; i <= Math.floor((array.length - 1)/2); i++) {
      let swappingNumber = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = swappingNumber;
  }
  return array;
};

console.log(reverseArray(array));

function anotherReverseArray (array) {
  let reversedArray = [];
  for(let i = array.length -1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
};

console.log(anotherReverseArray(array));


