/**Returns an array following the fibonacci sequence to the given
 * length
 * @param {number} length - the length of the fibonacci sequence
 * @returns {Array} An array of numbers representing the fibonacci sequence or null.
*/
function getFibonnaciSequence( length ){
  // only accept numbers
  if( typeof length != "number"){
    return null;
  }

  // do not allow NaN
  if ( isNaN(length) ) return null;

  // only accept numbers greater or equal to 1
  if( length < 1 ){
    return null;
  }

  // ensure length is a whole number
  length = Math.round( length );

  // outlier input of 1
  let sequence = [ 0 ];
  if( length == 1 ) return sequence;

  // outlier input of 2
  sequence.push( 1 );
  if( length == 2 ) return sequence;

  // for all values greater than 2
  while( sequence.length < length ){
    // calculate next number, last two entries
    let next_number = sequence[sequence.length - 1] +
    sequence[ sequence.length - 2 ];
    // add next number to sequence
    sequence.push( next_number );
  }

  return sequence;
}

/**Returns the factorial of the number given as the input or null
 * if invalid input is given
 * @param {number} number - the input whose factorial is desired,
 * should be a non-negative integer.
 * @returns {number|null} the factorial of the input or null if
 * invalid.
 */
function getFactorial( number ){
  // ensure it if of type number and not NaN
  if( typeof number != "number" || isNaN(number) ) return null;

  // ensure the number is non-negative
  if( number < 0 ) return null;

  // ensure it has no floating point
  number = Math.floor( number );

  // get factorial for the given number
  let factorial = 1;
  for( let i = 2; i <= number; i++ ){
    factorial *= i;
  }

  return factorial;
}

/**Returns a boolean indicating whether the input is a prime
 * number or not. if the number given is invalid, null is 
 * returned instead.
 * @param {number} number
 * a non-negative integer.
 * @return {boolean|null}
 * a boolean value to indicate if it is prime
 * or null if the input was invalid
 */
function isPrimeNumber( number ){
  // ensure it if of type number and not NaN
  if( typeof number != "number" || isNaN(number) ) return null;

  // ensure the number is non-negative and not a float
  if(
    number <= 1 ||
    number % 1 != 0
  ) return false;

  let is_prime = true;

  // check if the number is prime
  for( let i = 2; i < number; i++ ){
    if( number % i == 0 ){
      is_prime = false;
      break;
    }
  }

  return is_prime;
}

/**Tests if the input number is a valid power of 2.
 * Big O => O(log n);
 * @param {number} num - the number to test
 * @returns {boolean}
*/
function isPowerOfTwo( num ){
  // edge case '1'
  if( num < 1 ) return false;

  while( num > 1 ){
    // check if divisible by 2
    if( num % 2 != 0 ) return false;

    // update the value of num
    num /= 2;
  }
  return true;
}

/**Tests if the input number is a valid power of 2.
 * Big O => O(1);
 * @param {number} num - the number to test
 * @returns {boolean}
*/
function isPowerOfTwoBitwise(n){
  if( n < 1 ) return false;

  return ( n & (n-1) ) === 0;
}

/**
 * Returns the value of the fibonacci sequence at the given index.
 * @param {number} n - a non-negative integer representing
 * the index of the element.
 * @returns 
 */
function recursiveFibonacci( n ){
  if( n == 0 ){
    return 0;
  }

  if( n == 1 ){
    return 1;
  }

  // can be simplified to
  // if ( n < 2 ) return n
  
  return (recursiveFibonacci( n - 1 ) + recursiveFibonacci( n - 2 ));
}

/**
 * Returns the factorial of the number given as input
 * @param {number} n - a non-negative integer
 * @returns 
 */
function recursiveFactorial( n ){
  if( n == 0 ){
    return 1;
  }

  return n * recursiveFactorial( n - 1 );
}

/**
 * Returns the index of the target within the array given or
 * -1 if it is not found
 * @param {(number|Array)} array - an array of items
 * @param {*} target - the value of the item to check for 
 * @returns 
 */
function linearSearch( array, target ){
  for( let i = 0; i < array.length; i++ ){
    if( array[i] === target ) return i
  }

  return -1;
}

/** Returns the index of the target element within a
 * sorted array, if not present returns -1.
 * @param {Array.<number>} array 
 * @param {number} target 
 * @return {number}
 */
function binarySearch(array, target) {
  
  let start = 0;
  let end = array.length - 1;

  while( start <= end ){
    // find middle element
    let root = Math.floor( start + end ) / 2;

    // check if root element is equal to target
    if( target == array[root] ) return root;

    // check if target is smaller or greater than root
    if( target < array[root] ){
      end = root - 1;
    }
    else{
      start = root + 1;
    }
  }

  return -1;
}

export {
  getFibonnaciSequence,
  getFactorial,
  isPrimeNumber,
  isPowerOfTwo,
  isPowerOfTwoBitwise,
  recursiveFibonacci,
  recursiveFactorial,
  linearSearch,
  binarySearch
}