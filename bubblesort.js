function bubbleSort(arr) {
  if (arr.length > 1) {
    for (var j = 0; j < arr.length - 1; j++) {
      for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          swap(i, arr);
        }
      }
    }
  }
  return arr;
}

function swap(index, sortingArr) {
    var first = sortingArr[index];
    sortingArr[index] = sortingArr[index + 1];
    sortingArr[index + 1] = first;
}

