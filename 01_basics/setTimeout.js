setTimeout(`console.log("Hello world!")`,0);
// We can pass code in setTimeout But this function is depreciated 
/*
Code Run in javascript line by line as some thing come it will do it and then move to another 
line but there are few methods which make javascript asyncronus they don't get memory in callStack
There execution function is not build instancly
setTimeout is one of them 
-> when the javascript engine hit the setTimeout Line it don't goes at call stack 
-> first it goes at webApis call session
-> there is run its code 
-> then come in callback queue
-> and when the code comletes its execution the callback queue run and the methods in the queue are executed
*/