// Assingment (question 22)

/* Intentional error: if you have not received an array index error in one of your programms yet,try to make one happen.
change in index in one of your programs to produce an index error.Make sure you correct the error before closing the program.*/

let errorArray :string[]=["A","B","C","D"]
// Producing error! by accessing invalid index of array//

console.log(errorArray[5]);  ////  produce error,// Intentional error: Arrays are zero-indexed, so index 5 is out of bounds.

// Error removed
console.log(errorArray[3]);  ///// correcct ,// Correcting the error by accessing a valid index.

