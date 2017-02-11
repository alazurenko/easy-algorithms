'use strict'

/**
 * Array should be sorted out before you want to implement binarySearch
 * Binary Search can be applied only on collection that allows random accessing (indexing)
 * 
 * https://en.wikipedia.org/wiki/Binary_search_algorithm
 * 
 * @param values Number[] - Array of value to search
 * @param target Number - Value of searching element
 * @param start Number - Start index
 * @param end Number - End index
 * @returns Number - Index of target element withing values array
 * 
 */
function binarySearch(values, target, start, end) {
  if(start > end) {
    return -1;
  }

  var middle = Math.floor((start + end) / 2);
  var value = values[middle];

  if(value > target) {
    return binarySearch(values, target, start, middle - 1)
  }

  if(value < target) {
    return binarySearch(values, target, middle + 1, end);
  }

  return middle;
}
