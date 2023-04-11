// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function createadd( closure){
    
    return function (add){
       return   add+closure;
        
    }
   
}
let addfive=createadd(5)
console.log(addfive(10));
console.log(addfive(15));
console.log(addfive(20));
console.log(addfive(25));