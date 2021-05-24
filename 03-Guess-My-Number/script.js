'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click' , function(){
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1){
    if(!guess){
      document.querySelector('.message').textContent = "⛔️ No Number";
    } else if(guess === secretNumber){
      document.querySelector('.message').textContent = "🎉 Correct Number";
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    } else if(guess !== secretNumber){
        document.querySelector('.message').textContent = guess > secretNumber ? "📈 Too High" : "📉 Too Low";
        score--;
        document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = "💥 You Lost the Game";
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click' , function(){
  secretNumber = Math.trunc(Math.random()*20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.removeProperty("background-color");
  document.querySelector('.number').style.removeProperty("width");
  document.querySelector('.number').textContent = '?';
});