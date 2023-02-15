var arr=[]

var p1=new Promise(function(resolve,reject)
{
    console.log("preparing the data")
    arr=['zomato','swiggy','dunzo']
    console.log(arr)
    resolve(arr) // success case
}
)

// This is how you call promise
p1
.then(function(arr)
{
    console.log("Obtained the data from the server..am going to sort the data now")
    console.log(arr.sort())
    return arr; // you are returning the sorted data
})
.then(function(sortedArray)
{
    console.log("Obtained sorted array...going to reverse the array")
    console.log(sortedArray.reverse())
})

console.log("end of the program")