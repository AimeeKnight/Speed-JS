/* jshint unused:false */

function average(nums){
  'use strict';
  var sum  = _.reduce(nums, function(accumulator ,num){
    return accumulator + num;
  }, 0);
  return sum / nums.length;
}

function variance(nums){
  'use strict';
  var avg = average(nums);
  var sum  = _.reduce(nums, function(accumulator, num){
    num = (num - avg) * (num - avg);
    return accumulator + num;
  }, 0);
  return sum;
}

function nearHundred(num){
  'use strict';
  var numStr = num.toString();
  var last = numStr.slice(-1);

  if (last < 10 && last >= 5){
    return true;
  }
  return false;
}

function firstLastSix(nums){
  'use strict';
  var first = nums.shift();
  var last = nums.pop();

  if (first === 6 || last === 6){
    return true;
  }
  return false;
}

function rotateLeft(nums){
  'use strict';
  var last = nums.pop();

  nums.unshift(last);
  return nums;
}

function sumMultiple3or5Below1k(){
  'use strict';
  var sum = 0;
  var range = _.range(1001);
  _.forEach(range, function(num){
    if (num % 3 === 0 || num % 5 === 0){
      sum += num;
    }
  });
  return sum;
}

function sumFib(num){
  'use strict';
  
  var fib = [0, 1];
  for (var i = 2; i <= num ; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  var total = _.reduce(fib, function(accumulator, num){
    return accumulator + num;
  }, 0);
  return total;
}

function isPrime(num){
  'use strict';
  for(var i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0){
      return false;
    }
  }
  return true;
}

function sumPrimeFactorsOf13195(){
  'use strict';
  var primes = [];
  for (var i = 0; i < 13195; i++){
    if (isPrime(i) && (13195 % i === 0)){
      primes.push(i);
    }
  }
  var ret = 0;
  _.forEach(primes, function(y){
    ret += y;
  });
  return ret;
}

function mixArray(array1, array2){
  'use strict';
  var mixedArray = [];
  for(var i = 0; i < array1.length; i++){
    mixedArray.push(array1[i]);
    mixedArray.push(array2[i]);
  }
  return mixedArray;
}

