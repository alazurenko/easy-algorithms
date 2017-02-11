'use strict'

/**
 * Buble sort, complexity O(n^2)
 * 
 * https://en.wikipedia.org/wiki/Bubble_sort
 * 
 * @param values Number[] - Array of numbers to search
 * @returns Number[] 
 */
function bubleSort(values) {
  
  var array = values.slice(),
      length = array.length - 1;

  do {
    var swapped = false;
    for(var i = 0; i < length; ++i) {
      if(array[i] > array[i+1]) {
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swapped = true;
      }
    }
  }
  while(swapped == true)

  return array;
};
