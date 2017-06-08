describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split( [1,2,3,4,5] )).toEqual( [[1,2], [3,4,5]]);
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect( merge([1,3,5], [2,4,6])).toEqual([1,2,3,4,5,6]);
    expect( merge([2, 9, 17, 45], [1, 13, 22, 98])).toEqual([1,2,9,13,17,22,45,98]);
    expect( merge([2, 9, 17, 45], [13, 22, 98])).toEqual([2,9,13,17,22,45,98]);
    expect( merge([99], [1,2,3,4,5,6])).toEqual([1,2,3,4,5,6,99]);
  });

  it('takes in a single array and returns a sorted array', function() {
    expect( mergeSort([3,9,6,1,12,4])).toEqual([1,3,4,6,9,12]);
    expect( mergeSort([])).toEqual([]);
    expect( mergeSort([9])).toEqual([9]);
  });
});
