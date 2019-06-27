'use strict';


let quickSort = require('./quick-sort');

let testArr = [];
let testArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let testArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let testArr4 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let testArr5 = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
let testArr6 = [1, 2, 10, 9, 3, 4, 8, 7, 5, 6];

describe('The quick sort', () => {
  it('can not die with an empty arr', () => {
    expect(quickSort(testArr)).toEqual([]);
  });

  it('can sort an inorder arr', () => {
    expect(quickSort(testArr2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('can sort and inorder odd arr', () => {
    expect(quickSort(testArr3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  it('can sort a reversed inorder arr', () => {
    expect(quickSort(testArr4)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('can sort and arr with duplicates', () => {
    expect(quickSort(testArr5)).toEqual([1, 1, 1, 1, 1, 2, 2, 2, 2, 2]);
  });

  it('can sort a mixed up arr', () => {
    expect(quickSort(testArr6)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
})



let quickSort = require('./quick-sort');