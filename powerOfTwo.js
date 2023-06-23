/*
Given a positive integer 'n', 
determine if the number is a power of 2 or not.
An integer is a power of two if there exists an integer 'x'
such that 'n'===2x;

If you input 4, then return true because 2^2 = 4.

If you input any number, check if there is a number 'n' which can be multiplied by 2 that many times 'n'
to get that number.
2^8 = 256
2*2*2*2*2*2*2*2= 256
The number of repetitions of 2 is 'x'.
Repeat this multiplication of 2 with a loop.
and then have an 
if statement to check if the product equals 'n'.
Return true if it eventually equals 'n', else return false.

OR

Because we're 2^x is also divisible by 2, we can use the remainder operator.
Because any power of 2 will have a remainder of 0 in that case.

*/

//my solution:
function two(n){
    
        if (n%2==0 || n==1){
            return true;
        }
        else{
            return false;
        }
}
console.log(two(1)) //true
console.log(two(2)) //true
console.log(two(3)) //false
console.log(two(4)) //true
console.log(two(8)) //true
console.log(two(16)) //true
console.log(two(32)) //true
console.log(two(64)) //true
console.log(two(128)) //true
console.log(two(256)) //true



/*
Instructor's solution:

function isPowerOfTwo(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
            return false
        }
        n=n/2
    }
    return true
}

console.log(isPowerOfTwo(1)) //true
console.log(isPowerOfTwo(2)) //true
console.log(isPowerOfTwo(3)) //false
*/