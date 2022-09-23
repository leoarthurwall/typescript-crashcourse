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
