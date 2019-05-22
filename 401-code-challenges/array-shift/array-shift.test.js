'use strict'

function insertShiftArray(array, middleInsert){
  if (!Array.isArray(array)){
    return 'I need an array to put something into'}
  else if (typeof middleInsert !== 'number' && typeof middleInsert !== 'string'){
    return array;
  }
  else{
    let middleFinger = Math.ceil(arr.length/2)
    let insertedShiftedArray = []
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

