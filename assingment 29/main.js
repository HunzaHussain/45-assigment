/*29 . Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
var favourite_fruits = ["Bananas", "Orange", "Strawberry"];
if (favourite_fruits.includes("Bananas")) {
    console.log("You really like Bananas!");
}
if (favourite_fruits.includes("Orange")) {
    console.log("You  really like Orange!");
}
if (favourite_fruits.includes("Apple")) {
    console.log("You really like Apple!");
}
if (favourite_fruits.includes("Strawberry")) {
    console.log("You really like Strawberry!");
}
if (favourite_fruits.includes("Mango")) {
    console.log("You really like Mango!");
}
// continue with more fruits 
