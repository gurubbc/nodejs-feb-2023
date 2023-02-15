// This program reads the contents of the file using synchrnous method
// blocking code
// fs stands for file system module that is part of node js installation
const fs=require('fs')
var data=fs.readFileSync('./sample.txt')
console.log(data.toString()) // will wait till line # 5 completes its execution
console.log('last line') 