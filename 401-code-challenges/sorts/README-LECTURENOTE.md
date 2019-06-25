
# INSERTION SORT ALGORITHM! LECTURE NOTES

## Objectives

- #### understand what an insertion sort is 
- #### get a basic grasp of how this shit works
- #### the big O of this bad boy
  
### What is an Insertion Sort?
  
  - An in place commparision-based sorting algorithm where a sub-list is maintained in a sorted state. The element being inserted finds its place in the sorted sublist and then it carries on its merry way to the next until everyone has a happy little home. 

### How does this S(*#) work?

  - The array is searched sequentially and unsorted items are moved and sorted into the sorted sub list!

  - We take an unsorted array [2, 5, 3, 1, 4]
  - We compare the first two elements (the 2 and the 5). They are in order already so the 2 is now in the "sub-list"
  - We then look at the 5 and the 3. OH SNAP!!! you don't belong there 5. It then swaps the 5 with the 3. It also checks the already sorted bit and decides it likes the 3 living right where it is all happy and in sequential order. Miss Arr looks like this now [2, 3, 5, 1, 4]
  - next up we take a looksy at the 5 and the 1. WHAT THE HELL YOU DOING LIVING THERE ONE!?!?!?!?!
  - we tell it to get in its home so 5 and one swap [2, 3, 1, 5, 4]
  -but its still not in its home! 3 and 1 aren't sorted...they chhaaaaange places [2, 1, 3, 5, 4]
  -GHA I SAID GET IN YOUR HOME LITTLE 1, we do it again [1, 2, 3, 5, 4]
  -at this point i hope you get the picture and 4 swapped with the 5 and life is in order finally. 

### STEPS 

  - Step 1 − If it is the first element, it is already sorted. return 1;
  - Step 2 − Pick next element
  - Step 3 − Compare with all elements in the sorted sub-list
  - Step 4 − Shift all the elements in the sorted sub-list that is greater than the value to be sorted
  - Step 5 − Insert the value
  - Step 6 − Repeat until list is sorted

### SOME PSEUDO STUFFS!!

  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp

# RESOURCES SO YOU CAN LEARN WHAT IS UP SCRUBaDoodleDoo! :D
- read

[reading of knowledge 1](https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5)

[reading of knowledge 2](https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c)

- watch 

[magic moving pictures](https://www.youtube.com/watch?v=uIUnaiVJySM)

