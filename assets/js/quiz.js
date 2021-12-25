var timerElement = document.querySelector("#time");
var answerElement = document.querySelector(".quizAnswers");
var questionElement = document.querySelector(".quizQuestion");
var timer;
var timerCount = 60;
var lost = false;
var score;
var answered;

placeQuestion(questions[0]);


function placeQuestion(question) {
    resetQuizBlock();
    questionElement.innerText = question.question;
    var correct = document.createElement("button");
    var answerTwo = document.createElement("button");
    var answerThree = document.createElement("button");
    var answerFour = document.createElement("button");
    correct.classList.add("btn");
    correct.dataset.correct = true;
    correct.addEventListener("click", selectAnswer);
    answerTwo.classList.add("btn");
    answerTwo.dataset.correct = false;
    answerTwo.addEventListener("click", selectAnswer);
    answerThree.classList.add("btn");
    answerThree.dataset.correct = false;
    answerThree.addEventListener("click", selectAnswer);
    answerFour.classList.add("btn");
    answerFour.dataset.correct = false;
    answerFour.addEventListener("click", selectAnswer);
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

function selectAnswer(selected){
    
}

function resetQuizBlock(){
    questionElement.removeChild(questionElement.firstChild);
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);
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

  function waitAnswer(){

  }