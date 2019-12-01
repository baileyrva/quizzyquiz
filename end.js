const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const finalTime = document.getElementById("finalTime");
const mostRecentScore = Number(localStorage.getItem("mostRecentScore"));
const mostRecentTime = Number(localStorage.getItem("mostRecentTime"));
finalTimeAndScore.innerText =  mostRecentTime + mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault(); 
}