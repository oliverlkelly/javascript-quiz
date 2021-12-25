var timerElement = document.querySelector("#time");
var timer;
var timerCount = 60;
var lost = false;
var score;

function quiz() {

}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount === 0) {
        clearInterval(timer);
        lost = true;
      }
    }, 1000);
  }