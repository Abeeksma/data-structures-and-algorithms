'use strict';

/*

The plan to return the first repeated word in a lengthy string of words

so first off we make a function that takes in a string
i need to turn all of the string to lowercase
split the string on spaces be able to access all the words
remove special characters (only from the end of words as i need to check for it's and such)
loop over array of my split up string 
for each word i want to hash the word
if the hashed word is in the table return the word
if not add the hashed word to the table and increment through the words
if no reapeted words return 'no words repeated' 

*/

const Hashtable = require('../hashtable/hashtable');

function reapetedWord(string){
  
  let words = string.toLowerCase().split('');
  

}

module.exports = reapetedWord;