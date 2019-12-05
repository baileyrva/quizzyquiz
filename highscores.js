let highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScores.map(score => {
})

var topTen = ""
for (var i = 0; i < highScores.length; i++) {
    topTen += "<ul>" + highScores[i].name + " " + ":" + " " + highScores[i].score+"</ul>";
}

document.getElementById("highScoresList").innerHTML = topTen;
