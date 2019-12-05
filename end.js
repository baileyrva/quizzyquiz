const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecentScore = Number(localStorage.getItem("mostRecentScore"));
const mostRecentTime = Number(localStorage.getItem("mostRecentTime"));

const MAX_HIGH_SCORES = 10; 

finalTimeAndScore.innerText = mostRecentScore + mostRecentTime;
localStorage.setItem("Highscore", Number(mostRecentScore) + Number(mostRecentTime));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

localStorage.setItem("finalScore", JSON.stringify([Number(mostRecentScore) + Number(mostRecentTime)]));
finalScore = JSON.parse(Number(mostRecentScore) + Number(mostRecentTime));
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  e.preventDefault();

  const score = {
    score: finalScore,
    name: username.value
  };
  highScores.push(score);

  highScores.sort((a,b) => {
      return b.score - a.score;
  });

  highScores.splice(5);

  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.assign('/')
};
