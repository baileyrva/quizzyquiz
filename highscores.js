let highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScores.map(score => {
    console.log(score.name,score.score)
})

var topTen = ""
for (var i = 0; i < highScores.length; i++) {
    topTen += "<ul>" + highScores[i].name+ "</ul>";
    topTen += "<ul>" + highScores[i].score+ "</ul>";
}

document.getElementById("highScoresList").innerHTML = topTen;
