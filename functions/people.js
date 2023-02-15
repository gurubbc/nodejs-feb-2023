// Now, people.js is user defined  node  module
// Currently, it has only people array
const people=['Balaji','Vimal','Prakash','Pavithra','Sam','Guru']
const salary=[12345,67890,34552,82828,33222,5555]
console.log('from people.js ',people)
console.log('from people.js ',salary)

function greet(name)
{
    console.log("Good evening ",name)
}

// module.exports=people
module.exports={
    people,salary, greet
}