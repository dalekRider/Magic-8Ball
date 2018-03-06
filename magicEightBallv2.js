let getFortune = document.getElementById('tellMe');
let getQuestion = document.querySelector('.js-browserdamus-input').value.toLowerCase();

const magicEightBallSays = function() {

let userName = prompt('What is your Name?');
userName ? window.alert('Hello, ' + userName + '. Think of a question and then ask') : window.alert('Hello, your identity will remain a secret. Think of a question and then ask');
let userQuestion = prompt('What is your question...');
let randomNumber = Math.floor(Math.random() * 7)
let eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Don\'t count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

  if(userQuestion == ''){
    window.alert('Refresh the browser and try again')
  } else {
    window.alert(userName + ' has asked: ' + userQuestion);
    window.alert('The Magic 8Ball says: ' + eightBall +'.');
  }

};

//magicEightBallSays();

let runFortune = function() {
  magicEightBallSays();
};

getFortune.addEventListener('click', runFortune);

