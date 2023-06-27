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
  const outcome = document.createElement("p");
  const score = document.createElement("p");

  switch (playerSelection) {
    case "rock":
      if (computerSelection == "paper") {
        compTally++;
        outcome.textContent = "You Lose! Paper Beats Rock!";
      } else if (computerSelection == "scissors") {
        playerTally++;
        outcome.textContent = "You Win! Rock Beats Scissors!";
      } else {
        outcome.textContent = "DRAW";
      }
      break;
    case "paper":
      if (computerSelection == "scissors") {
        compTally++;
        outcome.textContent = "You Lose! Scissors Beats Rock!";
      } else if (computerSelection == "rock") {
        playerTally++;
        outcome.textContent = "You Win! Paper Beats Rock!";
      } else {
        outcome.textContent = "DRAW";
      }
      break;
    default: // Assuming input is sterilized I guess
      if (computerSelection == "rock") {
        compTally++;
        outcome.textContent = "You Lose! Rock Beats Scissors!";
      } else if (computerSelection == "paper") {
        playerTally++;
        outcome.textContent = "You Win! Scissors Beats Paper!";
      } else {
        outcome.textContent = "DRAW";
      }
      break;
  }
  score.textContent = `PLY: ${playerTally} - COM: ${compTally}`;
  textdiv.appendChild(outcome);
  textdiv.appendChild(score);
  scrollToBottom();

  if (playerTally == 5 || compTally == 5) {
    gameOver();
  }
}

function gameOver() {
  const endMessage = document.createElement("p");

  if (playerTally == 5) {
    endMessage.textContent = "GAME OVER! YOU WIN";
  } else if (compTally == 5) {
    endMessage.textContent = "GAME OVER! YOU LOSE";
  }
  textdiv.appendChild(endMessage);
  playerTally = 0;
  compTally = 0;
  scrollToBottom();
}


const scrollToBottom = () => {
  textdiv.scrollTop = textdiv.scrollHeight;
}
