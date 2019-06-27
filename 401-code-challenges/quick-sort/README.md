## Quick sort

 - Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays. From Wikipedia

 - [step by step visualization](https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/)

## overview

 - pick a pivot element
 - 'partition' the array into 3 parts
 - 1st part has all but the pivot
 - 2nd has only the pivot
 - 3rd all greater than or equal to the pivot
 - then recursively use the quick sort algorith on the first and third parts

## pseudo!!
 - `ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp`


[video joys](https://www.youtube.com/watch?v=eqo2LxRADhU)

[another link to information](https://medium.com/@Charles_Stover/implementing-quicksort-in-javascript-8044a8e2bf39)

