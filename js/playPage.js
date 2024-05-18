var questionNumber = 0; // Which question am I on?
var max; // Question number
var correct = 0; // correct answers
var incorrect = 0; // incorrect answers
next();

function next() { // go next question
    /* read json file and change questions and answers */
    $.getJSON("../src/questions.json", function(data) {
        max = data.questions.length;

        $('p').text(data.questions[questionNumber].question);
        $("#label1").text(data.questions[questionNumber].answers[0].text);
        $("#radio1").attr("value", data.questions[questionNumber].answers[0].correct);
    
        $("#label2").text(data.questions[questionNumber].answers[1].text);
        $("#radio2").attr("value", data.questions[questionNumber].answers[1].correct);
    
        $("#label3").text(data.questions[questionNumber].answers[2].text);
        $("#radio3").attr("value", data.questions[questionNumber].answers[2].correct);
    
        $("#label4").text(data.questions[questionNumber].answers[3].text);
        $("#radio4").attr("value", data.questions[questionNumber].answers[3].correct);
    
    })
}

// wait function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


$(document).ready(function() {
        $('input[name=answer]').click(function(event) {
            $('input[name=answer]').prop('disabled', true); // don't any other answer

            var labelFor = $(this).attr('id');
            setTimeout(async function() {
                if(event.target.value === "true") {
                    $('label[for=' + labelFor + ']').attr("class", "correct"); // do label color green
                    correct++;
                } else {
                    $('label[for=' + labelFor + ']').attr("class", "incorrect"); // do label color red
                    incorrect++;
                }
                questionNumber++;
                await sleep(1000);

                // reset attributes of labels and radio buttons
                $('input[name=answer]').prop('checked', false);
                $('input[name=answer]').prop('disabled', false);
                if(questionNumber < max) {
                    next();
                } else {

                    // end of game div
                    $(".container").empty();
                    var str = "</br></br><p>Correct: " + correct + "</br> Incorrect: " 
                    + incorrect + "</br></br>END OF GAME </br></br></br><a href='index.html' class='button-78'>Return Home</a>";
                    $(".container").append(str);
                }
                $('label[for=' + labelFor + ']').removeClass("correct incorrect");
            }, 1000)
        })
})