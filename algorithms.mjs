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

export {
  getFibonnaciSequence,
  getFactorial,
  isPrimeNumber
}