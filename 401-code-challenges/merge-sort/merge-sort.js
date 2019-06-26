'use strict';

// more below this commented out section

// function mergeSort(arr) {
//   let n = arr.length;
//   if(arr.length < 1){
//     return arr
//   }

//   else {
//     let mid = Math.floor(n/2);
//     let b = arr.slice(0, mid);
//     let c = arr.slice[mid, n];
  
//   mergeSort(b);
//   mergeSort(c);
//   mergeSort(b, c, arr);
//   }
//   function merge(b, c, a) {
//     i = 0; 
//     j = 0;
//     k = 0;

//     while(i<b && j < c){
//       if(b[i] <= c[j]){
//         a[k] = b[i];
//         i = i +1;
//       }
//       else{
//         a[k] === c[j];
//         j = j + 1;
//       }
//       k = k + 1;
//     }
//     if ( i === b.length) {
//      a.concat(b);
//     }
//     else {
//       a.concat(b);
//     }
//     return a; 
//   }
// }


// i tried to follow the pseudo code from codefellows to no avail
// i found other pseudo code that made more sense and followed that
// i am still awful at figureing these things out and probably wouldn't have without following someone elses pseudo code

function mergeSort(arr) {
  if(arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let arr = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  arr.concat(left.slice()).concat(right.slice());
  return arr
}





module.exports = mergeSort;
