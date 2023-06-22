/*
Given a natural number 'n,' determine if the number is prime or not.
A prime number is a natural number greater than 1 
that is not a product of two smaller natural numbers.
isPrime(5)=true(1*5 or 5*1)
isPrime(4)=false (1*4 or 2*2 or 4*1)
*/

//my solution:
function isPrime(n){
    if(n<2){
        return false;
    }
    for ( let i = 2; i<n; i++){
        for ( let j = 2; j<n; j++){
        
    if (i*j==n){
        return false;
    }
    else {
        return true;
    }
        }
    }
}
console.log(isPrime(1)) //false
console.log(isPrime(5)) //true
console.log(isPrime(4)) //false
console.log(isPrime(7)) //true
console.log(isPrime(11)) //true
console.log(isPrime(13)) //true
console.log(isPrime(19)) //true


/* Instructor's solution:
function isPrime(n){
    if(n<2){
        return false
    }
    for (let i = 2; i<n; i++){
        if(n%i===0){
            return false
        }
    }
    return true
}
*/

/* other student's solution 
Since we already know almost all numbers are divided by 2,3,5,7. 
I came up with a solution that can optimize it to O(logn):

if(input < 2){ 

    return false

    }else if(input % 2 === 0 || input % 3 === 0 || input%5 ===0 || input % 7 ===0){ 

        if( input === 2 ||input ===  3 || input === 5 ||input ===  7 ){

            return true

        } 

        return false

    }else {

        for(let i = 2; i < input; i++){

           if(i % input === 0){            

                 return false

            }

        }

        return true

    }
*/

/*yet another student's solution:
function isPrime(number) {

    let count = 0

    for (let i = 0; i <= number; i++) {

        if (number % i == 0) {

            count++

        }

    }

    if (count == 2) {

        console.log("Yes");

    }

    else {

        console.log("No");

    }

}



isPrime(13)

*/

/*Yet another student's solution:
unction IsPrime(n){
  // for(let i = 2; i < n; i += 1){
  //  if(n % i === 0){ 
  //    return false;
  //  }     
  // } if(n === 1){
  //   return false
  // }
  //    return true;
  let i = 2;
  while(i < n){
    if(n % i === 0) {
      return false
    }
    i += 1;
  }
  if(n === 1){
    return false;
  }
  return true
}


*/






 