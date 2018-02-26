$(document).ready(function(){
    var correct = 0,
        wrong = 0,
        unanswered = 0;


    console.log (myQuestions);
    // iterate through the length of the array myQuestions and create P element
    for (var i = 0; i < myQuestions.length; i++){
        var newP = $("<p class ='lead '>" + myQuestions[i].question + "</p>");
        
        $("#questions").append(newP);

        //create a box for the radio buttons
        var row = $("<div class = 'row "+myQuestions[i].name +"' </div>")
        var hairLine = $("<hr>")
        $("#questions").append(row);
        $("#questions").append(hairLine);

        for (var ai = 0; ai < myQuestions[i].answers.length; ai++){
            
            // will create div, input, and text as answers to each question
            var choice = $("<div>");
                choice.addClass ("col-sm-3 txtred");
                choice.html("<input type = 'radio' name = '"+myQuestions[i].name+"' value = '" + myQuestions[i].answers[ai] + "'/>"
                + myQuestions[i].answers[ai])
            $("."+myQuestions[i].name).append(choice);
            
        } //end of answers loop
        
    } // end of questions loop

    var answerArray = [];
    for (var i = 0; i < myQuestions.length; i++){
        answerArray[i] = "";
    };

    $("input").on("change", function(){
        // store clicked on values to the array
        answerArray[$(this).attr("name")] = $(this).val(); 
        console.log (answerArray)
    })

    var timer = myQuestions.length * 3 // total time 3 seconds for each questions

    var countdown = setInterval (function(){
        $(".countdown").html(timer);
        
        timer--;
        
        if (timer === 0) {
            clearInterval(countdown);
            $(".timer").fadeOut();
            for (var i = 0; i < myQuestions.length; i++){
                if (answerArray[i] == ""){
                    unanswered++;
                } else if (myQuestions[i].correct == answerArray[i]){
                    correct ++;
                } else {
                    wrong ++;
                };
                //pass values to the results div
                $("#correct span").text (correct);
                $("#incorrect span").text (wrong);
                $("#unanswered span").text(unanswered);
                //show screen div
                $(".screen").fadeIn();
                $(".results").addClass("animate")
            };
            console.log ("correct: "+ correct + "wrong: "+ wrong + "unanswered: " + unanswered)


        };
    }, 1000);

});
