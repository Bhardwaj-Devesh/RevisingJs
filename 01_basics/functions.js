
// function declaration also know as (aka) function statement
function function_name(){

}


//Expression Function

const a = function (){

}
/*
    we can also give name to expression function which can only use inside itself this type of function is called named function
*/


// Call back function -> 
/*
    jaab kisi function ko call krte time function pass krte hai 
    to jis function ko pass kiya jata hai us function ko call back function khte hai 
    or -> jis function me pass kiya ja raha hai ussee higher order function bolte hai
*/

// IMPORTANT : console.dir()-> will print the function as object like in key value pairs


/*........................Functions Vs Methods.................*/
/*
    -> Every Method is a function but Every function is not a Method;
    -> Methods are the function which are declared inside the object so we can access Those function only using the objects
*/

const object = {
    pie : 3.14,
    add : function (a ,b){
        return a+b;
    },
    // we have to store the method as a key value pair 
    // we should return the value from a function if we don't do then funciton is called but it will return undefined
    // Their is no need of name in method because we can't accces it by function name we have given

    subtract(a,b){
        return a-b;
    }
    // This is a new way to make the method
}

/* First Class funtions (first class citizen): ability to act like a value (as we can use function a parameters, arguments return)*/

// Difference between parameters and arguments
/* 
function function_name1(param1, param2){
    
}

function_name1(1,2);// arguments
*/


/* Higher order function*/
/* A function which take function as an argument or returns a function is called Higher order function */