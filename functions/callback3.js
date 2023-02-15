var myArray=['Pune','Bangalore','Chennai','Mumbai']

// Method 1
// Use anonymous function
myArray.forEach(function(x){
    console.log('The city name is ',x)
})

// Method 2:
// Use fat arrow function
myArray.forEach((x)=>console.log("The city name is ",x))