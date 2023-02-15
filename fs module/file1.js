const fs = require('fs');
// reading files

// var data=fs.readFileSync('./docs/blog1.txt','utf8')
// console.log(data)

// fs.readFile('./docs/blog1.txt','utf8', (err,data)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })






// fs.readFile('./docs/blog2.txt',(err,data)=>
// {
//     if (err) {
//         console.log(err);
//         console.log(typeof(err))
//         console.log(err.errno)
//         console.log(err.path)
//     }
//     else
//     {
//     console.log(data)
//     console.log(data.toString()) // type casting - converting binary into string
// }
// }

// );

// reading files
// fs.readFile('./docs/blog2.txt',(err,data)=>
// {
//     if (err) {
//         console.log(err);
//         console.log(typeof(err))
//         console.log(err.errno)
//         console.log(err.path)
//     }
//     else
//     {
//     console.log(data)
//     console.log(data.toString()) // type casting - converting binary into string
// }
// }

// );

// Writing into the file

fs.writeFileSync('./docs/blog2.txt', 'One', () => {
    console.log("The file was successfully created...")
});

// Get the file contents before the append operation
console.log(fs.readFileSync('./docs/blog2.txt', 'utf-8'))

// Append this file using fs.appendFile() method
try {
    fs.appendFileSync('./docs/blog21.txt', '\ntwo')
    console.log("File has been appendend successfully")
}
catch (err) {
    console.log("Couldn't append, because of the reason/error ", err)
}




 
// directories
// if (fs.existsSync('./assets'))
// {
//     console.log("The folder already exists....am going to remove this")
//     fs.rmdirSync('./assets')
//     console.log("Folder successfully removed")

// }
// else {
// fs.mkdir('./assets',(err)=>{
//     if (err){
//         console.log(err)
//     }
//     else {
//         console.log("Folder created successfully....")
//     }
// }

// )
// }

// deleting files
// check if the the file "deleteme.txt" exists
// if yes, delete this

// if (fs.existsSync('./docs/blog2.txt')) {
//     fs.unlink('./docs/blog2.txt',(err)=> {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log('file successfully deleted...')
//         }
//     })
// } else {
//     console.log("No such file exists....so nothing got deleted...")
// }

console.log("last line")