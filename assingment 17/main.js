// ASSINGMENT QUESTION 16 #
var guestlists = ["Maham", "Farhana", "Manahil", "Anila"];
console.log("Great News! We found a bigger table");
// ADDING MORE GUEST 
// unshift
guestlists.unshift("Hammad");
// splice
guestlists.splice(Math.floor(guestlists.length / 2), 0, "wahaj");
// push
guestlists.push("Hunza");
// for each 
guestlists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// ASSINGMENT QUESTION 17 #
var guestlist = ["Maham", "Farhana", "Manahil", "Anila"];
// print message
console.log("unfortunately!the new diner table wont arrive so we can");
// guestlist.unshift("bob","tony");
// print message update list
// console.log("update list of guest:",guestlist);
// // remove guest from the list
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    if (removeguest !== undefined) {
        console.log("sorry,".concat(removeguest, ",i cant invite you to dinner."));
    }
}
// // print a message to each of the two people still on your list ,letting them know they are still invited.
guestlist.forEach(function (guest) {
    console.log("Dear".concat(guest, ",you are still invited to dinner."));
});
// remove two name from the list
guestlist.splice(0, guestlist.length);
//  print updatelyepmty list
console.log("update list of emptyguest:", guestlist); //// show as empty list 
