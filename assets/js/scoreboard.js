var scores = JSON.parse(localStorage.getItem("scores"));
var scoresElement = document.querySelector(".scoresTable");
var button = document.querySelector(".btn");

scores.forEach(element => {
    var score = document.createElement("li");
    score.append(element[0] + " : " + element[1]);
    scoresElement.appendChild(score);
});

button.addEventListener("click", clearScores);
function clearScores(){
    localStorage.clear();
    while (scoresElement.firstChild) {
        scoresElement.removeChild(scoresElement.firstChild);
      }
}