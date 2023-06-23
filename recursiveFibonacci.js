/*
A recursive function is a function that calls itself.
The first two numbers of the fibonacci sequence are 0 and 1.
So if 'n' is less than 2, we return 'n'. n(0)=0 and n(1)=1.
Everything else will be n-1 + n-2.
So return that.
*/
function recursiveFibonacci(n){
    if (n<2){
        return n
    }
    return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)
}
console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(6)) //8
console.log(recursiveFibonacci(11)) //89