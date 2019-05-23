'use strict'

function binarySearch(arr, key) {
  
  let start = 0;
  let end = arr.length -1; 
  let middle =  Math.floor((start + end) / 2);
  
  if(!Array.isArray(arr)){
    return null;
  }
  else if(arr.length === 1) {
    if(arr[0] === key){
      return 0;
    }
    else {return -1};
  }
  else {
    while(arr[middle] !== key && start < end) {
      if( arr[middle] < key){
        start = middle + 1;
      }
      else {
        end = middle -1
      }
      let middle = Math.floor((start + end) / 2);  
    }
    if (arr[middle] === key){
      return middle;
    }
    return -1
    }
  };


  
describe('binary search', () => {
  it('should return index of the element that matches the key from an array', () => {
    let result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
    expect(result).toEqual(6);
  });
  it('should return -1 if the key is not present in the array', () => {
    let result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
    expect(result).toBe(-1)
  });

});



/****** REMEMBER ******/

//always be checking if the middle is = key
//then check if it > or < and change my search area depending
//check if i have an array
//check if i have a key
//check if my array is empty
//check if array only has one item

/****** THE PLAN ******/

//want to find middle, check them middle and set bounds so i can get a new middle depending on if middle is higher or lower than key
//set the end and the beginning to something start = arr[0] / end = arr[arr.length -1] 
//find the middle bit start ((first item) + end (last item))/2 rounded down, this way i can keep setting a middle for different chunks of the array hopefully

// if my middle was lower than the key set end to (middle-1) and check a new middle (start + new end)/2
// if my middle was higher than the key set the start to the (middle + 1) and check a new middle (new start + end)/2
// keep checking middle and shifting until middle = key || theres one item in the array if that item !== i return -1 

//now to actually write it out in code...