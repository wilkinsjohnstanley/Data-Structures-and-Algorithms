/*
Factorial of a number
Problem: Given an integer 'n', find the factorial of that integer.
It is the product of all the positive integers less than or equal to it.
*/
//correct solution:

function fact(n){
    let result = 1;  //start from 1
    for (let i=2; i<=n; i++){ //go from 2 until n. Declare that initial variable!! let i=2
        result= result*i; //multiply the result each time by the iteration of i
    }
    return result; 
}




//remember to console.log the function. If nothing is happening in the function, then this is why.
console.log(fact(4)) //24 (4*3*2*1)
console.log(fact(5)) //120 (5*4*3*2*1)


