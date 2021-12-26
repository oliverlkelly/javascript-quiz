var timerElement = document.querySelector("#time");
var answerElement = document.querySelector(".quizAnswers");
var questionElement = document.querySelector(".quizQuestion");
var timerCount = 60;
var score;
var answered;
var index = 0;

startQuiz();

function startQuiz(){
  timer();
  placeQuestion(questions[index]);
}


function placeQuestion(question) {
    questionElement.innerText = question.question;
    var correct = document.createElement("button");
    var answerTwo = document.createElement("button");
    var answerThree = document.createElement("button");
    var answerFour = document.createElement("button");
    correct.classList.add("btn");
    correct.dataset.correct = "true";
    correct.addEventListener("click", selectAnswer);
    answerTwo.classList.add("btn");
    answerTwo.addEventListener("click", selectAnswer);
    answerThree.classList.add("btn");
    answerThree.addEventListener("click", selectAnswer);
    answerFour.classList.add("btn");
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

function selectAnswer(e){
  var selected = e.target;
    if(selected.dataset.correct){
      nextQuestion();
    }
    else{
      timerCount = timerCount - 10;
    }
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
      if (timerCount <= 0) {
        clearInterval(timer);
        lose();
      }
    }, 1000);
}

function lose(){
  timerCount = 0;
  timerElement.textContent = timerCount;
  resetQuizBlock();
  questionElement.innerText = "Times Up!";
  var tryAgain = document.createElement("button");
  tryAgain.classList.add("btn");
  tryAgain.addEventListener("click", home);
  tryAgain.append("Try Again");
  answerElement.appendChild(tryAgain);
  var scores = document.createElement("button");
  scores.classList.add("btn");
  scores.addEventListener("click", viewScores);
  scores.append("View Scores");
  answerElement.appendChild(scores);
}
function home(){
  window.location = "../../index.html";
}
function viewScores(){
  window.location = "../html/scoreboard.html";
}
function nextQuestion(){
  if(index === questions.length - 1){
    clearInterval(timer);
    submitScore();
  }
  else{
    index++;
    resetQuizBlock();
    placeQuestion(questions[index]);
  }
}