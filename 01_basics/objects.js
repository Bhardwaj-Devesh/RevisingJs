/*
    Here are few Point we need to consider in String and Objects

    1. String and all the premitive datatypes( int , boolean, null , undefined,...) are immutable
    -> Strings in JavaScript are immutable. Once a string is created, its characters cannot be changed. 
        Methods like concat, slice, and substring return new strings rather than modifying the original string.
    -> as they prevent unexpected changes to values throughout the code execution.
    -> Primitive Datatype are value based.
*/
// When you create the variable having same value then both the variable are storing same address

// if you change anything then new memory is created and assign to new variable 


// But in case of object when the new object is created new and different memory is created 

const user = {
    name : "Devesh Bhardwaj",
    age : 23
}

/*
    NOTE : We are add delete modify this const object Why?
    Answer: Because const keyword only protect us from re declaring and it can not prevents us from changing
*/
user.moblie = "9090909090"

console.log(user);
delete user.moblie
console.log(user);


// If we want to prevent the the new addition and deletion the WE should use seal method

Object.seal(user);
// But seal can not prevent modification 
// To prevent modification also then their is another method -> freeze

Object.freeze(user);

