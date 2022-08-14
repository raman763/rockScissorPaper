const start = document.getElementById("start_game_btn");
const rock = "ROCK";
const Default = rock;
const scissors = "SCISSORS";
const paper = "PAPER";
const Draw = "Match is Draw";
const Computer_win = "Computer win Match";
const PWin = "Player Win Match";

const startGame = function () {
  const result = (document.getElementById("gameRunning").innerHTML =
    "Game is Running");
  return result;
};

const getPlayerChoice = function () {
  const playerChoice = document
    .getElementById("valueInput")
    .value.toUpperCase();
  if (
    playerChoice == paper ||
    playerChoice == scissors ||
    playerChoice == rock
  ) {
    return playerChoice;
  } else {
    return "not vaild";
  }
};

const computerChoice = function () {
  const choice = Math.random(Number);
  console.log(choice);
  if (choice < 0.3) {
    return rock;
  } else if (choice < 0.5) {
    return scissors;
  } else {
    return paper;
  }
};

const getwinner = (getPlayerChoice, computerChoice) => {
  if (getPlayerChoice === computerChoice) {
    return Draw;
  } else if (
    (getPlayerChoice === paper && computerChoice === rock) ||
    (getPlayerChoice === rock && computerChoice === scissors) ||
    (getPlayerChoice === scissors && computerChoice === paper)
  ) {
    return PWin;
  } else {
    return Computer_win;
  }
};

function result() {
  start.innerHTML = "Result";
  const playerSelection = getPlayerChoice();
  document.getElementById("myInput").innerHTML = playerSelection;
  const computerSelection = computerChoice();
  document.getElementById("comInput").innerHTML = computerSelection;
  if (
    playerSelection === rock ||
    playerSelection === scissors ||
    playerSelection === paper
  ) {
    const winner = getwinner(playerSelection, computerSelection);
    document.getElementById("winner").innerHTML = winner;
  } else {
    document.getElementById("winner").innerHTML = "Not Vaild";
  }

  const gameSt = startGame();
  console.log(gameSt);
}

start.addEventListener("click", result);
