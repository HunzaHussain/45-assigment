// Assingment (question 23)





//* Conditional tests. Write a series of conditional tests.
/* Print a statement describing each test and your prediction for the result of each test. 
Your code should look something like this : 
let car ='sabaru'; 
console.log("is car== 'sabaru'?I predict true.");
 console.log(car=='sabaru');
 1)look closely at your result , and make sure you understand why each line evaluates to True or False. 
 2) Create at lest 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False*/ 

/// TEST #1: Equality comparision (true)

let car :string = `subaru`

console.log("Is car == 'subaru'? I predict True");
console.log(car =="subaru");// true 

/// TEST #2: Strict  Equality comparision (true)
console.log("Is car === 'subaru'? I predict True");
console.log(car === "subaru");// true

/// TEST #3: InEquality comparision (false)
console.log("Is car!=`subaru`?I predict false. ");
console.log(car !=`subaru`)// false 


/// TEST #4: Strict inEquality comparision (false)
console.log("Is car!==`subaru`?I predict false. ");
console.log(car !==`subaru`)// false 

/// TEST #5: Less than  comparision (false)
console.log("Is car<`subaru`?I predict false. ");
console.log(car <`subaru`)// false (lexicographic  comparision )



/// TEST #6:  Greater than comparision (false)
console.log("Is car>`subaru`?I predict false. ");
console.log(car>`subaru`)// false (lexicographic comparision )


/// TEST #7: Less than  or equal  comparision (true)
console.log("Is car<=`subaru`?I predict true ");
console.log(car <=`subaru`)// true


/// TEST 8 #: Greater than or equal comparision (true)
console.log("Is car>=`subaru`?I predict true. ");
console.log(car >=`subaru`)// true

/// TEST 9 #: Checking truthiness (true)
console.log("Is car?I predict true. ");
console.log(car )// true(non empty string is truthly)

/// TEST 10 # Checking falseness (false)
console.log("Is !car?I predict false . ");
console.log(!car )//  false (negation of a truthly value)

// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.