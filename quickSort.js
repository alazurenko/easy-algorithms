'use strict'

/**
 * Quick Sort 
 * https://en.wikipedia.org/wiki/Quicksort
 * 
 * @param arr Number[]
 * @returns Number[]
 */
function quickSort(arr) {
  if(arr.length == 0) {
    return [];
  }

  var left = [], right = [], p = arr[0];

  for(var i = 1; i < arr.length; i++) {
    if(arr[i] > p) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return quickSort(left).concat(p, quickSort(right));
}
