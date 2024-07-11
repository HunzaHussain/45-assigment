// Assingment # 44 
function makesandwhich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making Sandwhich with the following items \n");
    items.forEach(function (sigleitems) { return console.log(sigleitems); });
    console.log("Now enjoy Sandwhich");
}
makesandwhich("Butter", "Bread");
makesandwhich("Chicken", "Cheese", "Egg");
makesandwhich("Tomato", "Mayo", "Chicken", "Cheese", "Egg");
