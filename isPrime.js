'use strict'

/**
 * Counts amount of prime numbers in a given range
 * 
 * @param start Number - Start range 
 * @param end Number - End range
 * @returns Numer - Amount of Prime numbers
 */
function countAmountOfPrimes(start, end) {
  var counter = 0,
      acc = start;

  while(acc !== end) {
    if(isPrime(acc)) {
      counter++;
    }
    acc++;
  }

  return counter;
}

/**
 * Defines whether number is prime or not
 * 
 * @param n Number
 * @returns Boolean 
 */
function isPrime(n) {
  var divisor = 2;

  while(n > divisor) {
    if(n % divisor === 0) {
      return false;
    } else {
      divisor++;
    }
  }

  return true;
}
