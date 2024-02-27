let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result = '';
  
  if(playerMove === 'Scisors'){
    if (computerMove === 'Rock'){
      result = 'You lose.';
    }
    else if (computerMove === 'Papper'){
    result = 'You win.';
    }
    else if (computerMove === 'Scisors'){
      result = 'Tie.';
    };
  }
  else if(playerMove === 'Papper'){
    if (computerMove === 'Rock'){
      result = 'You win.';
    }
    else if (computerMove === 'Papper'){
      result = 'Tie.';
    }
    else if (computerMove === 'Scisors'){
      result = 'You lose.';
    };
  }
  else if (playerMove === 'Rock'){
    if (computerMove === 'Rock'){
      result = 'Tie.';
    }
    else if (computerMove === 'Papper'){
      result = 'You lose.';
    }
    else if (computerMove === 'Scisors'){
      result = 'You win.';
    };
  }

  if (result === 'You win.'){
    score.wins += 1;
  }
  else if (result === 'You lose.'){
    score.losses += 1;
  }
  else if (result === 'Tie.'){
    score.ties +=1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-move').innerHTML = `You
  <img class="move-icon" src="assets/${playerMove}-emoji.png" >
  <img class="move-icon" src="assets/${computerMove}-emoji.png" >
  Computer`;

};

function updateScore(){
  document.querySelector('.score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Papper';
  }
  else if (randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'Scisors';
  }
  return computerMove;
};