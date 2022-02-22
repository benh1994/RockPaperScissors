let playerScore = 0;
let computerScore = 0;
let tie = 0;
let win = "You won!"
let lose = "You lost!"
let draw = "You tied!"




function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
  }
  
  function playRound(computerSelection, playerSelection) {
    
    playerSelection = prompt("Enter a selction of rock, paper, scissors: ").toLowerCase();
  
    computerSelection = computerPlay();
  
    //Player chooses rock
  
    if (playerSelection == "rock" && computerSelection == "scissors" ) {
      playerScore++;
      return win;
    }
    if (playerSelection == "rock" && computerSelection == "paper" ) {
      computerScore++;
      return lose;
    }
    if (playerSelection == "rock" && computerSelection == "rock" ) {
      tie++;
      return draw;
    }
  
    // Player chooses paper
  
    if (playerSelection == "paper" && computerSelection == "scissors" ) {
      computerScore++;
      return lose;
    }
    if (playerSelection == "paper" && computerSelection == "paper" ) {
      tie++;
      return draw;
    }
    if (playerSelection == "paper" && computerSelection == "rock" ) {
      playerScore++;
      return win;
    }
  
    // Player chooses scissors
  
    if (playerSelection == "scissors" && computerSelection == "scissors" ) {
      tie++;
      return draw;
    }
    if (playerSelection == "scissors" && computerSelection == "paper" ) {
      playerScore++;
      return win;    }
    if (playerSelection == "scissors" && computerSelection == "rock" ) {
      computerScore++;
      return lose;
    }
  }

//New function to play rounds of more than 1

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound())
  }
}

game() 

console.log(playerScore)
console.log(computerScore)
console.log(tie)