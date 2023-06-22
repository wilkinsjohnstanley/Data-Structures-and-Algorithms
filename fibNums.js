/*
Fibonacci sequence: Give a number 'n', find the first 'n' elements of the Fibonacci sequence.
In math, it's a sequence where each number is the num of the two previous ones.
The first two nums are 0 and 1.

fibonacci(2) = 0,1
fibonacci(3) = 0,1,1
fibonacci(7) = 0,1,1,2,3,5,8
fibonacci(12) = 0,1,1,2,3,5,8,13,21,34,55,89
*/

function fibonacci(n){
    const fib = [0,1]
   
        for(let i = 2; i < n; i++) { //If you did <=, consider not doing that. We can i to be less than n because we're comparing the two nums that preceed it, and never n and the num directly behind it 
            fib[i] = fib[i-1] + fib[i-2] //If you commented this out the result would be: Array [ 0, 1 ] no matter what input 
        }
        return fib;
}
console.log(fibonacci(0)) //Array [ 0, 1 ]
console.log(fibonacci(1)) //Array [ 0, 1 ]
console.log(fibonacci(2)) //Array [ 0, 1 ]
console.log(fibonacci(3)) //Array(3) [ 0, 1, 1 ]
console.log(fibonacci(4)) 
console.log(fibonacci(5)) 
console.log(fibonacci(6)) 
console.log(fibonacci(7)) 
console.log(fibonacci(8)) 
console.log(fibonacci(9)) 
console.log(fibonacci(10)) 

