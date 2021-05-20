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

  var ansSelected = [];
  var correctAns = [
    "1choC",
    "2choA",
    "3choA",
    "4choC",
    "5choC",
    "6choB",
    "7choC",
    "8choB",
    "9choC",
    "10choC",
  ];
  var highlighter = [
    "what",
    "choCXL",
    "choAXL",
    "choAXL",
    "choCXL",
    "choCXL",
    "choBXL",
    "choCXL",
    "choBXL",
    "choCXL",
    "choCXL",
  ];
}

var questionArray = [
  { brown: "ร้ายกาจนักนะ" },
  {
    questionNo: 1,
    question: " 1.ควรขอ Consent ก่อนที่จะ.....",
    ansA: "จับมือ",
    ansB: "เล่นสัมพันธ์สวาท",
    ansC: "ทุกข้อที่กล่าวมา",
    desText: "เพราะ Consent ควรขอก่อนจะมีการปฏิสัมพันธ์ในทุกกรณี",
  },
  {
    questionNo: 2,
    question:
      " 2.การขอ Consent ไม่ได้หมายถึงแค่การตอบตกลงหรือปฏิเสธอย่างเดียว มันรวมถึงการสื่อสารกับคู่นอนของคุณในสิ่งที่คุณทั้งคู่ต้องการ",
    ansA: "ถูก",
    ansB: "ผิด",
    ansC: "ไม่ทราบ",
    desText:
      "มันคือการแสดงออกว่าเราเคารพคู่นอน และจะไม่บังคับให้ทำอะไรที่พวกเขาไม่อยากทำ",
  },
  {
    questionNo: 3,
    question: " 3.แล้ว Consent ต้องขอตอนไหนกันนะ?",
    ansA: "ก่อนมีการสัมผัสทุกรูปแบบ(กอด, มีเพศสัมพันธ์ เป็นต้น)",
    ansB: "เมื่อถึงเวลาที่คุณคิดว่าเหมาะ",
    ansC: "ก่อนเริ่มมีเซ็กส์",
    desText:
      "ที่ต้องถามก่อน เพราะว่าเราต้องคิดเสมอว่าการกระทำของเราอาจส่งผลอะไรกับอีกฝ่าย",
  },
  {
    questionNo: 4,
    question: "4.คนกลุ่มไหนต้องขอ Consent ซึ่งกันและกันบ้าง?",
    ansA: "คู่รักที่จะมีเซ็กส์กันเป็นครั้งแรก",
    ansB: "คู่รักที่แต่งงานกันแล้ว",
    ansC: "ทุกข้อที่กล่าวมา	",
    desText:
      "ไม่ว่าจะแฟน เป็นสามีภรรยา เรื่อง Consent เป็นหัวใจสำคัญของการมีเพศสัมพันธ์",
  },
  {
    questionNo: 5,
    question: " 5.เมื่อพูดถึงเรื่องเซ็กส์ ควรจะถามเรื่องอะไรบ้าง?",
    ansA: "การป้องกัน",
    ansB: "สิ่งที่ชอบและไม่ชอบ",
    ansC: "ทุกข้อที่กล่าวมา",
    desText:
      "เราสามารถถามหัวข้อพวกนี้ได้หมดเลย เป็นเรื่องดีนะที่เราเปิดอกคุยกัน",
  },
  {
    questionNo: 6,
    question: " 6.การให้ Consent มีแค่การพูด ภาษากายและน้ำเสียงไม่นับ",
    ansA: "ใช่",
    ansB: "ไม่ใช่",
    ansC: "ไม่ทราบ",
    desText:
      "เรื่องภาษากายสำคัญมาก เพราะเราต้องคอยสังเกตุว่าคู่นอนของเรา จริงๆ แล้วรู้สึกยังไงในเรื่องที่ขอไป",
  },
  {
    questionNo: 7,
    question: " 7.เราจะรู้ได้ยังไงบ้าง หากคู่นอนของคุณให้ Consent แล้ว?",
    ansA: "ภาษากาย",
    ansB: "น้ำเสียง",
    ansC: "ทุกข้อที่กล่าวมา",
    desText:
      "การให้ความใส่ใจกับปัจจัยพวกนี้เป็นเรื่องดี เพราะจะได้รู้ว่าคู่นอนเต็มใจให้ Consent กับเราจริงๆ",
  },
  {
    questionNo: 8,
    question:
      "8.หลังขอ Consent แล้ว ถ้าคู่นอนตอบกลับมาทำนองว่า “ก็ได้มั้ง” แบบนี้อาจหมายความว่าอย่างไร?",
    ansA: "คู่นอนโอเคและอยากจะทำตามที่คุณขอ",
    ansB: "คู่นอนยังไม่มั่นใจหรือไม่อยากตอบปฎิเสธไปตรงๆ ",
    ansC: "ไม่ทราบ",
    desText:
      "ถ้าไม่มั่นใจว่าคู่นอนรู้สึกยังไงกับเรื่องที่ขอ ก็ให้พักไว้ก่อนจะดีกว่า",
  },
  {
    questionNo: 9,
    question: " 9.หากขอ Consent แล้วถูกปฎิเสธ ควรทำอย่างไร?",
    ansA: "โน้มน้าวหรืออ้อนให้เปลี่ยนใจ",
    ansB: "ค่อยถามอีกที เผื่อเปลี่ยนใจ",
    ansC: "เคารพการตัดสินใจและเปลี่ยนไปทำอย่างอื่นกัน",
    desText: "ถ้าโดนปฎิเสธแล้ว ก็เคารพการตัดสินใจ และไปทำอย่างอื่นแทน",
  },
  {
    questionNo: 10,
    question:
      "10.เมื่อเราได้ Consent แล้ว ในระหว่างเล่นเพลงรัก เราก็ยังบอกคู่นอนได้ว่า.....",
    ansA: "จะขอพักยก",
    ansB: "จะขอหยุด",
    ansC: "ทุกข้อที่กล่าวมา",
    desText:
      "Consent เป็นเรื่องของการสื่อสารตลอดกิจกรรมเพศสัมพันธ์ ไม่ไหวก็ขอพักได้",
  },
];

window.onload = function () {
  caller();
  startBtn.setAttribute("onclick", "startQuiz()");
  kamui(realBtn);
  kamui(boxx);
  kamui(realBox);
  kamui(resBox);
  kamui(furLink);
  kamui(resultWrap);
  console.log("JS loaded");
};

function caller() {
  startBtn = document.getElementById("myBtn");
  boxx = document.getElementById("surveyBox");
  startBox = document.getElementById("surveyStart");
  questionText = document.getElementById("question");
  questionTextx = document.getElementById("questionXL");
  choiceA = document.getElementById("choA");
  choiceB = document.getElementById("choB");
  choiceC = document.getElementById("choC");
  backBtn = document.getElementById("backz");
  backBtn2 = document.getElementById("backza");
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
  formQuiz = document.getElementById("formQuiz");
  resBox = document.getElementById("resBox");
  scoreDesc = document.getElementById("scoreDesc");
  bobo = document.getElementById("bobo");
  furLink = document.getElementById("furLink");
  resultWrap = document.getElementById("resultWrap");
  resultz = document.getElementById("resultz");
  wowSound = document.getElementById("wowSound");
}

function kamui(varName) {
  varName.style.display = "none";
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
  kamui(startBox);

  boxx.style.display = "grid";

  choiceA.setAttribute("onclick", "nextQuestion(this.id)");
  choiceB.setAttribute("onclick", "nextQuestion(this.id)");
  choiceC.setAttribute("onclick", "nextQuestion(this.id)");
  backBtn.setAttribute("onclick", "backQuestion()");
  backBtn2.setAttribute("onclick", "backQuestion2()");
  kamui(backBtn);

  realBtn.setAttribute("onclick", "showAns()");
  nextBtn.setAttribute("onclick", "nextQuestion2()");
  kamui(bobo);

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
    kamui(realBox);
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
    kamui(backBtn);
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
    kamui(backBtn2);
  }
}

function quizFin() {
  kamui(boxx);
  resultWrap.style.display = "block";
  startBox.style.display = "grid";
  var calScore = ansCheck();
  if (calScore >= 8) {
    resultz.innerHTML = "ยินดีด้วย! คุณผ่านแบบทดสอบของเรา <3";
    scoreDesc.innerHTML =
      "คุณเข้าใจเรื่องconsentได้ดีเลยนะ เราหวังว่าคุณจะนำไปใช้ในชีวิตจริงด้วย ขอบคุณนะ :)";
    kamui(startBtn);
    kamui(furLink);
  } else {
    resultz.innerHTML = "เสียใจด้วย คุณยังไม่ผ่านแบบทดสอบของเรานะ ;(";
    scoreDesc.innerHTML =
      "เราขอแนะนำบทความนี้ให้คุณได้ลองอ่าน เพื่อให้คุณเข้าใจมากขึ้นนะ";
    realBtn.style.display = "inline-block";
    furLink.style.display = "inline";
  }

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
  kamui(startBox);
  boxx.style.display = "grid";
  kamui(backBtn);
  questionShowing = 1;
  ansSelected = [];
  changeChoice();
}

function showAns() {
  questionShowing = 1;
  ansSelected = [];
  changeChoice();
  kamui(startBox);

  realBox.style.display = "grid";
  choiceA.disable = "true";
  kamui(backBtn2);

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

function sendMore() {
  kamui(resBox);
  formQuiz.style.display = "block";
}

function playsound() {
  wowSound.play();
}

//sheetDB script คับพรี่
var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
  console.log("runnnn");
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      console.log(userName.value + " " + userMessage.value);
      userName.value = "";
      userMessage.value = "";
      kamui(formQuiz);
      resBox.style.display = "block";
      playsound();
    });
});
