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
      let win = 1;
      return "You chose rock, Computer chose scissors, You win!";
    }
    if (playerSelection == "rock" && computerSelection == "paper" ) {
      let lose = 1;
      return "You chose rock, Computer chose paper, You lose!";
    }
    if (playerSelection == "rock" && computerSelection == "rock" ) {
      let draw = 1
      return "You chose rock, Computer chose rock, You draw!";
    }
  
    // Player chooses paper
  
    if (playerSelection == "paper" && computerSelection == "scissors" ) {
      return "You chose paper, Computer chose scissors, You lose!";
    }
    if (playerSelection == "paper" && computerSelection == "paper" ) {
      return "You chose paper, Computer chose paper, You draw!";
    }
    if (playerSelection == "paper" && computerSelection == "rock" ) {
      return "You chose paper, Computer chose rock, You win!";
    }
  
    // Player chooses scissors
  
    if (playerSelection == "scissors" && computerSelection == "scissors" ) {
      return "You chose scissors, Computer chose scissors, You draw!";
    }
    if (playerSelection == "scissors" && computerSelection == "paper" ) {
      return "You chose scissors, Computer chose paper, You win!";
    }
    if (playerSelection == "scissors" && computerSelection == "rock" ) {
      return "You chose scissors, Computer chose rock, You lose!";
    }
  }
  
