// We are 4 kind of for loop
/*
    1. Normal
    2. for of loop
    3. for in loop
    4. for each loop
*/

/*...........for of loop.........*/
const fruits = ['Apple', "Banana", "Grapes", "Mango"];

// for(const fruit of fruits){
//     console.log(fruit);
// }
// NOTE : we can use const in for of loop because it will not redeclare the varible it will make the new variable and assign
// to it where as if we use Normal for loop then it will create we can't use const there because it is reassiging the variable

// NOTE : for of loop cann't iterate through object because objects are not iterable

const person = {
    firstName : "Devesh",
    lastName : "Bhardwaj",
    salaryPerMonth : 200000
}
/*
for(const detail of person){
    console.log(detail);
}
-> This will give the Error that objects are not iteratable

To solve this problem we will introduce for in loop
*/

// for(const key in person){
//     console.log(key);
// }

// Many people use different method of getting keys
const personKeys = Object.keys(person);
const personValues = Object.values(person);
console.log(personValues);
console.log(personKeys);// -> We get keys are array now we can use for of loop
// for(const personkey of personKeys){
//     console.log(personkey);
// }


/*.......foreach loop ..........*/

// foreach is a Method which need a callback function which it runs till the array size
// and foreach always return undefined value

fruits.forEach(element => {
    console.log(element);
});