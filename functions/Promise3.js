var p=new Promise(function(resolve, reject)
{
    var no=Math.random()
    if (no < 0.5)
    {
        // treat this as a success case
        resolve(no)
    }
    else{
        // treat this as a failure case
        reject("the data generated is not less that 0.5...error "+no)
    }
}
)

// This is how the caller is going to call

p.then(function(n)
{
    console.log("Successful...the data returned ..."+n)
}
)
.catch(function(err)
{
    console.log("Failure...."+err)
})