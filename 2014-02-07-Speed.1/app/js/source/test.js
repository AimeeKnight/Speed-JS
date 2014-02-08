/* global test:false, deepEqual:false, square:false, sumSquare:false */

'use strict';

test('square', function(){
  var result = square(2);
  deepEqual(result,  4, 'result is 4');
});

test('sumSquare', function(){
  var result = sumSquare([1,2,3]);
  deepEqual(result,  14, 'result is 14');
});

