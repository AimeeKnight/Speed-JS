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

function sortEvenOdd(nums){
  'use strict';
  var evens = [];
  var odds = [];
  for(var i = 0; i < nums.length; i++){
    if (nums[i] % 2 === 0){
      evens.push(nums[i]);
    }else {
      odds.push(nums[i]);
    }
  }
  evens.sort();
  odds.sort();
  return evens.concat(odds);
}

function replaceZeroMaxOddRight(nums){
  'use strict';
  var tempArray = [];
  var firstZero, highest, temp;
  debugger;
  for (var i = 0; i <= nums.length; i++){

    if (nums[i] === 0){
      temp = i;
      firstZero = 0;

      for (var j = 1; j < nums.length - temp; j++){
        if ((nums[temp + j] !== 0) && (nums[temp + j] % 2 !== 0)){
          tempArray.push(nums[temp + j]);
        }
        if ((nums[temp + j] === 0) || (j === nums.length - temp -1) && tempArray.length > 1){
          tempArray.sort();
          highest = tempArray.pop();
          nums[temp] = highest;
          j = nums.length;
          tempArray = [];
        }
      }
    }
  }
  return nums;
}

/*
function replaceZero(array){
  'use strict';
  var r = 0;
  var index = array.length-1;

  var newArray = _.forEachRight(array, function(num){
      if(num === 0){
        array[index] = r;
        r = 0;
      }else if(num % 2 !==0 && num > r){
        r = num;
      }
      index--;
    });
  return newArray;
}
*/
