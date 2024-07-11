// Assingment (question 23)
//* Conditional tests. Write a series of conditional tests.
/* Print a statement describing each test and your prediction for the result of each test.
Your code should look something like this :
let car ='sabaru';
console.log("is car== 'sabaru'?I predict true.");
 console.log(car=='sabaru');
 1)look closely at your result , and make sure you understand why each line evaluates to True or False.
 2) Create at lest 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False*/
//  let five=5;
//  let ten =10;
// //  TRUE 5 evaluate results  
// // TEST 1 
// console.log("Test 1: 5 is equql to 5");
// console.log(five==5);
// // TEST 2
// console.log("Test 2: 10 is equal to 10 ");
// console.log(ten== 10);
// // TEST 3
// console.log("Test 3 : 5 is not equal to 10");
// console.log(five !== 10);
// // TEST 4
// console.log("Test 4: 10 is greater than to 5 ")
// console.log(ten > 5);
// // TEST 5
//  console.log("Test 5 : 5 is less thsan to 10");
//  console.log(5<10);
// // FALSE 5 evaluate results 
// // TEST 6 
// console.log("Test 6 : 5 is not equal to 5");
// console.log(five !==5);
// // TEST 7
// console.log("Test 7 : 10 is not equal to 10");
// console.log(ten !== 10 );
// // TEST 8 
// console.log("Test 8: 10 is equal to 5");
// console.log(ten==5);
// // TEST 9
// console.log("Test 9: 10 is less than to 5");
// console.log(ten<5);
// // TEST 10
// console.log("Test 10: 5 is greater than to 10");
// console.log(five>10);
/// TEST #1: Equality comparision (true)
var car = "subaru";
console.log("Is car == 'subaru'? I predict True");
console.log(car == "subaru"); // true 
/// TEST #2: Strict  Equality comparision (true)
console.log("Is car === 'toyota'? I predict True");
console.log(car === "subaru"); // true
/// TEST #3: inEquality comparision (false)
console.log("Is car!=`subaru`?I predict false. ");
console.log(car != "subaru"); // false 
/// TEST #4: strict inEquality comparision (false)
console.log("Is car!==`subaru`?I predict false. ");
console.log(car !== "subaru"); // false 
/// TEST #5: less than  comparision (false)
console.log("Is car<`subaru`?I predict false. ");
console.log(car < "subaru"); // false (lexicographic  comparision )
/// TEST #6:  greater than comparision (false)
console.log("Is car>`subaru`?I predict false. ");
console.log(car > "subaru"); // false (lexicographic comparision )
/// TEST #7: less than  or equal  comparision (true)
console.log("Is car<=`subaru`?I predict true ");
console.log(car <= "subaru"); // true
/// TEST 8 #: Greater than or equal comparision (true)
console.log("Is car>=`subaru`?I predict true. ");
console.log(car >= "subaru"); // true
/// TEST 9 #: Checking truthiness (true)
console.log("Is car?I predict true. ");
console.log(car); // true(non empty string is truthly)
/// TEST 10 # Checking falseness (false)
console.log("Is !car?I predict false . ");
console.log(!car); //  false (negation of a truthly value)
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
