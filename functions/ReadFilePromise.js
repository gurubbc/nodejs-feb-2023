
const fs = require('fs/promises')

fs.readFile('./sample.txt','utf-8')
.then(data => console.log(data))
.catch(error=> console.log(error))

console.log("done")