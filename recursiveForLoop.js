/*
A recursive function is a function that calls itself. By itself, that's an infinite loop.
That's why you always need a base case. So, there is always, at minimum, one parameter.
That parameter is what's checked for the base case.
★Start value (int x  = 1) is what's passed into the function (recursiveFor(1)).
★The parameter is what we looo over (int x).
★The base case (x <= 10) is the stop condition of the loop.
*/
function recursiveFor(x){ //define it
    if(x <= 10){          //base case (the condition to stop the recursive loop)
        
        console.log("The recursions start coming and they don't stop coming");
        recursiveFor(x+=1); //call itself and increment each time, so the base case will be reached
    }
    
}

recursiveFor(1) //call the function with at least one parameter
