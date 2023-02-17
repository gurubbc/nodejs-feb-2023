// Reading Query String from the request
var http = require('http')
var url = require('url')

http.createServer((req, res) => {
    var urlParts = url.parse(req.url, true) // want to access query object
    //    console.log(urlParts)
    var query = urlParts.query // query object
    // console.log("Welcome..."+query.myname)
    var myName = query.myname
    var myPassword=query.mypassword
    if (myName==myPassword) {

        res.write("<body bgcolor='green'>")
        res.write("Welcome..." + myName + " you are a valid user")
    } else {
        res.write("<body bgcolor='red'>")
        res.write("You are an invalid user...please try login again")
    }

   

}
).listen(9123)

console.log("Server started on port no 9123")