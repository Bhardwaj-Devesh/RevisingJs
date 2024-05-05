const firstName = "Anjali";
let person = firstName; // This means that address of firstName String is assign to person 
// Now both firstName and person are pointing towards same Memory

// if we try to change the value of any variable let's say person
// -> Then new memory is created and that memory is assign to person

person = firstName + " Bhardwaj";
console.log(person);
console.log(firstName);

// IN CASES OF OBJECTS

const user1 = {
    firstName : "Devesh",
    lastName : "Bhardwaj"
}
const user2 = user1;
// This means that user1 and user2 are pointing at same memory 
// if we change the variable inside user2 then it will reflect to user1 variable also

user2.firstName = "Raghav";

console.log(user1, user2);

// But I just want to value should be copy not the address then how should I do it in object

// 1. Use of assign() function

const user3 = {};
Object.assign(user3,user1);

// Use spread operator
const user4 ={...user1};

user4.firstName = "Devesh"
console.log(user4);

// But if There is object or array inside the object the same problem will arise

const user5 = {...user1, 
    address : {
        city : "Delhi",
        pincode : "201005"
    },
    course : ["DSA", "OPPS", "DBMS"]
}

console.log(user5);

// if we use spread operator and copy the user5

const user6 = {...user5};

// only one level copy is done 
// inside object and array have same memory and hence if we try to change the value of variable
// insider the object address then that value will change in every object But both contain same object address

// This type of copying is shallow copy
/*
A shallow copy creates a new object or array and copies the references to the original elements. 
It means that if the elements are objects or arrays themselves, only the references to those objects 
or arrays are copied, not the objects or arrays themselves.
Shallow copies are easy to create and generally performant, especially for simple data structures.
However, if the original object contains nested objects or arrays, modifying the nested elements in
 the shallow copy will affect the original object, and vice versa.
*/
// to seprately create the object There is a concept called Deep copy

/*
A deep copy creates a completely new object or array with its own copy of all the elements, 
including any nested objects or arrays. This means that modifying the elements in the deep copy 
does not affect the original object, and vice versa.
Deep copies ensure that you have independent copies of all elements, but they can be more complex
 and computationally expensive, especially for deeply nested structures or large arrays/objects.
*/

const user7 = {
    subject : ["Hindi", "English", "Maths", "PCM"],
    course : user5.course,
    firstName : "Azad",
    lastName : "Bhardwaj",
    address : {
        city : "Delhi",
        pincode : 302991
    }
}
const shallowCopy = {...user7};
const deepCopy = JSON.parse(JSON.stringify(user7));

console.log(user7);
console.log(shallowCopy)
console.log(deepCopy);