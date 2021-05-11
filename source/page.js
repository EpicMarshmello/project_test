window.onload = function () {
  var boxx = document.getElementById("surveyBox");

  for (let qwes = 1; qwes < 11; qwes++) {
    var buttza = document.createElement("button");
    buttza.setAttribute("id", "ans "+qwes);
    buttza.innerHTML = "choice "+qwes;
    boxx.appendChild(buttza);

  }

  console.log("JS loaded1");
};

