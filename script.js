const rock = "1";
const paper = "2";
const scissor = "3";
let playerTally = 0;
let compTally = 0;

const btn = document.querySelectorAll(".btn");
const textdiv = document.querySelector(".textbox");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
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
  const para = document.createElement("p");
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "paper") {
        compTally++;
        para.textContent = "You Lose! Paper Beats Rock!";
      } else if (computerSelection == "scissors") {
        playerTally++;
        para.textContent = "You Win! Rock Beats Scissors!";
      } else {
        para.textContent = "DRAW";
      }
      break;
    case "paper":
      if (computerSelection == "scissors") {
        compTally++;
        para.textContent = "You Lose! Scissors Beats Rock!";
      } else if (computerSelection == "rock") {
        playerTally++;
        para.textContent = "You Win! Paper Beats Rock!";
      } else {
        para.textContent = "DRAW";
      }
      break;
    default: // Assuming input is sterilized I guess
      if (computerSelection == "rock") {
        compTally++;
        para.textContent = "You Lose! Rock Beats Scissors!";
      } else if (computerSelection == "paper") {
        playerTally++;
        para.textContent = "You Win! Scissors Beats Paper!";
      } else {
        para.textContent = "DRAW";
      }
      break;
  }
  textdiv.appendChild(para);
}
