//The below array holds the questions and answers that will be present in my quiz. Each question is presented
//as an object that holds various values in either a string, or an array of strings.
var questionSet = [

{
    questions: "Which DJ made the song 'Selected'? ",
    wrongAnswers: ["Boris Brejcha", "Chris Lake", "Michael Bibi"],
    correctAnswer: "Charlotte de Witte"


},

{
    questions: "Which DJ made the song 'Different Side'? ",
    wrongAnswers: ["Chris Lorenzo", "Solomun", "John Summit"],
    correctAnswer: "Michael Bibi"

},

{
    questions: "Which DJ made the song 'Redemption'? ",
    wrongAnswers: ["KAS:ST", "Paul Kalkbrenner", "Eric Prydz"],
    correctAnswer: "Boris Brejcha"
},
{
    questions: "Which DJ made the song 'Inward Visions'? ",
    wrongAnswers: ["CamelPhat", "PAWSA", "Xinobi"],
    correctAnswer: "BLOND:ISH"
},
{
    questions: "Which DJ made the song 'Salzburg'? ",
    wrongAnswers: ["Dax J", "Green Velvet", "Odd Mob"],
    correctAnswer: "Worakls"
}
]
//The below variables select elements of my html document to be dynamically used in my js. 
var startQuiz = document.querySelector(".startbutton");
var timer= document.querySelector(".time");
var firstPage =document.querySelector(".starterpage")
var carousel = document.querySelector(".carousel");
var userChoice = carousel.querySelector(".userchoice");
var quizPage = document.querySelector(".quiz");
var question = document.querySelector(".question");
var optionOne= document.querySelector("#optionOne");
var optionTwo=document.querySelector("#optionTwo");
var optionThree=document.querySelector("#optionThree");
var optionFour=document.querySelector("#optionFour");
var index = 0

function quiz() {

firstPage.setAttribute("style", "display: none;");

quizPage.setAttribute("style", "display:block;");

for ( var i = 0; i < questionSet.length; i++) {
question.textContent= questionSet[i].questions;
optionOne.textContent= questionSet[i].wrongAnswers[0];
optionTwo.textContent=questionSet[i].wrongAnswers[1];
optionThree.textContent=questionSet[i].wrongAnswers[2];
optionFour.textContent=questionSet[i].correctAnswer; 
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
startQuiz.addEventListener("click", countdown)
userChoice.addEventListener("click", quiz)
