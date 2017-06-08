describe('Bubble Sort', function() {

  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  })

  it('handles an empty array', function() {
    expect( bubbleSort([]) ).toEqual( [] );
  })

  it('handles an array of length one', function() {
    expect( bubbleSort([4]) ).toEqual( [4] );
    expect( bubbleSort([6]) ).toEqual( [6] );
    //expect( bubbleSort( [6] ).calls.count() ).toEqual(0);
  })
  it('handles an array of multiple items', function() {
    expect( bubbleSort( [5,2] ) ).toEqual( [2,5] );
    expect( bubbleSort( [7,2,8] ) ).toEqual( [2,7,8] );
    //expect( bubbleSort( [7,2,8] ).calls.count() ).toEqual(1);
    expect( bubbleSort( [6,7,8] )).toEqual( [6,7,8] );
    //expect( bubbleSort( [6,7,8] ).calls.count() ).toEqual(0);
    expect( bubbleSort( [9,8,7,6,5] )).toEqual( [5,6,7,8,9] );
    //expect( bubbleSort( [9,8,7,6,5] ).calls.count() ).toEqual(120);
    expect( bubbleSort( [3,2,4,4,6,7,9,8,4,1,243,44] )).toEqual( [1,2,3,4,4,4,6,7,8,9,44,243])
  })
  it('calls the correct number of times', function() {
    bubbleSort( [7,2,8] );
    expect( swap.calls.count() ).toEqual(1);
    bubbleSort( [9,8,7,6,5] );
    expect( swap.calls.count() ).toEqual(11);
  })
})
