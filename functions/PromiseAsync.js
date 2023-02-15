// Now, this function returns not DATA, but returns Promise object
// The function with async keyword always returns Promise object
async function callMe()
{
    return "Guru"
}

// console.log(callMe())

// callMe()
// .then(function(data){
//     console.log(data)
// })
// We are using fat arrow function
callMe()
.then((data)=>console.log(data))