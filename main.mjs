import * as DS from "./data_structures.mjs";
import * as ALG from "./algorithms.mjs";

let values = [ 23, -25, 0, 1, 2, 4, 5, NaN ];
values.forEach(
  ( value ) => {
    console.log( `isPrime( ${value} ) => ${ ALG.isPrimeNumber( value ) }` );
    return;
  }
)