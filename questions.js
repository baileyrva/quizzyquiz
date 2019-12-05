const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let time = 30;

let questions = [
  {
    question: "What does HTML stand for?",
    choice1: "Hypertext Markup Language",
    choice2: "Hyperspace Mark Leia",
    choice3: "Hyperactive Main Line",
    choice4: "How To Mush Life",
    answer: 1
  },
  {
    question: "What does the top of every HTML page start with?",
    choice1: "<DOCTYPE! html>",
    choice2: "<!DOCTYPE html>",
    choice3: "!DOCTYPE html",
    choice4: "DOCTYPE html!",
    answer: 2
  },
  {
    question: "What is a really handy snippet?",
    choice1: "Cut and Paste keyboard shortcuts",
    choice2: "An application that allows users to screenshare",
    choice3: "A screenshot software",
    choice4: "getid: types out entire syntax of getElementById",
    answer: 4
  },
  {
    question: "What is the main source-code editor used in Bootcamp?",
    choice1: "Git Bash",
    choice2: "Linux",
    choice3: "intelliJ",
    choice4: "VS Code",
    answer: 4
  },
  {
    question: "Which is the correct list of the Git Suite?",
    choice1: "Git Bash, Git Hub, Git Pages, Git Lab",
    choice2: "Git Slack, Git Hip, Git Pages, Git Lab",
    choice3: "Git Word, Git Excel, Git PowerPoint",
    choice4: "Git Pages, Git Drive, Git Sheets, Git Docs",
    answer: 1
  }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score);
    localStorage.setItem('mostRecentTime', time);
    return window.location.assign("end.html");
  }
  questionCounter++;
  questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    let selectedChoice = e.target;
    let selectedAnswer = selectedChoice.dataset["number"];

    let classToApply = "incorrect";
    if (selectedAnswer == currentQuestion.answer) {
      classToApply = "correct";
    }

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    if(classToApply === "incorrect") {
        scorePenalty(); 
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

decrementTime = () => {
  time = time - 1;
  if (time < 30) {
    timer.innerHTML = time;
  }
  if (time < 1) {
    return window.location.assign("/index.html");  
  }
}
update = setInterval("decrementTime()", 1000)

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

scorePenalty = () => {
    time = time - 3; 
}

startGame();
