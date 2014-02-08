/* jshint unused:false */

function square(a){
  'use strict';
  return a * a;
}

function sumSquare(nums){
  'use strict';
  var sum  = _.reduce(nums, function(accumulator ,num){
    return accumulator + square(num);
  }, 0);
  return sum;
}

