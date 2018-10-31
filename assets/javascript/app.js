$(document).ready(function () {
    // setting variables for the function
    var count = 0;
    var time = 16;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    // Questions and answers to pull from
    var question = ["How many members are there in Migos?", "What year did Lil Wayne most recently get out of jail?","What food was the popular logo used by Odd Future?",
        "What rapper took a huge L when Drake dissed him in the song Back-To-Back?", "The term 'ice' is used quite frequently in rap today, what is it referring to?",
        "Finish the lyrics: I just want a Rolly, Rolly, Rolly with a _____", "Which one of these Rappers HAS NOT dated Amber Rose", "Which one of these rappers is often referred to for having 'drip'?"];
    var answer = ["3", "2010", "Donut", "Meek Mill", "Diamonds", "Dab of Ranch", "Kendrick Lamar", "Gunna"];
    var firstChoice = ["2", "2010", "Meatball Sub", "Pusha T", "Water", "Bad Chick", "Kanye West", "Gunna"];
    var secondChoice = ["3", "2011", "Pizza", "Miley Cyrus", "Diamonds", "Bunch of Ice", "Kendrick Lamar", "Drake"];
    var thirdChoice = ["4", "2009", "Donut", "MoneyQilo", "Fiji Water", "Dab of Ranch", "21 Savage", "A$ap Rocky"];
    var fourthChoice = ["Wait, Migos isn't a guy?", "2003", "Gummy Bear", "Meek Mill", "Literal Ice", "Bag of Money", "Wiz Khalifa", "Travis Scott"];
  
    // showing the question & choices
    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }

    // hides the question & choices
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }

    // hides counter of responses & results
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion() {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);
  
        // adds css effects to the elements
        $("#choice-holder-1").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
        $("#choice-holder-2").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
        $("#choice-holder-3").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
        $("#choice-holder-4").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
    }
    $("#choice-holder-1").on("click", checkAnswer)
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)
  
    // function to validate answers & determine with message should pop up
    function checkAnswer() {
  
        hideHolders();
  
        if ($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Correct! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Uh Oh, you messed up! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        }
  
        checkGameEnd();
    }
  
    // Determines when all the questions have been answered
    function checkGameEnd() {
        if (count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function () {
                resetResults();
                startGame();
            });
        }
    }
  
    // resets timer when going to the next question
    function resetTime() {
        time = 16;
    }
  
    // shows the user the time they have to answer the question
    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);
  
        if (time <= 0) {
            hideHolders();
            stopTime();
            $("#answer-holder").show();
            $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
            displayImage();
            unanswered++;
            count++;
            checkGameEnd();
        }
    }
  
    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if (count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }
  
    resetTime();
  
    // all the gifs that display after the answer for the question was made
    function displayImage() {
        if (count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<iframe src="https://giphy.com/embed/9Ma22CCxAaimk" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/musicchoice-migos-quavo-9Ma22CCxAaimk"></a></p>');
        }
        else if (count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<iframe src="https://giphy.com/embed/l41lZccR1oUigYeNa" width="480" height="304" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lil-wayne-make-it-rain-fat-joe-l41lZccR1oUigYeNa"></a></p>');
        }
        else if (count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<iframe src="https://giphy.com/embed/l4Ep25IjwCcICJ5yU" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/infatuation-donuts-donut-l4Ep25IjwCcICJ5yU"></a></p>');
        }
        else if (count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<iframe src="https://giphy.com/embed/l2RnB2zd7hxtNimxa" width="480" height="474" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nba-drake-awkward-l2RnB2zd7hxtNimxa"></a></p>');
        }
        else if (count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<iframe src="https://giphy.com/embed/3ohhwsUruCzuLhvjuU" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/youngboynba-gg-youngboy-3ohhwsUruCzuLhvjuU"></a></p>');
        }
        else if (count === 5) {
            $("#image-holder").show();
            $("#image-holder").html('<iframe src="https://giphy.com/embed/3oriNPnS0EydNTHruo" width="480" height="399" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/culture--dab-migos-3oriNPnS0EydNTHruo"></a></p>');
        }
        else if (count === 6) {
            $("#image-holder").show();
            $("#image-holder").html('<iframe src="https://giphy.com/embed/3o7btP17Unyoa9wHgA" width="480" height="263" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/music-video-kendrick-lamar-humble-3o7btP17Unyoa9wHgA"></a></p>');
        }
        else if (count === 7) {
            $("#image-holder").show();
            $("#image-holder").html('<iframe src="https://giphy.com/embed/2jOcXt2PhhzqUtXLdG" width="480" height="203" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/worldstar-worldstarhiphop-wshh-2jOcXt2PhhzqUtXLdG"></a></p>');
        }
    }
  
    // displaying the tallied results
    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Click Start to try again");
    }
  
    // resets the results when starting a new game
    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }
  
    // resets game to start a new one
    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }
  
    // allows the start button to work
    $(".start").on("click", function () {
        startGame();
    });
});