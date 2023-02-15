const fs=require('fs');

fs.readFile('../docs/blog1.txt',"utf-8")
.then(data => console.log(data))
.catch(err=>console.log(err))