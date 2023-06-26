const rock = "1";
const paper = "2";
const scissor = "3";
let playerTally = 0;
let compTally = 0;

// playerSelection is now onclick -- check button class
const btn = document.querySelectorAll('.btn');

btn.forEach(button => {
  button.addEventListener('click', () => {
    console.log(playRound(button.id, getComputerChoice()));
  });
});

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
        playerTally++;
        return "You Win! Paper Beats Rock!";
      } else {
        return "DRAW";
      }
    default: // Assuming input is sterilized I guess
      if (computerSelection == "rock") {
        compTally++;
        return "You Lose! Rock Beats Scissors!";
      } else if (computerSelection == "paper") {
        playerTally++;
        return "You Win! Scissors Beats Paper!";
      } else {
        return "DRAW";
      }
  }
}