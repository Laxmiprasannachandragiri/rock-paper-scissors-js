let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let resultText = "";

  if (humanChoice === computerChoice) {
    resultText = "It's a tie!";
  } else {
    const wins = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    };
    if (wins[humanChoice] === computerChoice) {
      humanScore++;
      resultText = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore++;
      resultText = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
  }

  document.getElementById("result").textContent = resultText;
  document.getElementById("score").textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}
