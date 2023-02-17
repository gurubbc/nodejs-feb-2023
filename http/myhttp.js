var http=require('http')

var myLogic=function(req,res)
{
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<body bgcolor='red'>")
    res.write("<h1>Welcome World</h1></body>")
}

var server=http.createServer().listen(9000)
server.on('request',myLogic) // mapping method
console.log("Server started on port 9000")