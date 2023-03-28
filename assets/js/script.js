//The below array holds the questions and answers that will be present in my quiz. Each question is presented
//as an object that holds various values in either a string, or an array of strings.
var questionSet = [

{
    questions: "Which DJ made the song 'Selected'? ",
    allAnswers: ["Boris Brejcha", "Chris Lake", "Charlotte de Witte", "Michael Bibi"],
    correctAnswer: "Charlotte de Witte"


},

{
    questions: "Which DJ made the song 'Different Side'? ",
    allAnswers: ["Chris Lorenzo","Michael Bibi", "Solomun", "John Summit"],
    correctAnswer: "Michael Bibi"

},

{
    questions: "Which DJ made the song 'Redemption'? ",
    allAnswers: ["KAS:ST", "Paul Kalkbrenner", "Eric Prydz", "Boris Brejcha"],
    correctAnswer: "Boris Brejcha"
},
{
    questions: "Which DJ made the song 'Inward Visions'? ",
    allAnswers: ["BLOND:ISH","CamelPhat", "PAWSA", "Xinobi"],
    correctAnswer: "BLOND:ISH"
},
{
    questions: "Which DJ made the song 'Salzburg'? ",
    allAnswers: ["Dax J", "Worakls", "Green Velvet", "Odd Mob"],
    correctAnswer: "Worakls"
}
]

//The below variables select elements of my html document to be dynamically used in my js. 
var startQuiz = document.querySelector(".startbutton");
var timer= document.querySelector(".time");
var firstPage =document.querySelector(".starterpage")
var quizPage = document.querySelector(".quiz");
var question = document.querySelector(".question");
var optionOne= document.querySelector("#optionOne");
var optionTwo=document.querySelector("#optionTwo");
var optionThree=document.querySelector("#optionThree");
var optionFour=document.querySelector("#optionFour");
var rightAnswerText=document.querySelector(".right-answer");
var wrongAnswerText=document.querySelector(".wrong-answer");
var quizOver= document.querySelector(".quiz-over");
var score = document.querySelector(".score");
var submitButton = document.querySelector(".submit-score")
var highScorePage = document.querySelector(".scoreboard");
var initials= document.querySelector(".submit-initials")
var takeAgain = document.querySelector(".take-again");
var clearScoreboard = document.querySelector(".clear-scoreboard");
var scoreListEl = document.querySelector(".score-list");
// The below variables are globally declared and used later in my js
var index = 0
var timerInterval 
var timeLeft = 75;
var storedScores = [];

// The function below begins when the "Start Quiz" button is clicked. It then makes my starter page disappear, and each quiz page with questions
//and answers begins to appear instead. The for loop iterates through each question/answer set. It provides the text content of each value in 
//my array to the webpage by looping through the index of each question and answer option in my questionSet. 

// The event listeners present in this function call the buttonNavigation function when any answer option is clicked. 

function quiz() {

firstPage.setAttribute("style", "display: none;");

quizPage.setAttribute("style", "display:block;");

for ( var i = 0; i < questionSet.length; i++) {

question.textContent= questionSet[index].questions;
optionOne.textContent= questionSet[index].allAnswers[0];
optionTwo.textContent=questionSet[index].allAnswers[1];
optionThree.textContent=questionSet[index].allAnswers[2];
optionFour.textContent=questionSet[index].allAnswers[3]; 

}
optionOne.addEventListener("click", buttonNavigation);
optionTwo.addEventListener("click", buttonNavigation);
optionThree.addEventListener("click", buttonNavigation);
optionFour.addEventListener("click", buttonNavigation);
}

// The following function indicates the event that will occur when an answer is chosen by the user.
// If the event target, or button that is clicked, is equal to the correct answer option of that array, then 
// text will appear on the page telling the user they got their answer right. If the event target is not 
//the correct answer value, then the text content will notify the user that they got the answer wrong. For
//each wrong answer, 10 seconds will be deducted from timeLeft. The index of questionSet will continue to 
//increment, yet if index is equal to the questionSet length then the submit page button will render and the button 
//navigation funtiona will end. This function also calls the quiz function, as both play off of one another.
function buttonNavigation(event) {

    if (event.target.textContent === questionSet[index].correctAnswer) {
        rightAnswerText.textContent= "Congrats! You got it right!";
        rightAnswerText.setAttribute("style", "display: block;");
        wrongAnswerText.setAttribute("style", "display:none;");
    
        
    } else {
        wrongAnswerText.textContent="Oops! You got it wrong!";
        wrongAnswerText.setAttribute("style", "display: block;");
        rightAnswerText.setAttribute("style", "display: none;");
        timeLeft -= 10;
    }
    index++
    if (index===questionSet.length) {
        submitPage();
        return;
    }
    quiz();
}


// The below function occurs when the timer hits 0 or when the index is equal to the questionSet length, as seen in the countdown and buttonNavigation
//functions, respectfully.
//When these conditions are satisfied, the last quizPage will disappear, as well as any additional text on the page. The timer
//interval will stop, and the value of time left will be equal to itself at time of stopping.
//The quiz over page will then be rendered on the webpage. There is a place for individuals to submit their initials, and their high score will be logged
// on the next page, and in local storage, upon clicking the sumbit button

function submitPage () {
    clearInterval(timerInterval);
    timeLeft=== timeLeft;

    quizPage.setAttribute("style", "display: none;");
    rightAnswerText.setAttribute("style", "display: none;");
    wrongAnswerText.setAttribute("style", "display: none;");

    quizOver.setAttribute("style", "display:block;");
    score.textContent= "Your score: " + timeLeft;
    score.setAttribute("style", "font-size: 30px; color: indigo; text-align: center;");

    submitButton.addEventListener("click", highScores);

    }

    //This function is the event that the Submit Button on the quizOver page will trigger. 
    //It will lead the user to the last page of the quiz app where their high scores and initials will be stored using local storage.
    //The object of scoreboard includes the values of the initials the user inputs, and their score which is equal to timeLeft.
    //The storedScores array is given the value of the un-stringified version of scoreboard, which is retrieved from local storage.
    //If there are no stored scores, then stored scores continues to be an empty array, as it was when it was globally declared.
    //StoredScores adds the values from scoreBoard to its array, and sets them in a string to later be retrieved.
    //The for loop declares that the storedScores variable will continue to increment as a list element on the page.
    //It's content will be the value of initials, attatched to the string of "User", as well as the score rendered, attatched
    //to the string of "Score". These list elements are created dynamically and appended to the document.

    function highScores(event) {
    event.preventDefault();
        quizOver.setAttribute("style", "display: none;");
        highScorePage.setAttribute("style", "display: block;");

     var scoreBoard = { 
            initials: initials.value.trim(),
            score: timeLeft,
        };

        var storedScores=JSON.parse(localStorage.getItem("scoreBoard"))
        if (storedScores === null) {
            storedScores= [];
        }
        storedScores.push(scoreBoard)

        localStorage.setItem("scoreBoard", JSON.stringify(storedScores));

    for (var i =0; i < storedScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = "User: " + storedScores[i].initials + " || " + "Score: " + storedScores[i].score
        li.setAttribute("data-index", i);
        li.setAttribute("style", "font-size: 25px; color: indigo; margin-right: 50px; list-style-type: none;")
        scoreListEl.appendChild(li)

    }
    // The below event listener states that if the clear scoreboard button is clicked, local storage and the list of scores on page will be cleared.
    clearScoreboard.addEventListener("click", function () {
        localStorage.clear();
        scoreListEl.setAttribute("style", "display: none;");
    })
    // The below event listener reloads the application when the Take Again button is clicked.
    takeAgain.addEventListener("click", function (){
        document.location.reload();
    });
}
//The below function creates the timer element of my site. It counts down from 75s and at 0s 
//the function will stop and call the submit page.
function countdown(){
    timerInterval = setInterval (function() {
    timeLeft --;
    timer.textContent = timeLeft;
    if(timeLeft === 0) {
        clearInterval(timerInterval);
        submitPage()
    }

    }, 1000);
    quiz();

}

// The below event listener will make the timer start when the button is clicked
startQuiz.addEventListener("click", countdown)