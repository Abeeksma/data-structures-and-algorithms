'use strict';

let insertionSort = require('./insertion-sort');

let testArray = [9, 2, 5, 10, 1, 3, 8, 7, 6, 4];
let testTwo = [9, 5, 1, 1, 2, 4, 4, 29];
let testThree = [100, -1, 2, 5,  0, 7, 9, -4];

describe('Insertion Sort', () => {
  it('should sort an array from least to greatest', () => {
    expect(insertionSort(testArray)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  });

  it('should still sort with duplicates', () => {
    expect(insertionSort(testTwo)).toEqual([1, 1, 2, 4, 4, 5, 9, 29]);
  });

  it('shoul sort with negative numbers', () => {
    expect(insertionSort(testThree)).toEqual([-4, -1, 0, 2, 5, 7, 9, 100])
  });
});