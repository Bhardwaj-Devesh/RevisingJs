"use strict"; // treat all the JS code as newer version

// alert("Hello") -> we are using Node.js not web browser
/*
    There are 7 Types of DataTypes in javascript
    1. number -> 2 to power 53
    NOTE: There is no other primitive data type for float or double. All kind of numbers
    are stored in number

    2. bigint

    3. string

    4. boolean => true/false

    5. null -> standalone value 
    6. undefined 
    7. symbol -> unique
    object 
*/
console.log(typeof null); // -> object 
/*  
Question is Why it is like that typeof null is object?
Answer : it is a bug in javascript and When they get to know that this bug is created 
already many websites had created so they leave it as it is.
*/

console.log(typeof undefined); // -> undefined 
console.log(typeof "devesh"); // string
console.log(typeof 1); // number
console.log(typeof true); // boolean

