// Reading Query String from the request
var http = require('http')
var url = require('url')

http.createServer((req, res) => {
    var urlParts = url.parse(req.url, true) // want to access query object
    //    console.log(urlParts)
    var query = urlParts.query // query object
    // console.log("Welcome..."+query.myname)
    var myName = query.myname
    res.writeHead(200, { "content-type": "text/html" })
    if (myName == 'admin')
    {
        res.write("<body bgcolor='red'>")
        res.write("Welcome admin...you can upload videos </body>")
    }
    else
    {
        res.write("<body bgcolor='green'>")
        res.write("Welcome..." + myName + " you are an ordinary user")
    }

}
).listen(9123)

console.log("Server started on port no 9123")