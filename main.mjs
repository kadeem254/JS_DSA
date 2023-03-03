import * as DS from "./data_structures.mjs";
import * as ALG from "./algorithms.mjs";

let values = [ 23, 0, 1, 2, 4, 5, 6, 64 ];
values.forEach(
  ( value ) => {
    console.log( `RecursiveFibonacci( ${value} ) => ${ ALG.recursiveFibonacci( value ) }` );
    return;
  }
)