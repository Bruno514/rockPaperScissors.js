function getComputerChoice() {
  let compChoice;
  choices = ["rock", "paper", "scissors"];
  compChoice = choices[Math.floor(Math.random() * choices.length)];

  return compChoice;
}

function addAllListeners() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("click", playRound);
  });
}

function removeAllListeners() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.removeEventListener("click", playRound);
  });
}

function changeButtonsBgToDefault() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.style["background-color"] = "grey";
  });
}

function playRound() {
  let result = "";
  const msg_e = document.querySelector(".message");
  const yourChoice = this["id"];
  const computerChoice = getComputerChoice();
  const yourPoints = document.querySelector("#point-you");
  const computerPoints = document.querySelector("#point-pc");

  changeButtonsBgToDefault();

  if (yourChoice != computerChoice) {
    computerChoiceButton = document.querySelector("#" + computerChoice);
    this.style["background-color"] = "blue";
    computerChoiceButton.style["background-color"] = "red";
  } else {
    this.style["background-color"] = "orange";
  }
  // Check winner
  if (yourChoice == computerChoice) {
    result = "It's a draw";
  } else if (
    (yourChoice == "rock" && computerChoice == "scissors") ||
    (yourChoice == "scissors" && computerChoice == "paper") ||
    (yourChoice == "paper" && computerChoice == "rock")
  ) {
    playerWins += 1;
    result = "You won this round.";
  } else {
    computerWins += 1;
    result = "The computer won this round";
    msg_e.textContent = "The computer won this round.";
  }

  if (playerWins == 5) {
    result = "Player won the game.";
    this.removeEventListener("click", playRound);
    removeAllListeners();
  } else if (computerWins == 5) {
    result = "The computer won the game. Nice try human.";
    removeAllListeners();
  }

  yourPoints.textContent = "You: " + playerWins;
  computerPoints.textContent = "Computer: " + computerWins;
  msg_e.textContent = result;
}

let playerWins = 0;
let computerWins = 0;
let round = 0;
rockButton = document.querySelector(".button#rock");

rockButton.addEventListener("mouseover", () => {
  rockAudio = document.querySelector("audio");
  if (!rockAudio) return;
  rockAudio.currentTime = 0;
  rockAudio.play();
});

addAllListeners();
