const rock = "1";
const paper = "2";
const scissor = "3";
let comNum, comAns;
let playerSelection = prompt("Please enter choice:");

const getComputerChoice = () => {
  switch ((comNum = Math.floor(Math.random() * 3 + 1))) {
    case 1:
      comAns = "Rock";
      return comAns;
    case 2:
      comAns = "Paper";
      return comAns;
    case 3:
      comAns = "Scissor";
      return comAns;
  }
};

function playRound(playerSelection, computerSelection) {
    for (let i = 0; i < 6; i++) {
        playerSelection.toLowerCase();
        console.log(i);
    }
}
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);