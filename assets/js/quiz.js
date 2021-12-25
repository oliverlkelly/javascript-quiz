var timerElement = document.querySelector("#time");
var answerElement = document.querySelector(".quizAnswers");
var questionElement = document.querySelector(".quizQuestion");
var timer;
var timerCount = 60;
var lost = false;
var score;

for(i=0; i<questions.length; i++){
    placeQuestion(questions[0]);
    
}


function placeQuestion(question) {
    var p = document.createElement("p");
    p.append(question.question);
    questionElement.appendChild(p);
    var correct = document.createElement("li");
    var answerTwo = document.createElement("li");
    var answerThree = document.createElement("li");
    var answerFour = document.createElement("li");
    correct.classList.add("true");
    answerTwo.classList.add("false");
    answerThree.classList.add("false");
    answerFour.classList.add("false");
    correct.append(question.answer);
    answerTwo.append(question.iAnswer1);
    answerThree.append(question.iAnswer2);
    answerFour.append(question.iAnswer3);
    answerElement.appendChild(correct);
    answerElement.appendChild(answerTwo);
    answerElement.appendChild(answerThree);
    answerElement.appendChild(answerFour);
    //to shuffle the answers source: http://jsfiddle.net/qEM8B/ 
    for (var i = answerElement.children.length; i >= 0; i--) {
        answerElement.appendChild(answerElement.children[Math.random() * i | 0]);
    }
}

function timer() {
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