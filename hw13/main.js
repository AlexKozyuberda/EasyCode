const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const recognize = new SpeechRecognition();
const recognizeBtnIcon = document.querySelector(".recognize-btns-icon");
const recognizeBtn = document.querySelector(".recognize-btn");
const recognizeResult = document.querySelector(".recognize-result");

recognizeBtn.addEventListener("click", startRecognize);

function getRecognizeText() {
  recognize.interimResults = false;
  const textHtml = document.createElement("p");

  recognize.onresult = function(event) {
    const textResult = event.results[event.resultIndex];
    if (textResult.isFinal) {
      recognizeResult.innerHTML = "";
      textHtml.textContent = textResult[0].transcript;
      recognizeResult.append(textHtml);
      recognizeBtn.textContent = "Старт";
      recognizeBtnIcon.classList.remove("start");
    }
  };
}

function loaderText() {
  const loaderHtml = `<div class="loader-text">
        <span></span>
        <span></span>
        <span></span>
      </div>`;

  return loaderHtml;
}

function startRecognize() {
  getRecognizeText();
  if (!recognizeBtnIcon.classList.contains("start")) {
    recognizeResult.innerHTML = "";
    recognizeResult.insertAdjacentHTML("beforeend", loaderText());
    recognizeBtnIcon.classList.add("start");
    recognizeBtn.textContent = "Стоп";
    recognize.start();
  }
}
