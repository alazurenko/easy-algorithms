/*
array should be sorted out before you want to implement binarySearch

@values array
@target value of searching element
@start start index
@end end index

returns index of @target element withing @values array
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

module.exports = binarySearch;
