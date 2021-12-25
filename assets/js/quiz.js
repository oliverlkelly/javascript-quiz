var timerElement = document.querySelector("#time");
var answerElement = document.querySelector(".quizAnswers");
var questionElement = document.querySelector(".quizQuestion");
var timer;
var timerCount = 60;
var lost = false;
var score;

quiz();

function placeQuestion() {
    var answerOne = document.createElement("li");
    var answerTwo = document.createElement("li");
    var answerThree = document.createElement("li");
    var answerFour = document.createElement("li");
    answerOne.append("This is an Answer");
    answerTwo.append("This is another Answer");
    answerThree.append("This is an Answer");
    answerFour.append("This is an Answer");
    answerElement.appendChild(answerOne);
    answerElement.appendChild(answerTwo);
    answerElement.appendChild(answerThree);
    answerElement.appendChild(answerFour);
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