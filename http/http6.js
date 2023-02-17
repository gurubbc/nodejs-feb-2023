// Reading Query String from the request
var http=require('http')
var url=require('url')

http.createServer((req,res)=>
{
   var urlParts=url.parse(req.url,true) // want to access query object
   console.log(urlParts)

}
).listen(9123)

console.log("Server started on port no 9123")