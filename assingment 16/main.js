"use strict";
// ASSINGMENT (QUESTION 16)
let guestlists = ["Maham", "Farhana", "Manahil", "Anila"];
console.log("Great News! We found a bigger table");
// unshift
guestlists.unshift("Hammad");
// splice
guestlists.splice(Math.floor(guestlists.length / 2), 0, "wahaj");
// push
guestlists.push("Hunza");
// for each 
guestlists.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
