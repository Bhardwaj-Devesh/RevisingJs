// map will return the new array we can alter or modify elements in the array

const students = [
    {
        name: "Ram",
        age : 23
    },
    {
        name: "Shyan",
        age : 17
    },
    {
        name: "Radha",
        age : 20
    },
    {
        name: "Sita",
        age : 18
    },
    {
        name: "Laxmi",
        age : 16
    },
]

const newStudents = students.map((student,index,array)=>{
    if(student.age>=18){
        student.eligableForVote = true;
    }else student.eligableForVote = false;
    return student;
})

console.log(newStudents);
console.log(students);

// here we are modifiying old array itself by adding new variable


/*.........filter use to filter out some elements from the array ....*/

const filteredStudents = students.filter((student,index,array)=>{
    if(student.age>=18) return true;
})
console.log(filteredStudents);


/* reduce : reduce is used when we want a single particular value from the iterable object like array
For Example sum, max, min, largest etc ....*/

const arr = [1,2,3,4,5];

const output = arr.reduce((accumulator,current,index,arr)=>{
    accumulator = accumulator + current;
    return accumulator; 
},0)

console.log("sum ", output);

const maxi = arr.reduce((accumulator,num,index,arr)=>{
    if(num > accumulator){
        accumulator = num;
    }
    return accumulator;
},0);
console.log("maxi : ", maxi);


// Another example
const users = [
    {firstName : "Devesh", lastName : "Bhardwaj", age : 23},
    {firstName : "Om", lastName : "Mandlik", age: 21},
    {firstName : "Ram", lastName : "Sharma", age: 25},
    {firstName : "Shyam", lastName : "Verma", age: 20},
]

const fullName = users.map((obj)=>{
    return obj.firstName + " " + obj.lastName;
})
console.log("FULL NAME :", fullName);


// find out how many age in odd digits
const count = users.reduce((accumulater,currentObject,index, array)=>{
    if(currentObject.age%2!=0) accumulater++;
    return accumulater;
},0)

console.log(count);

// output => { 21 : 2, 23 : 1 ,25: 1}
// ........ pending ......


// question first name of all the members whose age is > 21
const answer = users.filter((object,index,array)=>{
    if(object.age > 21) return object;
}).map((object,index,arr)=>{
    return object.firstName;
})
console.log(answer);

// challange is to do it with reduce 
const ans = users.reduce((accumulater, currentObject, index, array)=>{
    if(currentObject.age > 21) accumulater.push(currentObject.firstName);
    return accumulater;
},[])

console.log(ans);
