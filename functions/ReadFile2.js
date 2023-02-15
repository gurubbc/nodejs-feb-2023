// This program reads the contents of the file in an asynchrous mechanism
// It will start reading the contents in the background
// The control will return immediately to the caller
// so that the caller will not be blocked
// This concept is called as FIRE & FORGET
const fs = require('fs')

let x= function(err, data) {
    if (err != 'null')
    {
        // CALL BACK METHOD where you place all your business logic
        // if your logic is based on the data, you must write that code here
        console.log(data.toString().toUpperCase())
    }
    else
        console.log("Error "+err)
}

fs.readFile('./sample.txt',x)


console.log("last line") // this line won't wait for the entire file to be read
