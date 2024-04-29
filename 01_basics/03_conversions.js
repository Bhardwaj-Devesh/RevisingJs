let score = true;

// console.log(typeof(score));

let num = Number(score);
// console.log(num);
// console.log(typeof(num));


/*
    ------------ Understand the conversion to number -------------------
    String to number
    -> We can convert the string into number just by put '+' (addition symbol) at prefix of the string
       or we put '-' (minus symbol) all but not multiplication or division.
    -> We can also convert to number through a function parseInt("")

    when we are trying to convert into numbers
    if datatype is undefined we will get -> NaN (not a number ) but typeof will be number
    null -> 0 typeof-> number
    "Devesh" -> NaN , typeof-> number
    "88"-> 88 , typeof -> number
    "44ad"-> NaN, typeof -> number
    true -> 1 , typeof -> number and similarly false -> 0 ,typeof-> number
    
    number to string
    -> just add empty string in prefix or postfix it will convert everything in string
    
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