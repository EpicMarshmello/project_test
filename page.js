//variable declare
{
  var questionShowing = 1;
  var boxx;
  var textZa;
  var startBox;
  var questionText;
  var choiceA;
  var choiceB;
  var choiceC;
  var backBtn;
  var ansSelected = [];
  var startBtn;
  var correctAns = [
    "1choA",
    "2choB",
    "3choA",
    "4choB",
    "5choB",
    "6choC",
    "7choB",
    "8choA",
    "9choB",
    "10choA",
  ];
}

var questionArray = [
  { ass: "you suck" },
  {
    questionNo: 1,
    question: " This is question number 1111111111?",
    ansA: "Answer A : correct",
    ansB: "Answer B : incorrect",
    ansC: "Answer C : incorrect",
  },
  {
    questionNo: 2,
    question: " This is question number 2222222222?",
    ansA: "Answer A : incorrect",
    ansB: "Answer B : correct",
    ansC: "Answer C : incorrect",
  },
  {
    questionNo: 3,
    question: " This is question number 3333333333?",
    ansA: "Answer A : correct",
    ansB: "Answer B : incorrect",
    ansC: "Answer C : incorrect",
  },
  {
    questionNo: 4,
    question: " This is question number 4444444444?",
    ansA: "Answer A : incorrect",
    ansB: "Answer B : correct",
    ansC: "Answer C : incorrect",
  },
  {
    questionNo: 5,
    question: " This is question number 5555555555?",
    ansA: "Answer A : incorrect",
    ansB: "Answer B : correct",
    ansC: "Answer C : incorrect",
  },
  {
    questionNo: 6,
    question: " This is question number 6666666666?",
    ansA: "Answer A : incorrect",
    ansB: "Answer B : incorrect",
    ansC: "Answer C : correct",
  },
  {
    questionNo: 7,
    question: " This is question number 7777777777?",
    ansA: "Answer A : incorrect",
    ansB: "Answer B : correct",
    ansC: "Answer C : incorrect",
  },
  {
    questionNo: 8,
    question: " This is question number 8888888888?",
    ansA: "Answer A : correct",
    ansB: "Answer B : incorrect",
    ansC: "Answer C : incorrect",
  },
  {
    questionNo: 9,
    question: " This is question number 9999999999?",
    ansA: "Answer A : incorrect",
    ansB: "Answer B : correct",
    ansC: "Answer C : incorrect",
  },
  {
    questionNo: 10,
    question: " This is question number 10 10 10 10 10?",
    ansA: "Answer A : correct",
    ansB: "Answer B : incorrect",
    ansC: "Answer C : incorrect",
  },
];

window.onload = function () {
  startBtn = document.getElementById("myBtn");
  startBtn.setAttribute("onclick", "startQuiz()");
  console.log("JS loaded");
};

function caller() {
  questionText = document.getElementById("question");
  choiceA = document.getElementById("choA");
  choiceB = document.getElementById("choB");
  choiceC = document.getElementById("choC");
  backBtn = document.getElementById("backz");
  textZa = document.getElementById("textZa");
}

function changeChoice() {
  questionText.innerHTML = questionArray[questionShowing].question;
  choiceA.innerHTML = questionArray[questionShowing].ansA;
  choiceB.innerHTML = questionArray[questionShowing].ansB;
  choiceC.innerHTML = questionArray[questionShowing].ansC;
}

function startQuiz() {
  boxx = document.getElementById("surveyBox");
  startBox = document.getElementById("surveyStart");
  startBox.style.display = "none";
  boxx.style.display = "flex";
  caller();

  choiceA.setAttribute("onclick", "nextQuestion(this.id)");
  choiceB.setAttribute("onclick", "nextQuestion(this.id)");
  choiceC.setAttribute("onclick", "nextQuestion(this.id)");
  backBtn.style.display = "none";

  changeChoice();
}

function nextQuestion(selected) {
  ansSelected.push(questionShowing + selected);
  if (questionShowing < 10) {
    questionShowing++;
    changeChoice();
    if (questionShowing == 2) {
      backBtn.style.display = "inline-block";
    }
  } else {
    quizFin();
  }
}

function backQuestion() {
  ansSelected.pop();
  questionShowing--;
  changeChoice();
  console.log("question " + (questionShowing + 1) + " showing");
  if (questionShowing == 1) {
    backBtn.style.display = "none";
  }
}

function quizFin() {
  boxx.style.display = "none";
  startBox.style.display = "flex";
  var calScore = ansCheck();
  textZa.innerHTML = "Your scores is " + calScore + " .";
  startBtn.innerHTML = "Try again";
  startBtn.setAttribute("onclick", "restartX()");
}

function ansCheck() {
  var score = 0;
  for (let runner = 0; runner < ansSelected.length; runner++) {
    if (ansSelected[runner] == correctAns[runner]) {
      score++;
    }
  }
  return score;
}

function restartX() {
  startBox.style.display = "none";
  boxx.style.display = "flex";
  questionShowing = 1;
  ansSelected = [];
  backBtn.style.display = "none";
  
  changeChoice();
}
