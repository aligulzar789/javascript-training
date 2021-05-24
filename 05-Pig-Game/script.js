'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceImg = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Starting Conditions

let scores, currentScore, activePlayer, playing; 

const init = function(){
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceImg.classList.add('hidden');
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  player1El.classList.remove('player--winner');
  scores = [0,0]
  currentScore = 0;
  activePlayer = 0;
  playing = true;
}


init();

const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

//Dice Roll Functionality

btnRoll.addEventListener('click',function(){
  if(playing){
    // Generating Random Dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceImg.src = `dice-${dice}.png`;
    diceImg.classList.remove('hidden');

    //add dice roll to current score, if dice is not 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else{
      //switch player if dice is 1
      switchPlayer();
    }
  }
});

//Hold Button Functionality
btnHold.addEventListener('click',function(){
  if(playing){
    //add current score to total scores and display scores
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 30){
      playing = false;
      diceImg.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else{
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);