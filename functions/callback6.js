var arr=[]

setTimeout(
    function(){
    arr.push('zomato')
    arr.push('swiggy')
    arr.push('dunzo')
    console.log("Preparing data...data is ready "+arr)

    setTimeout(function(){
        console.log("Sorting...."+arr.sort())

        setTimeout(function(){
            console.log("Reversing the array..."+arr.reverse())
        },
        3000)
    },
    2000)
},
1000
)