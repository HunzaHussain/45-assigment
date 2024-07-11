// ASSINGMENT (QUESTION :18)

let placetovisit:string[]=["paris","italy","london","china","australia"];

// print in original order
console.log("Original order:", placetovisit);

// Print array in alphabetical order without modify the actual list
console.log("Alphabetical order:",placetovisit.slice().sort());
// array is still  in its original order by printing it
console.log("Original order after sorting :",placetovisit);
// print array in reverse alphabetical order without changing the order of the original list
console.log("Reverse  alphabetical order:",placetovisit.slice().sort().reverse());
//  array is still in its original order by printing it again
console.log("Original order after reverse sorting",placetovisit);
// reverse the order of  list .
placetovisit.reverse();
console.log("Reverse order",placetovisit);
// reverse the order of list in again 
placetovisit.reverse();
console.log("Back to original order:",placetovisit);

// sort  array  so its stored in alphabetical order. 
console.log("Sorted in alphabetical order",placetovisit.sort());

// sort to change  array so its stored in reverse alphabetical order.
console.log("Stored in reverse alphabetical order :",placetovisit.sort().reverse());











