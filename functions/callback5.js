setTimeout(
    function(){
        console.log("Your profile has been shortlisted")

        setTimeout(
            function(){
                console.log("Conducted the interview....")

                setTimeout(
                    function() {
                        console.log("Made an offer")
                    },
                    3000
                )
            },
            2000
        )
    },
    1000
)