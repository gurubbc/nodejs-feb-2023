var http=require('http')
var url=require('url')

http.createServer(
    (req,res)=> {
        
        // The complete url: http://localhost:8765/guru
        var pathName=url.parse(req.url).pathname
        pathName=pathName.replace('/','')
        if (pathName=='admin')
        {
            res.writeHead(200,{"content-type":"text/html"})
            res.write("<body bgcolor='gray'>")
            res.write("Welcome "+pathName)
            var msg="Welcome to admin module...you can create your contents here..."
            res.write(`<h1>${msg}</h1>`)
        }
        else if (pathName=='nonadmin')
        {
            res.writeHead(200,{"content-type":"text/html"})
            res.write("<body bgcolor='lightblue'>")
            var msg="Welcome to user module...you can explore our LMS portal..."
            res.write(`<h1>${msg}</h1>`)
        }
        else 
        {
            res.writeHead(404,{"content-type":"text/html"})
            res.write("<body bgcolor='red'>")
            var msg="404 Page Not Found"
            res.write(`<h1>${msg}</h1>`)
        }
       
        
     
        res.end()
    }
).listen(8765)

console.log("Server started....listening on port no 8765")