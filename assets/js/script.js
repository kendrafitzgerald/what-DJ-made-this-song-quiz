var startQuiz = document.querySelector(".startbutton");
var timer= document.querySelector(".time");

var timeLeft = 75;
timer.textContent = timeLeft;

function countdown(){
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