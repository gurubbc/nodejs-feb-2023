// This function accepts any other function name as the parameter
// cb is just a parameter name
// when you call this function, you can pass any function name
function mainFunction(cb)
{
    console.log("main")
    cb()
}

// Another function
function welcome()
{
    console.log("Now the time is "+new Date())
}

// The function name can be anything
function callBackFunction()
{
    console.log("CAll back function is called")
}

// caller
// You can call one function from another function
// Method1
// mainFunction(callBackFunction) // we have achieved the call back
// mainFunction(welcome)

// Method2
// Anonymous function
// mainFunction(function(){
//     console.log("call back function....inline function")
// })

// Method 3
// Fat Arrow function
// the code size becomes even smaller
mainFunction(()=>{
    console.log("call back function ...using fat arrow techinique")
})

// mainFunction(
//     (a,b)=>
//     {
//         console.log("the sum is ",(parseInt(a)+parseInt(b)))
//     }
// )
