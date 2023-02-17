var myServerLogic= (req,res) => {
    console.log("Received the requests....from the client....")
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<body bgcolor='green'>")
    res.write("<h1>Hello World</h1>")
    res.write("<h2>Now, this is coming from my custom module</h2></body>")
  
    res.end()
}

module.exports=myServerLogic