let score = true;

// console.log(typeof(score));

let num = Number(score);
// console.log(num);
// console.log(typeof(num));


/*
    when we are trying to convert into numbers
    if datatype is undefined we will get -> NaN (not a number ) but typeof will be number
    null -> 0 typeof-> number
    "Devesh" -> NaN , typeof-> number
    "88"-> 88 , typeof -> number
    "44ad"-> NaN, typeof -> number
    true -> 1 , typeof -> number and similarly false -> 0 ,typeof-> number
*/

let value = " ";

let booleanValue= Boolean(value);

console.log(booleanValue);
console.log(typeof(booleanValue));

/*
    1->true, typeof boolean and similarly 0 -> false, typeof boolean
    NOTE: any positive and negative number is converted into true only 0 into false

    "Devesh "-> true typeof boolean
    ""-> false typeof boolean
    " " -> true typeof boolean
*/