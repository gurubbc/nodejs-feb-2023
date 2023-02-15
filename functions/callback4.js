// difficult to read
// difficult to debug
// Such structure is called as CALLBACK HELL
var counter = 0

setTimeout(
    function () {
        counter++;
        console.log("(a) counter value is ", counter)

        setTimeout(
            function () {
                counter++;
                console.log("(b) counter value is ", counter)
                setTimeout(
                    function()
                    {
                        counter++;
                        console.log("(c) counter value is ",counter)
                    },
                    3000
                )
            },
            2000
        )
    },
    1000
)