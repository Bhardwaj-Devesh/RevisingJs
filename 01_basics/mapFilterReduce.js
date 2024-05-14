// map will return the new array we can alter or moify elements in the array

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