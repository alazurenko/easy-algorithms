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

function insertion(arr) {
  var length = arr.length;

  for(var i = 1; i < length; ++i) {
    for(var j = i; j > 0 && arr[j] < arr[j-1]; --j) {
      swap(arr, j, j-1);
    }
  }

  return arr;
}

function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
