// function city_country (city:string,country:string ):string {
//     return `${city},${country}`
// }
// console.log(city_country("karachi","pakistan"));
// console.log(city_country("tokyo","japan"));
// console.log(city_country("istanbol","turkey"));
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
