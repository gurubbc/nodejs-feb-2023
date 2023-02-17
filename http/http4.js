var http=require('http')
var url=require('url')

http.createServer((req,res)=>
{
    var parsedURL=url.parse(req.url,true)
    console.log(parsedURL)
}
).listen(9123)

console.log("Server started on port no 9123")