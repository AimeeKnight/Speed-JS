/* global test:false, deepEqual:false, average:false, variance:false, nearHundred:false, firstLastSix:false, rotateLeft:false, sumMultiple3or5Below1k:false, sumFib:false, sumPrimeFactorsOf13195:false, mixArray:false, sortEvenOdd:false, replaceZeroMaxOddRight:false, tripleUp:false, standardDeviation:false */

'use strict';

test('average', function(){
  var result = average([1,2,3]);
  deepEqual(result, 2, 'result is 2');
});

test('variance', function(){
  var vari = variance([1,2,3]);
  deepEqual(vari, 2, 'result is 2');
});

test('standardDeviation', function(){
  var vari = standardDeviation([1,2,3,4,5]);
  deepEqual(vari, 3.1622776601683795, 'result is 3.1622776601683795');
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

test('sumFib', function(){
  var result = sumFib(10);
  deepEqual(result, 143, 'result ends with 143');
});

test('sumPrimeFactorsOf13159', function(){
  var result = sumPrimeFactorsOf13195();
  deepEqual(result, 55, 'result is 55');
});

test('mixArray', function(){
  var result = mixArray([1,3,5], [2,4,6]);
  deepEqual(result, [1,2,3,4,5,6], 'result is 1,2,3,4,5,6');
});

test('sortEvenOdd', function(){
  var result = sortEvenOdd([1,3,5,2,4,6]);
  deepEqual(result, [2,4,6,1,3,5], 'result is 2,4,6,1,3,5');
});

test('replaceZeroMaxOddRight', function(){
  var result = replaceZeroMaxOddRight([1,0,3,5,2,0,4,6]);
  deepEqual(result, [1,5,3,5,2,0,4,6], 'result is 1,5,3,5,2,4,4,6');
});

test('tripleUp', function(){
  var result = tripleUp([2,6,1,2,3,9,6]);
  deepEqual(result, [1,2,3], 'result is 1,2,3');
});
