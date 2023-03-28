function getComputerChoice() {
  let compChoice;
  choices = ["rock", "paper", "scissors"];
  compChoice = choices[Math.floor(Math.random() * choices.length)];

  return compChoice;
}

function playRound(yourChoice, computerChoice) {
  // Check winner
  if (yourChoice == computerChoice) {
    return "it's a draw";
  } else if (
    (yourChoice == "rock" && computerChoice == "scissors") ||
    (yourChoice == "scissors" && computerChoice == "paper") ||
    (yourChoice == "paper" && computerChoice == "rock")
  )
    return "you won";
  else return "computer won";
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  let round = 1;

  while (round <= 5) {
    let yourChoice = prompt(
      "What is choice for rock/paper/scissors?"
    ).toLowerCase();
    let compChoice = getComputerChoice();

    let result = playRound(yourChoice, compChoice);
    if (result == "you won") {
      playerWins += 1;
    } else if (result == "computer won") {
      computerWins += 1;
    }

    console.log(`Player: ${playerWins}  Computer: ${computerWins}`);
    console.log("Computer chose " + compChoice);
    console.log("Round: " + round + " || " + result);
    console.log(" ");

    if (round == 5) {
      if (playerWins > computerWins) {
        console.log("Player won the game.");
      } else if (computerWins == 3) {
        console.log("Computer won the game. Nice try human.");
      } else {
        console.log("It's a draw between you two.");
      }
    }

    round += 1;
  }
}

game();
