const game = document.querySelector(".game");
const gameHeader = document.querySelector(".game-header");
const gameScore = document.querySelector(".game-header-score");
const intro = document.querySelector(".game-intro");
const introBtn = document.querySelector(".game-intro-btn");
const currentName = document.querySelector(".game-intro-input");
const gameResultBtn = document.querySelector(".game-result-btn");
const gameStartBtn = document.querySelector(".game-start");
const gameSettings = document.querySelector(".game-settings");
const gameHoles = document.querySelectorAll(".hole");
const gameMoles = document.querySelectorAll(".mole");
const modalResultClose = document.querySelector(".game-result-close");
const modalFinishClose = document.querySelector(".game-finish-close");
const gameResultModal = document.querySelector(".game-result-modal");
const finishModal = document.querySelector(".game-finish-modal");
const gameLogout = document.querySelector(".game-header-logout");
const levelSelect = document.querySelector(".game-level-select");

let isPlaying = false;
let countMoles = 0;
let molesAppeared = 0;

introBtn.addEventListener("click", gameLogin);
gameLogout.addEventListener("click", logoutGame);

gameResultBtn.addEventListener("click", gameResult);
modalResultClose.addEventListener("click", closeModal);
modalFinishClose.addEventListener("click", closeFinishModal);

gameStartBtn.addEventListener("click", startGame);

gameMoles.forEach(mole => {
  mole.addEventListener("click", catchMole);
});

function closeModal(event) {
  this.parentElement.classList.remove("modal-show");
}

function closeFinishModal(event) {
  this.parentElement.classList.remove("modal-show");
  gameSettings.classList.remove("game-settings-hide");
  gameScore.textContent = 0;
  molesAppeared.textContent = 0;
}

function gameResult(event) {
  event.preventDefault();

  getTable();
  gameResultModal.classList.toggle("modal-show");
}

function getTable() {
  const table = document.querySelector(".game-result-table tbody");
  let result = localStorage.getItem("usersList");
  result = JSON.parse(result);
  table.innerHTML = "";
  let tableNumber = 0;

  result.slice(-10).forEach(element => {
    tableNumber++;
    const html = `<tr>
                  <td>${tableNumber}</td>
                  <td>${element.name}</td>
                  <td>${element.score}</td>
                </tr>`;
    table.insertAdjacentHTML("beforeend", html);
  });
}

function logoutGame() {
  finishModal.classList.remove("modal-show");
  gameResultModal.classList.remove("modal-show");
  intro.classList.remove("intro-hide");
  gameHeader.classList.remove("game-header-show");
  currentName.value = "";
}

function gameLogin() {
  const introUser = document.querySelector(".game-intro-user");
  const playerName = document.querySelector(".game-header-name");
  const inputValue = currentName.value;
  if (inputValue) {
    intro.classList.add("intro-hide");
    gameHeader.classList.add("game-header-show");
    introUser.classList.remove("error");
    playerName.textContent = inputValue;
  } else {
    introUser.classList.add("error");
  }
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function catchMole(e) {
  const finishScore = document.querySelector(".value-moles");
  countMoles++;
  gameScore.textContent = countMoles;
  finishScore.textContent = countMoles;
  this.parentElement.classList.remove("up");
}

function randomHole(holes) {
  const id = Math.floor(Math.random() * holes.length);
  const hole = holes[id];
  return hole;
}

function showMole() {
  let time = 0;
  if (levelSelect.value === "easy") {
    time = randomTime(1400, 2800);
    game.setAttribute("style", "background-image: url(img/bg.jpg)");
    gameHeader.setAttribute(
      "style",
      "background-color:rgba(156, 231, 226, 0.6)"
    );
  } else if (levelSelect.value === "medium") {
    time = randomTime(700, 1400);
    gameHeader.setAttribute(
      "style",
      "background-color: rgba(129, 35, 69, 0.29)"
    );
    game.setAttribute("style", "background-image: url(img/bg-medium.jpg)");
  } else {
    time = randomTime(350, 700);
    game.setAttribute("style", "background-image: url(img/bg-hard.jpg)");
    gameHeader.setAttribute(
      "style",
      "background-color: rgba(188, 105, 0, 0.43)"
    );
  }

  const hole = randomHole(gameHoles);
  hole.classList.add("up");
  moleAppeared();

  setTimeout(() => {
    hole.classList.remove("up");
    if (isPlaying) showMole();
    else finishGame();
  }, time);
}

function moleAppeared() {
  gameHoles.forEach(hole => {
    if (hole.classList.contains("up")) {
      molesAppeared++;
    }
  });
  return molesAppeared;
}

function finishGame() {
  const finishMoleAppeared = document.querySelector(".value-appeared");

  finishModal.classList.add("modal-show");
  finishMoleAppeared.textContent = moleAppeared();

  const list = JSON.parse(localStorage.getItem("usersList")) || [];
  list.push({ name: currentName.value, score: countMoles });
  localStorage.setItem("usersList", JSON.stringify(list));
}

function startGame() {
  gameSettings.classList.add("game-settings-hide");
  countMoles = 0;
  molesAppeared = 0;
  gameScore.textContent = 0;
  showMole();

  isPlaying = true;
  setTimeout(() => {
    isPlaying = false;
  }, 10000);
}
