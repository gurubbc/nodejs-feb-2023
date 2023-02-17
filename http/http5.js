var http=require('http')
var url=require('url')

http.createServer((req,res)=>
{
    // console.log(req)
    console.log("Hostname from which this request emerged ...."+req.headers.host)
    console.log("The request url is "+req.url)
}
).listen(9123)

console.log("Server started on port no 9123")