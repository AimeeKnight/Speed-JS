/* global test:false, deepEqual:false, average:false, variance:false, nearHundred:false, firstLastSix:false, rotateLeft:false, sumMultiple3or5Below1k:false, getFib:false, sumPrimeFactorsOf13195:false */

'use strict';

test('average', function(){
  var result = average([1,2,3]);
  deepEqual(result, 2, 'result is 2');
});

test('variance', function(){
  var vari = variance([1,2,3]);
  deepEqual(vari, 2, 'result is 2');
});

test('nearHundred', function(){
  var result = nearHundred(99);
  deepEqual(result, true, 'result is true');
});

test('firstLastSix', function(){
  var result = firstLastSix([1,2,6]);
  deepEqual(result, true, 'result is true');
});

test('rotateLeft', function(){
  var result = rotateLeft([1,2,6]);
  deepEqual(result, [6,1,2], 'result is 6,2,1');
});

test('sumMultiple3or5Below1k', function(){
  var result = sumMultiple3or5Below1k();
  deepEqual(result, 234168, 'result is 233168');
});

test('getFib', function(){
  var result = getFib(10);
  deepEqual(result, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], 'result ends with 34');
});

test('sumPrimeFactorsOf13159', function(){
  var result = sumPrimeFactorsOf13195();
  deepEqual(result, 55, 'result is 55');
});

