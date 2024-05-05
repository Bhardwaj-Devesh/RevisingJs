
let arr = [];
arr.push(1);
arr.push(2);
arr.push("Devesh");
arr.pop();

/*
    shift() -> remove the element from starting 
    Time complexity -> O(N)
    unshift() -> add new element at starting of the array

    these shift and unshift element take more time and push and pop()
*/
console.log(arr);


const oddNumber =[];
oddNumber.push(1,3,5,7);
console.log(oddNumber);

const evenNumber = [];
evenNumber.push(2,4,6,8);
/*
    concat function is used to add arrays
*/
const newArray = oddNumber.concat(evenNumber,evenNumber);
console.log(newArray);


/*
    indexOf()
    includes()
    reverse()
    sort() -> it by default sort only in ascii order
*/

/*
    slice and splice *Important question
    slice will not change the array and splice will change the array
    slice will create new array 
*/