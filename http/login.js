// Reading Query String from the request
var http = require('http')
var url = require('url')
var cnt=0
http.createServer((req, res) => {

    

    if (cnt >= 5)
    {
        
        res.write("<body bgcolor='red'>")
        res.write("You have exceeded the max attempt...start the application....")
        return
    }
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
        cnt++;
        console.log("Wrong Attempt# ",cnt)
        res.write("<body bgcolor='red'>")
        res.write("You are an invalid user...please try login again")
        res.write("<a href='http://127.0.0.1:5502/http/Login.html'>Login again </>")
    }

   

}
).listen(9123)

console.log("Server started on port no 9123")