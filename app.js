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
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //tuple
// } = {
//   name: "Max",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// giving up all tsc benefits with any
var favoriteActivities;
favoriteActivities = ["Sports", 1];
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
// console.log(person);
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }
// union types
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
