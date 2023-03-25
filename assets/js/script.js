
//The below variables select elements of my html document to be dynamically used in my js. 
var startQuiz = document.querySelector(".startbutton");
var timer= document.querySelector(".time");
//The below array holds the questions and answers that will be present in my quiz. Each question is presented
//as an object that holds various values in either a string, or an array of strings.
var questionSet = [

{
    questionOne: "Which DJ made the song 'Selected'? ",
    wrongAnswers: ["Boris Brejcha", "Chris Lake", "Michael Bibi"],
    correctAnswer: "Charlotte de Witte"


},

{
    questionTwo: "Which DJ made the song 'Different Side'? ",
    wrongAnswers: ["Chris Lorenzo", "Solomun", "John Summit"],
    correctAnswer: "Michael Bibi"

},

{
    questionThree: "Which DJ made the song 'Redemption'? ",
    wrongAnswers: ["KAS:ST", "Paul Kalkbrenner", "Eric Prydz"],
    correctAnswer: "Boris Brejcha"
},
{
    questionFour: "Which DJ made the song 'Inward Visions'? ",
    wrongAnswers: ["CamelPhat", "PAWSA", "Xinobi"],
    correctAnswer: "BLOND:ISH"
},
{
    questionFive: "Which DJ made the song 'Salzburg'? ",
    wrongAnswers: ["Dax J", "Green Velvet", "Odd Mob"],
    correctAnswer: "Worakls"
}
]

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

}

// The below event listener will make the timer start when the button is clicked
startQuiz.addEventListener("click", countdown)