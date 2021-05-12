window.onload = function () {
  var startBtn = document.getElementById("myBtn");
  var startaa = false;
  startBtn.addEventListener("click", function () {
    if (startaa == false) {
      startQuiz();
      startaa = true;
      console.log("Start!");
    }
  });

  console.log("JS loaded1");
};

var questionArray = [
  { ass: "you suck" },
  {
    questionNo: 1,
    question:
      " This is question number 1. Who is my favourite Japanese Music Artist?",
    ansA: "Answer A : I love Yuko Ando",
    ansB: "Answer B : I love Lefty Hand Cream",
    ansC: "Answer C : I love Secret Base",
  },
  {
    questionNo: 2,
    question: " This is question number 2. What is my favourite dessert?",
    ansA: "Answer A : I love daifuku",
    ansB: "Answer B : I love Ice-cream",
    ansC: "Answer C : I love eclair",
  },
  {
    questionNo: 3,
    question: " This is question number 3333333333333?",
    ansA: "Answer A : I love 33333333",
    ansB: "Answer B : I love 33333333",
    ansC: "Answer C : I love 33333333",
  },
  {
    questionNo: 4,
    question: " This is question number 44444444444444?",
    ansA: "Answer A : I love 4",
    ansB: "Answer B : I love 4",
    ansC: "Answer C : I love 4",
  },
  {
    questionNo: 5,
    question: " This is question number 55555555555555?",
    ansA: "Answer A : I love 55555555",
    ansB: "Answer B : I love 55555555",
    ansC: "Answer C : I love 55555555",
  },
  {
    questionNo: 6,
    question: " This is question number 6666666666666?",
    ansA: "Answer A : I love 66666666",
    ansB: "Answer B : I love 66666666",
    ansC: "Answer C : I love 66666666",
  },
  {
    questionNo: 7,
    question: " This is question number 7777777777777?",
    ansA: "Answer A : I love 77777777",
    ansB: "Answer B : I love 77777777",
    ansC: "Answer C : I love 77777777",
  },
  {
    questionNo: 8,
    question: " This is question number 88888888888888?",
    ansA: "Answer A : I love 888888888",
    ansB: "Answer B : I love 888888888",
    ansC: "Answer C : I love 888888888",
  },
  {
    questionNo: 9,
    question: " This is question number 9999999999999?",
    ansA: "Answer A : I love 99999999",
    ansB: "Answer B : I love 99999999",
    ansC: "Answer C : I love 99999999",
  },
  {
    questionNo: 10,
    question: " This is question number 10 10 10 10 10?",
    ansA: "Answer A : I love 10 10 10 10 10 10",
    ansB: "Answer B : I love 10 10 10 10 10 10",
    ansC: "Answer C : I love 10 10 10 10 10 10",
  },
];

var questionShowing = 1;
var boxx;
var startBox;
var questionText;
var choiceA;
var choiceB;
var choiceC;
var backBtn;

function caller() {
  questionText = document.getElementById("question");
  choiceA = document.getElementById("choA");
  choiceB = document.getElementById("choB");
  choiceC = document.getElementById("choC");
  backBtn = document.getElementById("backz");
}

function startQuiz() {
  boxx = document.getElementById("surveyBox");
  startBox = document.getElementById("surveyStart");
  startBox.style.display = "none";
  boxx.style.display = "flex";
  caller();

  choiceA.setAttribute("onclick", "nextQuestion()");
  choiceB.setAttribute("onclick", "nextQuestion()");
  choiceC.setAttribute("onclick", "nextQuestion()");
  backBtn.style.display = "none";

  questionText.innerHTML = questionArray[questionShowing].question;
  choiceA.innerHTML = questionArray[questionShowing].ansA;
  choiceB.innerHTML = questionArray[questionShowing].ansB;
  choiceC.innerHTML = questionArray[questionShowing].ansC;
}

function nextQuestion() {
  if (questionShowing < 10) {
    questionShowing++;
    console.log("Question " + questionShowing + " answered.");

    questionText.innerHTML = questionArray[questionShowing].question;
    choiceA.innerHTML = questionArray[questionShowing].ansA;
    choiceB.innerHTML = questionArray[questionShowing].ansB;
    choiceC.innerHTML = questionArray[questionShowing].ansC;
    if (questionShowing == 2) {
      backBtn.style.display = "inline-block";
      console.log("no no square");
    }
  } else {
    quizFin();
  }
}

function backQuestion() {
  questionShowing--;
  questionText.innerHTML = questionArray[questionShowing].question;
  choiceA.innerHTML = questionArray[questionShowing].ansA;
  choiceB.innerHTML = questionArray[questionShowing].ansB;
  choiceC.innerHTML = questionArray[questionShowing].ansC;
  console.log("question " + (questionShowing + 1) + " showing");

  if (questionShowing == 1) {
    backBtn.style.display = "none";
  }
}

function quizFin() {
  document.getElementById("quizChoice").style.display = "none";
  backBtn.style.display = "none";
  boxx.style.justifyContent = "center";
  questionText.innerHTML = "Quiz finish <br> You Suck!!!";
}
