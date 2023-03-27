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
var carousel = document.querySelector(".carousel");
var quizPage = document.querySelector(".quiz");
var question = document.querySelector(".question");
var optionOne= document.querySelector("#optionOne");
var optionTwo=document.querySelector("#optionTwo");
var optionThree=document.querySelector("#optionThree");
var optionFour=document.querySelector("#optionFour");
var rightAnswerText=document.querySelector(".right-answer");
var wrongAnswerText=document.querySelector(".wrong-answer");
var userChoice= document.querySelector(".userchoice");
var quizOver= document.querySelector(".quiz-over");
var score = document.querySelector(".score");
var submitButton = document.querySelector(".submit-score")
var highScorePage = document.querySelector(".scoreboard");
var initials= document.querySelector(".submit-initials")
var index = 0
var timerInterval 
var timeLeft = 75;
var finalScoreBoard = [];
var scoreListEl = document.querySelector(".score-list");

// The function below begins when the "Start Quiz" button is clicked. It then makes my starter page dissappear, and each quiz page with questions
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
//the correct answer value, then the text content will notify the user that they got the answer wrong.
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


// The below function occurs when the timer hits 0 or when the for loop is done iterating, as seen in the countdown function.
//When these conditions are satisfied, the last quizPage will disappear, as well as any additional text on the page. In it's place,
//the quiz over page will be on the webpage. There is a place for individuals to submit their initials, and their high score will be logged
// on the next page upon clicking the sumbit button.

function submitPage () {
    clearInterval(timerInterval);
    timeLeft;

    quizPage.setAttribute("style", "display: none;");
    rightAnswerText.setAttribute("style", "display: none;");
    wrongAnswerText.setAttribute("style", "display: none;");

    quizOver.setAttribute("style", "display:block;");
    score.textContent= "Your score: " + timeLeft;
    score.setAttribute("style", "font-size: 30px;", "color: indigo;", "text-align: center;");

    submitButton.addEventListener("click", highScores);

    }

    //This function is the event that the Submit Button on the quizOver page will trigger. 
    //It will lead the user to the last page of the quiz app where their high scores and initials will be stored using local storage.

        
        
function highScores(event) {
    event.preventDefault();
        quizOver.setAttribute("style", "display: none;");
        highScorePage.setAttribute("style", "display: block;");

        var scoreBoard = {
            initials: initials.value,
            score: timeLeft,
        };

    for (var i =0; i < finalScoreBoard.length; i++) {
        var li = document.createElement("li");
        li = finalScoreBoard[i];
        li.textContent = "User: " + scoreBoard[i].initials + "Score: " + scoreBoard[i].score
        li.setAttribute("data-index", i);
        scoreListEl.appendChild(li)

    }


    localStorage.setItem("storedScores", JSON.stringify(storedScores));
    var storedScores = JSON.parse(localStorage.getItem(finalScoreBoard))
    if (storedScores !== null) {
        finalScoreBoard = storedScores;
    }
    finalScoreBoard.push(scoreBoard)

  
}



//The below function creates the timer element of my site. It counts down from 75s and at 0s or when the for loop is done iterating,
//the function will stop. 
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