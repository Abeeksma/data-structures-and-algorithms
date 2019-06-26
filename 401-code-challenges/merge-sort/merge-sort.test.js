'use strict';

let mergeSort = require('./merge-sort');

let testArr1 = [];
let testArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let testArr3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let testArr4 = [10, 3, 2, 6, 4, 5, 8, 7, 9, 1];
let testArr5 = [10, 1, 9, 3, 8, 4, 7, 5, 5, 5];

describe('the merge sort', () => {
  
  it('can sort and empty arr', () => {
    expect(mergeSort(testArr1)).toEqual([]);
  });

  it('can sort an inorder arr', () => {
    expect(mergeSort(testArr2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('can sort a reversed inorder arr', () => {
    expect(mergeSort(testArr3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('can sort an unsorted arr', () => {
    expect(mergeSort(testArr4)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('can sort an arr with duplicate numbers held within', () => {
    expect(mergeSort(testArr5)).toEqual([1, 3, 4, 5, 5, 5, 7, 8, 9, 10]);
  });

});