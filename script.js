window.onload = function () {
  let noCount = 0;

  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const questionDiv = document.getElementById("question");
  const resultDiv = document.getElementById("result");

  const SHEET_URL = "https://script.google.com/macros/s/AKfycbz1zREmzSbmRfcYNqyDA7DvU6uRxN_um1D_NsP3_GFiIMGNljA-aV4PQ74F4Dq0wJUQ/exec";

  function sendAnswer(answer) {
    fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "answer=" + answer
    });
  }

  noBtn.onclick = function () {
    sendAnswer("NO");
    noCount++;

    if (noCount >= 3) {
      window.location.href = "no.html";
      return;
    }

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  };

  yesBtn.onclick = function () {
    sendAnswer("YES");
    questionDiv.style.display = "none";
    resultDiv.style.display = "block";
  };
};


