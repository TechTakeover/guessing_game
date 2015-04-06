var elguess = document.getElementById('guess');
// var elremain2 = document.getElementById('guessesremain'); working on adding this feature
var elmsg2 = document.getElementById('prompt');
// var elcounter = document.getElementById('guesscounter'); working on adding theis feature
var response = document.getElementById('response');
elmsg2.textContent = 'What number am I thinking of?';

function Guess(){
  this.elcounter = 0;
  this.elanswer = Math.floor(Math.random() *10);
  this.currentguess = '';
}
  var guess = new Guess();
  guess.currentGuess = Number.parseInt(elguess.textContent);
function checkanswer() {
  var elMsg = document.getElementById('feedback').textContent;
  var elsubmit = Number.parseInt(document.getElementById('yourguess').value);
  var response = document.getElementById('response');
  if (elsubmit > 10 || elsubmit < 1) {
    response.textContent = 'Number must be between 1 and 10';
  } else if (elsubmit === guess.elanswer) {
    response.textContent ='Congrats, you win nothing!';
  } else if (elsubmit > guess.elanswer) {
    response.textContent ='You\'re guess of ' + elsubmit + ' is too high, try again';
  } else if (elsubmit < guess.elanswer) {
   response.textContent ='You\'re guess of ' + elsubmit + ' is too high, try again';
  } else if (isNaN(elsubmit)) {
   response.textContent = 'That is not a number';
  }
};
