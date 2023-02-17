// A super simple nodejs program that creates a server and listens to port no 8888
// This will return "Hello World" to the browser

const http=require('http')
const myServerLogic=require('./myserverlogic')
// We have the following request listener programming running always
// This will listen for any user request
// req is the object using which we can receive the data from the browser
// res is the object using which we can send the response to the browser


http.createServer(
    myServerLogic
).listen(8888)

console.log("Server started on port no 8888")