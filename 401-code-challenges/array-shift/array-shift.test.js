'use strict'

function insertShiftArray(array, insert){
  if (!Array.isArray(array)){
    return 'I need an array to put something into'}
  else if (typeof insert !== 'number' && typeof insert !== 'string'){
    return array;
  }
    let insertedArray = [];
    let middleFinger = Math.ceil(array.length / 2);
    
    for(let i = 0; i < array.length + 1; i++) {
      if(i < middleFinger){
        insertedArray[i]  = array[i];
      }
      else if (i > middleFinger) {
        insertedArray[i] = array[i - 1];
      }
      else{ 
        insertedArray[middleFinger] = insert;
      }
    }
    return insertedArray;
};


describe('Array with value added to middle', () => {
 it('Is not an array', () => {
  let result = insertShiftArray('array', 7);
  expect(result).toBe('I need an array to put something into')
 });

 it('Does not have something to insert', () => {
   let result = insertShiftArray([1, 2, 3, 4, 5], undefined);
   expect(result).toEqual([1, 2, 3, 4, 5]);
 });

 it('Is an odd array of numbers with a number inserted inserted in the middle', () => {
  let result = insertShiftArray([4, 6, 5, 3, 5, 9, 3], 2);
  expect(result).toEqual([4, 6, 5, 3, 2, 5, 9, 3]);
 });

});
