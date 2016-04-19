//some miscellaneous solution

function fibbo(n) {
  if(n <= 1) {
    return n;
  } else {
    return fibbo(n - 1) + fibbo(n - 2);
  }
}

//fancy way to find GCD
function greatestCommonDivisor(a, b) {
  if(b == 0) {
    return a;
  } else {
    return greatestCommonDivisor(b, a%b);
  }
}

function lessCommonMultiplier(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}

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

//how to find missing number from an unsorted array of numbers 1 too 100
function missingNumber(arr){
  var n = arr.length+1,
  sum = 0,
  expectedSum = n * (n+1)/2;

  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  return expectedSum - sum;
}

//count all zeros in numbers in a descending order (20) => 2; (100) => 11
function countZeros(n) {
  var counter = 0;
  while(n>0) {
    counter += Math.floor(n/10);
    n = n/10;
  }
  return counter;
}

//some methods extentions for built-in objects
//this is a bad practice and done for fun :)
String.prototype.repeatify = function (n) {
  return Array.prototype.join.call({length: n+1}, this);
};


String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.substr(1);
};

Array.prototype.sum = function() {
  return this.reduce(function(sum, item) {
    return sum + item
  }, 0)
}

Array.prototype.getMax = function() {
  return Math.max.apply(null, this);
}

Array.prototype.isArray(value) {
  return value && (typeof value === 'object' && value.constructor === Array)
};

Array.prototype.isArray = function (value) {
  return Object.prototype.toString.apply(value) === '[object Array]';
};

Array.prototype.reduce = function(f, acc) {
  for(var i = 0; i < this.length; i++) {
    acc = f(acc, this[i], i, this)
  }
  return acc;
};
