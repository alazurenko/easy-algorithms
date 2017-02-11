'use strict'

/**
 * Counts summ of fibbonachi numbers
 * 
 * @param n Number - Number
 * @returns Number - Summ of numbers
 */
function fibbo(n) {
  if(n <= 1) {
    return n;
  } else {
    return fibbo(n - 1) + fibbo(n - 2);
  }
}

/**
 * Finds a greates common divisor for given numbers
 * 
 * @param a Number
 * @param b Number
 * @return Number
 */
function greatestCommonDivisor(a, b) {
  if(b == 0) {
    return a;
  } else {
    return greatestCommonDivisor(b, a%b);
  }
}

/**
 * Finds a less common multiplier for given numbers
 * 
 * @param a Number
 * @param b Number
 * @return Number
 */
function lessCommonMultiplier(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}

/**
 * Removes duplicates from arr
 * 
 * @param arr Numbers[] 
 * @returns Number[]
 */
function removeDuplicates(arr) {
  var result = [],
      cache = {};

  for(var i = 0, len = arr.length; i < len; i++) {
    if(!cache[arr[i]]) {
      result.push(arr[i]);
      cache[arr[i]] = true;
    }
  }

  return result;
}

/** 
 * Counts amount of zeros in a descending order for a given numbers
 * (20) => 2; (100) => 11
 * 
 * @param n Number
 * @returns Number 
 */
function countZeros(n) {
  var counter = 0;
  while(n>0) {
    counter += Math.floor(n/10);
    n = n/10;
  }
  return counter;
}
