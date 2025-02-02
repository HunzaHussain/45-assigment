/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
 write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array*/

//  Creating a variable
let apple = "apple";

// TEST EQUALITY with string
console.log("apple is equal to apple");
console.log(apple == "apple");

// TEST INEQUALITY with string
console.log("apple is not equal to apple");
console.log(apple != "apple");

// • Tests using the lower case function
let uppercaseApple= "APPLE"
// EQUAL TO
console.log("APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLocaleLowerCase() =="apple");
// NOT EQUAL TO
console.log("APPLE is  not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLocaleLowerCase() !="apple");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,and less than or equal to

// EQUAL TO
let ten=10
let twenty=20

console.log("ten is equal to twenty");
console.log(ten==twenty);

// NOT EQUAL TO
console.log("twenty is not equal to ten");
console.log(twenty != 10);

// GREATER THAN 
console.log("twenty is greater than ten");
console.log(twenty > 10);

// LESS THAN 
console.log("twenty is less than ten");
console.log(twenty < ten);


// GREATER THAN EQUAL TO 
console.log("twenty is greater than equal to ten");
console.log(twenty >= ten);

// LESS THAN EQUAL TO
console.log("twenty is less than equal to ten ");
console.log(twenty<=ten);

// • Tests using "and" and "or" operators

// USING && (AND)
console.log("twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != ten && twenty > ten);


console.log("twenty is not equal to ten and ten is greater than twenty");
console.log(twenty != ten && ten > twenty);

// USING || (OR)

console.log("twenty is greater than ten or twenty is  not equal to twenty");
console.log(twenty > ten || twenty != twenty);

console.log("twenty is less than ten or twenty is  not equal to twenty");
console.log(twenty < ten || twenty != twenty);



// • Test whether an item is in a array
let fruits = ["apple","orange","banana"]
 console.log("orange is include in my fruits array");
 console.log(fruits.includes("orange"));
 
// • Test whether an item is not in a array*/

console.log("orange is  not include in my fruits array");
console.log(!fruits.includes("orange"));