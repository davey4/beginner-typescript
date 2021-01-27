"use strict";
// console.log("Your code goes here.....");
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
// console.log(result);
// const person: {
//   name: string;
//   age: number;
// }
var person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
};
// giving up all tsc benefits with any
var favoriteActivities;
favoriteActivities = ["Sports", 1];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
