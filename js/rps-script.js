let userScore = 0;
let botScore = 0;

const scoreBorad_div = document.querySelector('.score-board');
const userScore_span = document.getElementById('user-score');
const botScore_span = document.getElementById('bot-score');
const result_div = document.querySelector('.results>p');
const rock_Div = document.getElementById('rock');
const paper_Div = document.getElementById('paper');
const scissors_Div = document.getElementById('scissors');

// events
const mainEvents = function () {
   rock_Div.addEventListener('click', () => {
      game('rock');
   });
   paper_Div.addEventListener('click', () => {
      game('paper');
   });
   scissors_Div.addEventListener('click', () => {
      game('scissors');
   });
}
mainEvents();

// getting bot choice
const getBotChoice = function () {
   const choices = ['rock', 'paper', 'scissors'];
   const random_num = Math.floor(Math.random() * 3);
   return choices[random_num];
}
// console.log(getBotChoice());

// comparing user and bot choices
const game = function (userChoice) {
   const botChoice = getBotChoice();
   switch (userChoice + botChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
         win(userChoice, botChoice);
         break;
      case 'rockpaper':
      case 'paperscissors':
      case 'paperscissors':
         lose(userChoice, botChoice);
         break;
      case 'rockrock':
      case 'scissorsscissors':
      case 'paperpaper':
         draw(userChoice, botChoice);
         break;
   }
   console.log('user choice ' + userChoice);
   console.log('bot choice ' + botChoice);
}

// used to convet letters to words
// const letterToWord = function (letter) {
//    if (letter === 'r') return 'Rock';
//    if (letter === 'p') return 'Paper';
//    else return 'scissors';

// }

const win = function (userChoice, botChoice) {

   userScore++;
   userScore_span.innerHTML = userScore;
   botScore_span.innerHTML = botScore;
   result_div.innerHTML = `${userChoice}` + ' beats ' + ` ${botChoice}. ` + 'you win!';
   // result_div.innerHTML = `${letterToWord(userChoice)}` + ' beats ' + ` ${letterToWord(botChoice)}. ` + 'you win!';
   // adding/removing color to user choice when user wins
   const userChoice_div = document.getElementById(userChoice);
   userChoice_div.classList.add('green-glow');
   setTimeout(function () {
      userChoice_div.classList.remove('green-glow');
   }, 300);
   // console.log('YOU WIN');
}



const lose = function (userChoice, botChoice) {
   botScore++;
   userScore_span.innerHTML = userScore;
   botScore_span.innerHTML = botScore;
   result_div.innerHTML = `${userChoice} ` + ' beats' + ` ${botChoice}. ` + ' you lost!';
   // result_div.innerHTML = `${letterToWord(userChoice)} ` + ' beats' + ` ${letterToWord(botChoice)}. ` + ' you lost!';

   // adding/removing color to user choice when user wins
   const userChoice_div = document.getElementById(userChoice);
   userChoice_div.classList.add('red-glow');
   setTimeout(function () {
      userChoice_div.classList.remove('red-glow');
   }, 300);
   // console.log('YOU LOST. BOT WINS');
}

const draw = function (userChoice, botChoice) {
   userScore_span.innerHTML = userScore;
   botScore_span.innerHTML = botScore;
   result_div.innerHTML = `${userChoice} ` + " can't beat " + ` ${botChoice}. ` + "it's a draw!";
   // result_div.innerHTML = `${letterToWord(userChoice)} ` + " can't beat " + ` ${letterToWord(botChoice)}. ` + "it's a draw!";
   // // adding/removing color to user choice when user wins
   const userChoice_div = document.getElementById(userChoice);
   userChoice_div.classList.add('gray-glow');
   setTimeout(function () {
      userChoice_div.classList.remove('gray-glow');
   }, 300);
   // console.log('ITS A DRAW');
}