/*

5!=5*4*3*2*1         5*4!
4!=4*3*2*1           5*4!
3!=3*2*1             5*4!
2!=2*1               5*4!
1!=1*1               5*4!
0!=1                 5*4!

n!=n*(n-1)!
*/



function fact(n){
    if(n===0){
        return 1
    }
    return n*fact(n-1)
}



//remember to console.log the function. If nothing is happening in the function, then this is why.
console.log(fact(0)) //1
console.log(fact(1)) //1
console.log(fact(4)) //24 (4*3*2*1)
console.log(fact(5)) //120 (5*4*3*2*1)