function split(wholeArray) {
  var index = Math.floor(wholeArray.length / 2);
  var firstHalf = wholeArray.slice(0, index);
  var secondHalf = wholeArray.slice(index);
  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  var newArr = [];
  while(array1.length && array2.length) {
    if(array1[0] <= array2[0]) {
      newArr.push(array1.shift());
    } else {
      newArr.push(array2.shift());
    }
  }

  if(array1.length) {
    newArr = newArr.concat(array1);
  }
  else {
    newArr = newArr.concat(array2);
  }

  return newArr;
}

function mergeSort(array) {

  if(array.length <= 1) {
    return array;
  } else {
    var splitArr = split(array);
    var arr1 = mergeSort(splitArr[0]);
    var arr2 = mergeSort(splitArr[1]);
  }

  return merge(arr1, arr2);
}
