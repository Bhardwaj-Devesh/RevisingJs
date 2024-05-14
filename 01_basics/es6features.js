/*...... Here we will learn new features which are introduced in ES6 .....*/


/*.......... Default parameter .........*/

function sum (a ,b=1){
    return a+b;
}

function rollADie(numberOfSide = 6){
    return Math.floor(Math.random*numberOfSide)+1;
}

/* ............ Spread Operator ..........*/
// -> ... it works in iterable objects only 
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
const joindArray = [...arr1, ...arr2];
console.log(joindArray);


const user = {
    name : "Raghav",
    age : 23,
    address : {
        pincode: 201005
    }
}

const updatedUser = {...user, lastName : "Bhardwaj"};

console.log(updatedUser);
// NOTE : spread operator do shallow copy of objects inside the objects (only one level deep (because of new object creation))
updatedUser.name = "Devesh";
console.log(user, updatedUser);// it is changed without interfaring others but if we change the address then both the object will affect


