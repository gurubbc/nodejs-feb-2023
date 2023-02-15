let add=function(a,b)
{
   
    return parseInt(a)+parseInt(b)
}

let sub=function(a,b)
{
   
    return parseInt(a)-parseInt(b)
}

// routing 
let calc=function(a,b,callback)
{
    console.log("Main Function: The data is received from the client: ",a,b)
    console.log("This is going to call the actual business logic")
    return callback(a,b)
}

// main section
console.log(calc(2,5,add)) // the client wants to call add function with data: 2 & 5

console.log(calc(2,5,sub))
