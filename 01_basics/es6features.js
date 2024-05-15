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


/*............Rest Parameters ........*/

// Rest Parameters has to put at end arguments 
// They form a array of all the rest variables  
// function sum(...nums){// -> These parameters are called Rest Parameters
//     let total = 0;
//     for(let i=0;i<nums.length;i++){
//         debugger;
//         total = total + nums[i];
//     }
//     console.log(total);
// }


let arr = [1,2,3,4 ,{
    firstName : "Devesh",
    lastName : "Bhardwaj",
    address:{
        city : "Delhi",
        pincode : 123123
    }
}]
sum(...arr);

// Javascript convert the object into string and concatinate it.

/* ..............Destructuring .......... */

const colors = ["red", "yellow", "pink", "orange", "white"];

// I want to access these elements in one line

const [a,b,c] = colors; 
const[,,,thirdColor] = colors;
// We know that behind the seen array is a object having key value pair as index : value
const {3:thirdColr} = colors;

const {firstName} = user;
const {firstName : fNmae , lastName} = user; // we can rename like this in case of object

const {address : {city : homecity}} = user;// multi destructuring

// NOTE : to see anything as a object use console.dir(object_name);

