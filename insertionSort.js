'use strict'

/** 
 * Insertion sort 1
 * 
 * https://en.wikipedia.org/wiki/Insertion_sort
 * 
 * @param arr Number[]
 * @returns Number[] 
 */
function insertionSort(arr) {
  var length = arr.length;

  for(var i = 1; i < length; ++i) {
    var temp = arr[i];
    var j = i - 1;
    for(; j>= 0 && arr[j] > temp; --j) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = temp;
  }

  return arr;
}

/**
 * Insertion sort 2
 * @param arr Number[]
 * @returns Number[] 
 */
function insertion(arr) {
  var length = arr.length;

  for(var i = 1; i < length; ++i) {
    for(var j = i; j > 0 && arr[j] < arr[j-1]; --j) {
      swap(arr, j, j-1);
    }
  }

  return arr;
}

/**
 * Swaps items in array
 * @param arr Number[] 
 * @param a Number Value 1 to swap 
 * @param b Number Value 2 to swap
 */
function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
