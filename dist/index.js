"use strict";
//VARIABLES
// Basic Types
let id = 5;
// console.log('ID:', id)
let firstName = 'Leo';
let isMale = true;
let x = 'hello'; // any: can be assigned anything
x = 8;
let age;
age = 30;
//ARRAYS
let ids = [1, 2, 3, 4, 5];
ids.push(8);
ids.push('eight');
console.log(ids);
let arr = [1, true, 'hello'];
// tuple - can set the type. Must be in the predifined order however
let person = [1, 'brad', true];
let people = [2, 'brad', 'dave'];
// tuple array - you can specify the varible type and order of an array of arrays
let employee;
employee = [
    [1, 'brad'],
    [2, 'John'],
    [3, 'dave'],
];
console.log(employee);
//Union - variable can hold more than one type
let pid;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
//by default Up = 0
//however you can addign Up a different number, e.g. 1
console.log(Direction1.Right);
//now right will have a value of 4 rather than the default 3
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'John'
};
