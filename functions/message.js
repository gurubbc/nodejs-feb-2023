// message.js
// This exports a string data

function tellMeDate1()
{
    var today=new Date();
    // console.log("Today is ",today)
    return "Today is ",today;
}


function showDate()
{
    var today=new Date();
    // console.log("Today is ",today)
    return `Show  Today from message.js is ${today}`;
}

function sayWelcome()
{
    return "Welcome all"
}

module.exports= {tellMeDate1, sayWelcome, showDate}

