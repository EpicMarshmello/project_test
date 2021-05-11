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

function startQuiz() {
  var boxx = document.getElementById("surveyBox");
  for (let qwes = 1; qwes < 11; qwes++) {
    var buttza = document.createElement("button");
    buttza.setAttribute("id", "ans " + qwes);
    buttza.innerHTML = "choice " + qwes;
    boxx.appendChild(buttza);
    buttza.addEventListener("click", function () {
      console.log("Ans " + qwes + " clicked!");
    });
  }
}
