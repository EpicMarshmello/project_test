/*
	Paradigm Shift by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    default: ["1681px", null],
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: ["361px", "480px"],
    xxsmall: [null, "360px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Hack: Enable IE workarounds.
  if (browser.name == "ie") $body.addClass("is-ie");

  // Mobile?
  if (browser.mobile) $body.addClass("is-mobile");

  // Scrolly.
  $(".scrolly").scrolly({
    offset: 100,
  });

  // Polyfill: Object fit.
  if (!browser.canUse("object-fit")) {
    $(".image[data-position]").each(function () {
      var $this = $(this),
        $img = $this.children("img");

      // Apply img as background.
      $this
        .css("background-image", 'url("' + $img.attr("src") + '")')
        .css("background-position", $this.data("position"))
        .css("background-size", "cover")
        .css("background-repeat", "no-repeat");

      // Hide img.
      $img.css("opacity", "0");
    });

    $(".gallery > a").each(function () {
      var $this = $(this),
        $img = $this.children("img");

      // Apply img as background.
      $this
        .css("background-image", 'url("' + $img.attr("src") + '")')
        .css("background-position", "center")
        .css("background-size", "cover")
        .css("background-repeat", "no-repeat");

      // Hide img.
      $img.css("opacity", "0");
    });
  }

  // Gallery.
  $(".gallery")
    .on("click", "a", function (event) {
      var $a = $(this),
        $gallery = $a.parents(".gallery"),
        $modal = $gallery.children(".modal"),
        $modalImg = $modal.find("img"),
        href = $a.attr("href");

      // Not an image? Bail.
      if (!href.match(/\.(jpg|gif|png|mp4)$/)) return;

      // Prevent default.
      event.preventDefault();
      event.stopPropagation();

      // Locked? Bail.
      if ($modal[0]._locked) return;

      // Lock.
      $modal[0]._locked = true;

      // Set src.
      $modalImg.attr("src", href);

      // Set visible.
      $modal.addClass("visible");

      // Focus.
      $modal.focus();

      // Delay.
      setTimeout(function () {
        // Unlock.
        $modal[0]._locked = false;
      }, 600);
    })
    .on("click", ".modal", function (event) {
      var $modal = $(this),
        $modalImg = $modal.find("img");

      // Locked? Bail.
      if ($modal[0]._locked) return;

      // Already hidden? Bail.
      if (!$modal.hasClass("visible")) return;

      // Stop propagation.
      event.stopPropagation();

      // Lock.
      $modal[0]._locked = true;

      // Clear visible, loaded.
      $modal.removeClass("loaded");

      // Delay.
      setTimeout(function () {
        $modal.removeClass("visible");

        setTimeout(function () {
          // Clear src.
          $modalImg.attr("src", "");

          // Unlock.
          $modal[0]._locked = false;

          // Focus.
          $body.focus();
        }, 475);
      }, 125);
    })
    .on("keypress", ".modal", function (event) {
      var $modal = $(this);

      // Escape? Hide modal.
      if (event.keyCode == 27) $modal.trigger("click");
    })
    .on("mouseup mousedown mousemove", ".modal", function (event) {
      // Stop propagation.
      event.stopPropagation();
    })
    .prepend(
      '<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>'
    )
    .find("img")
    .on("load", function (event) {
      var $modalImg = $(this),
        $modal = $modalImg.parents(".modal");

      setTimeout(function () {
        // No longer visible? Bail.
        if (!$modal.hasClass("visible")) return;

        // Set loaded.
        $modal.addClass("loaded");
      }, 275);
    });
})(jQuery);

//from older version
//declare variable
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
  var jojo;
  var userName;
  var userEmail;
  var userMessage;
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
  var highlighter = [
    "what",
    "choAXL",
    "choBXL",
    "choAXL",
    "choBXL",
    "choBXL",
    "choCXL",
    "choBXL",
    "choAXL",
    "choBXL",
    "choAXL",
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
    desText:
      "ตัวเลือกที่เหมาะสมที่สุดคือ 11111111111111111111111111111111111111111",
  },
  {
    questionNo: 2,
    question: " This is question number 2222222222?",
    ansA: "Answer A : incorrect",
    ansB: "Answer B : correct",
    ansC: "Answer C : incorrect",
    desText:
      "ตัวเลือกที่เหมาะสมที่สุดคือ 22222222222222222222222222222222222222222",
  },
  {
    questionNo: 3,
    question: " This is question number 3333333333?",
    ansA: "Answer A : correct",
    ansB: "Answer B : incorrect",
    ansC: "Answer C : incorrect",
    desText:
      "ตัวเลือกที่เหมาะสมที่สุดคือ 333333333333333333333333333333333333333333",
  },
  {
    questionNo: 4,
    question: " This is question number 4444444444?",
    ansA: "Answer A : incorrect",
    ansB: "Answer B : correct",
    ansC: "Answer C : incorrect",
    desText:
      "ตัวเลือกที่เหมาะสมที่สุดคือ 4444444444444444444444444444444444444444444",
  },
  {
    questionNo: 5,
    question: " This is question number 5555555555?",
    ansA: "Answer A : incorrect",
    ansB: "Answer B : correct",
    ansC: "Answer C : incorrect",
    desText:
      "ตัวเลือกที่เหมาะสมที่สุดคือ 55555555555555555555555555555555555555555555",
  },
  {
    questionNo: 6,
    question: " This is question number 6666666666?",
    ansA: "Answer A : incorrect",
    ansB: "Answer B : incorrect",
    ansC: "Answer C : correct",
    desText:
      "ตัวเลือกที่เหมาะสมที่สุดคือ 666666666666666666666666666666666666666666",
  },
  {
    questionNo: 7,
    question: " This is question number 7777777777?",
    ansA: "Answer A : incorrect",
    ansB: "Answer B : correct",
    ansC: "Answer C : incorrect",
    desText:
      "ตัวเลือกที่เหมาะสมที่สุดคือ 7777777777777777777777777777777777777777777",
  },
  {
    questionNo: 8,
    question: " This is question number 8888888888?",
    ansA: "Answer A : correct",
    ansB: "Answer B : incorrect",
    ansC: "Answer C : incorrect",
    desText:
      "ตัวเลือกที่เหมาะสมที่สุดคือ 88888888888888888888888888888888888888888888888",
  },
  {
    questionNo: 9,
    question: " This is question number 9999999999?",
    ansA: "Answer A : incorrect",
    ansB: "Answer B : correct",
    ansC: "Answer C : incorrect",
    desText:
      "ตัวเลือกที่เหมาะสมที่สุดคือ 9999999999999999999999999999999999999999999999",
  },
  {
    questionNo: 10,
    question: " This is question number 10 10 10 10 10?",
    ansA: "Answer A : correct",
    ansB: "Answer B : incorrect",
    ansC: "Answer C : incorrect",
    desText:
      "ตัวเลือกที่เหมาะสมที่สุดคือ 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10",
  },
];

window.onload = function () {
  startBtn = document.getElementById("myBtn");
  startBtn.setAttribute("onclick", "startQuiz()");
  caller();
  realBtn.style.display = "none";
  boxx.style.display = "none";
  realBox.style.display = "none";

  console.log("JS loaded");
};

function caller() {
  boxx = document.getElementById("surveyBox");
  startBox = document.getElementById("surveyStart");
  questionText = document.getElementById("question");
  questionTextx = document.getElementById("questionXL");
  choiceA = document.getElementById("choA");
  choiceB = document.getElementById("choB");
  choiceC = document.getElementById("choC");
  backBtn = document.getElementById("backz");
  backBtn2 = document.getElementById("backza");
  textZa = document.getElementById("textZa");
  realBtn = document.getElementById("realz");
  surHead = document.getElementById("surveyHeader");
  ansDes = document.getElementById("ansDes");
  realBox = document.getElementById("showBox");
  nextBtn = document.getElementById("nextz");
  choiceAx = document.getElementById("choAXL");
  choiceBx = document.getElementById("choBXL");
  choiceCx = document.getElementById("choCXL");
  userName = document.getElementById("name");
  //   userEmail = document.getElementById("email");
  userMessage = document.getElementById("message");
}

function changeChoice() {
  questionText.innerHTML = questionArray[questionShowing].question;
  choiceA.innerHTML = questionArray[questionShowing].ansA;
  choiceB.innerHTML = questionArray[questionShowing].ansB;
  choiceC.innerHTML = questionArray[questionShowing].ansC;
  questionTextx.innerHTML = questionArray[questionShowing].question;
  choiceAx.innerHTML = questionArray[questionShowing].ansA;
  choiceBx.innerHTML = questionArray[questionShowing].ansB;
  choiceCx.innerHTML = questionArray[questionShowing].ansC;
  ansDes.innerHTML = questionArray[questionShowing].desText;
}

function startQuiz() {
  startBox.style.display = "none";
  boxx.style.display = "grid";

  choiceA.setAttribute("onclick", "nextQuestion(this.id)");
  choiceB.setAttribute("onclick", "nextQuestion(this.id)");
  choiceC.setAttribute("onclick", "nextQuestion(this.id)");
  backBtn.setAttribute("onclick", "backQuestion()");
  backBtn2.setAttribute("onclick", "backQuestion2()");
  backBtn.style.display = "none";
  realBtn.setAttribute("onclick", "showAns()");
  nextBtn.setAttribute("onclick", "nextQuestion2()");

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

function nextQuestion2() {
  if (questionShowing < 10) {
    questionShowing++;
    changeChoice();
    highlightAns();
  } else {
    realBox.style.display = "none";
    startBox.style.display = "grid";
  }
  if (questionShowing == 10) {
    nextBtn.innerHTML = " ปิดเฉลย ";
  }
  if (questionShowing == 2) {
    backBtn2.style.display = "inline-block";
  }
}

function backQuestion() {
  ansSelected.pop();
  questionShowing--;
  changeChoice();
  if (questionShowing == 1) {
    backBtn.style.display = "none";
  }
}

function backQuestion2() {
  if (questionShowing == 10) {
    nextBtn.innerHTML = " ถัดไป ";
  }
  questionShowing--;
  changeChoice();
  highlightAns();
  if (questionShowing == 1) {
    backBtn2.style.display = "none";
  }
}

function quizFin() {
  boxx.style.display = "none";
  startBox.style.display = "grid";
  realBtn.style.display = "inline-block";
  var calScore = ansCheck();
  textZa.innerHTML = "คุณทำได้ " + calScore + " คะแนนครับ.";
  startBtn.innerHTML = " เริ่มใหม่ ";
  surHead.innerHTML = "ผลการทำควิซของคุณฮะ";
  startBtn.setAttribute("onclick", "restartX()");
  questionShowing = 1;
  ansSelected = [];
  changeChoice();
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
  boxx.style.display = "grid";
  backBtn.style.display = "none";
  questionShowing = 1;
  ansSelected = [];
  changeChoice();
}

function showAns() {
  startBox.style.display = "none";
  realBox.style.display = "grid";
  choiceA.disable = "true";
  backBtn2.style.display = "none";
  nextBtn.innerHTML = " ถัดไป ";
  highlightAns();
}

function highlightAns() {
  choiceAx.style.backgroundColor = "rgba(0, 0, 0, 0)";
  choiceBx.style.backgroundColor = "rgba(0, 0, 0, 0)";
  choiceCx.style.backgroundColor = "rgba(0, 0, 0, 0)";

  jojo = document.getElementById(highlighter[questionShowing]);
  jojo.style.backgroundColor = "pink";
}

function sendMessage() {
  if (userName.value == "" || userMessage.value == "") {
    alert("ยังส่งไม่ได้หรอกยังกรอกบางช่องไม่ครับรึเปล่านะ");
  } else {
    console.log(userName.value + " " + userMessage.value);

    userName.value = "";
    userMessage.value = "";
    alert("ขอบคุณสำหรับความที่คิดเห็นที่ส่งมากนะครับบบ");
  }
}
