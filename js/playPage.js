var questionNumber = 0; // Which question am I on?
var max; // Question number
var correct = 0; // Correct answers
var incorrect = 0; // Incorrect answers
next();

function next() {
    // Go next question
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
    });
}

// Wait function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function() {
    $('input[name=answer]').click(function(event) {
        $('input[name=answer]').prop('disabled', true); // Disable other answers

        var labelFor = $(this).attr('id');
        setTimeout(async function() {
            if(event.target.value === "true") {
                $('label[for=' + labelFor + ']').attr("class", "correct"); // Make label green
                correct++;
            } else {
                $('label[for=' + labelFor + ']').attr("class", "incorrect"); // Make label red
                incorrect++;
            }
            questionNumber++;
            await sleep(1000);

            // Reset attributes of labels and radio buttons
            $('input[name=answer]').prop('checked', false);
            $('input[name=answer]').prop('disabled', false);
            if(questionNumber < max) {
                next();
            } else {
                endGame();
            }
            $('label[for=' + labelFor + ']').removeClass("correct incorrect");
        }, 1000);
    });

    function endGame() {
        // End of game div
        $(".container").empty();
        var str = "</br></br><p>Correct: " + correct + "</br> Incorrect: " + incorrect + "</br></br>END OF GAME</br></br>";
        str += "<input type='text' id='name' placeholder='Enter your name' required />";
        str += "<button id='submit-score'>Submit Score</button>";
        str += "</br></br><a href='index.html' class='button-78'>Return Home</a>";
        $(".container").append(str);

        $('#submit-score').click(function() {
            var name = $('#name').val();
            if (name) {
                saveScore(name, correct, incorrect);
                alert("Score submitted successfully!");
                window.location.href = 'score.html';
            } else {
                alert("Please enter your name.");
            }
        });
        stopMusic();
    }

    function saveScore(name, correct, incorrect) {
        var scores = JSON.parse(localStorage.getItem('scores')) || [];
        var newScore = {
            name: name,
            correct: correct,
            incorrect: incorrect
        };
        scores.push(newScore);
        localStorage.setItem('scores', JSON.stringify(scores));
    }

    var musicAudio = new Audio(); 

    function playMusic(musicFile) {
        musicAudio.src = musicFile;
        musicAudio.loop = true; 
        var musicVolume = parseFloat(localStorage.getItem('musicVolume')) || 0.5; // Get volume from localStorage
        musicAudio.volume = musicVolume; // Set the volume
        musicAudio.play();
    }

    function stopMusic() {
        musicAudio.pause();
        musicAudio.currentTime = 0; 
    }

    var musicEnabled = localStorage.getItem('musicEnabled') === 'true';
    if (musicEnabled) {
        playMusic('../sounds/music.mp3'); 
    }

    $('#music').click(function() {
        musicEnabled = !musicEnabled;
        localStorage.setItem('musicEnabled', musicEnabled);
        if (musicEnabled) {
            playMusic('../sounds/music.mp3'); 
        } else {
            stopMusic(); 
        }
    });

    $('#playButton').click(function() {
        if (musicEnabled && !musicAudio.paused) {
            stopMusic();
        }
        window.location.href = 'playPage.html';
    });
});
