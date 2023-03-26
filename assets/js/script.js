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
var rightAnswerText=document.querySelector(".rightanswer");
var wrongAnswerText=document.querySelector(".wronganswer");
var userChoice= document.querySelector(".userchoice");
var index = 0

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
}

function buttonNavigation() {

    if (correctAnswer) {
        rightAnswerText.textContent= "Congrats! You got it right!";
        rightAnswerText.setAttribute("style", "display: block;");
        index++;
    
    
        
    } else {
        wrongAnswerText.textContent="Oops! You got it wrong!";
        wrongAnswerText.setAttribute("style", "display:block;");
        timeLeft= -10;
}
}


//The below function creates the timer element of my site. It counts down from 75s and at 0s,
//the function will stop. 
function countdown(){
    var timeLeft = 75;
    var timerInterval = setInterval (function() {
    timeLeft --;
    timer.textContent = timeLeft;

    if(timeLeft === 0) {
        clearInterval(timerInterval);
    }

    }, 1000);
    quiz();

}

// The below event listener will make the timer start when the button is clicked
startQuiz.addEventListener("click", countdown);