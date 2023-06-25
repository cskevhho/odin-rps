const rock = "1";
const paper = "2";
const scissor = "3";
let playerTally = 0;
let compTally = 0;

const getComputerChoice = () => {
  switch ((comNum = Math.floor(Math.random() * 3 + 1))) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
};

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "paper") {
        compTally++;
        return "You Lose! Paper Beats Rock!";
      } else if (computerSelection == "scissors") {
        playerTally++;
        return "You Win! Rock Beats Scissors!";
      } else {
        return "DRAW";
      }
    case "paper":
      if (computerSelection == "scissors") {
        compTally++;
        return "You Lose! Scissors Beats Rock!";
      } else if (computerSelection == "rock") {
        paperTally++;
        return "You Win! Paper Beats Rock!";
      } else {
        return "DRAW";
      }
    default: // Assuming input is sterilized I guess
      if (computerSelection == "rock") {
        compTally++;
        return "You Lose! Rock Beats Scissors!";
      } else if (computerSelection == "paper") {
        paperTally++;
        return "You Win! Scissors Beats Paper!";
      } else {
        return "DRAW";
      }
  }
}

function game() {
  playerTally = 0;
  compTally = 0;
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    console.log(
      playRound(
        (playerSelection = prompt("Please enter choice:")),
        computerSelection
      )
    );
    // console.log(`PLA: ${playerSelection}, COM: ${computerSelection}`) debug line
  }
  console.log(`PLA: ${playerTally} - COM: ${compTally}`)
}

game();