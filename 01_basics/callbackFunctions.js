
function clickEventListener(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click",()=>{
        console.log("button clicked", ++count);
    });
    console.log("Executed");
}

clickEventListener();
/*
    concepts learned Here 
    1. Event listener will register with a event on a function so when the event will execute 
    callback function of addEventListerner will run
    2. Because of that event listerner are heavy they takes lots of memory as they can form a clouser they also hold those 
    value with them 
    3. It is a good practice that if the event is not using the remove the event Listerner and the memory should be 
    collected by garbage collector
    
*/