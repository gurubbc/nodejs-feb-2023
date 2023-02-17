var http=require('http')
var url=require('url')

http.createServer(
    (req,res)=> {
        res.writeHead(200,{"content-type":"text/html"})
        // The complete url: http://localhost:8765/guru
        var pathName=url.parse(req.url).pathname
        pathName=pathName.replace('/','')
        if (pathName=='admin')
        {
            res.write("<body bgcolor='gray'>")
            res.write("Welcome "+pathName)
            var msg="Welcome to admin module...you can create your contents here..."
            res.write(`<h1>${msg}</h1>`)
        }
        else
        {
            res.write("<body bgcolor='red'>")
            var msg="Welcome to user module...you can explore our LMS portal..."
            res.write(`<h1>${msg}</h1>`)
        }
       
        
     
        res.end()
    }
).listen(8765)

console.log("Server started....listening on port no 8765")