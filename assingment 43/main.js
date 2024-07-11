// function show_magicians(magicians:string[]){
//     magicians .forEach(name => console.log(name)
//     );
// }
// function make_greet(magicians:string[]){
//     return magicians.map  (name =>`The Great ${name}`)
// }
// let magicians_names =["ali","osama","asif"]
// let copy_magicians_names= magicians_names.slice()
// let copy_great_magicians=make_greet(copy_magicians_names)
// console.log("\n Original Array\n");
// show_magicians(magicians_names)
// console.log("\n Copied Array\n");
// show_magicians(copy_great_magicians)
var magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
