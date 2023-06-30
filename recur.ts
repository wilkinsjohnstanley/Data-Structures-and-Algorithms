/*
This is the simplest example of recursion

*/
function foo(n: number): number {
    //Base Case
    if(n===1){
        return 1;
    }
    //Well! The recursions start coming & They don't stop coming
    return n + foo(n-1);
}
