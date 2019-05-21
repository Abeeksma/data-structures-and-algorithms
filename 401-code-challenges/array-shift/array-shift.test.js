'use strict'

let array = [1, 2, 3, 4, 5, 6];
let array2 = [1, 2, 3, 4, 5];
let array3 = [];
let array4 = 'nonsense';
let array5 = ['things', 'stuffs', 'mayhem', 'madness'];
let array6 = ['one', 'fickle', 'donkey', 'hates', 'hay'];
let array7 = [1, 'donkey', 2, 3, 'mania', 'sanity'];
let array8 = ['donkey', 2, 'horse', 9, 8];

let middleInsert = 4;
let middleInsert2 = 'horse';
let middleInsert3 = undefined;


function insertShiftArray(array, middleInsert){
  if (!Array.isArray(array)){
    return 'I need an array to put something into'}
  else if (typeof middleInsert !== 'number' && typeof middleInsert !== 'string'){
    return array;
  }
  else{
    for(let i = 0; i < array.length; i++) {

    }
  return array;
  }
};

console.log(insertShiftArray(array4, middleInsert));


describe('Array with value added to middle', () => {
 it('Is not an array', () => {
  const result = insertShiftArray(array4, middleInsert);
  expect(result).toBe(null)
 });
});


/* change array in place 
for each element at index array.length/2 and past incease index by one
array[array.length/2 -1] = middleInsert?
*/
