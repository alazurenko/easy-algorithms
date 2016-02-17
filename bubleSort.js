var copyArray = require('./utils/copyArray');


function bubleSort(values) {
  'use strict';
  var array = copyArray(values),
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


//O(n^2) 
