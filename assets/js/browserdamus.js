console.log('Bleep..Bloop..Blarp ITS WORKING!!! ITS WORKING!!!!');

let getFortune = document.getElementById('browserdamus-js__form');
let getQuestion = document.querySelector('.js-browserdamus-input');
let askedQuestion = getQuestion.value;

const magicEightBallSays = function() {
  let askedQuestion = getQuestion.value.toLowerCase();
  let output = document.querySelector('.js-browserdamus-output');
  let randomNumber = Math.floor(Math.random() * 7)
  let eightBall = '';

  switch (randomNumber) {
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

  if (askedQuestion === '') {
    output.innerHTML = '<p>You must ask a question first</p>';
  } else {
    output.innerHTML = '<p>Browserdamus says: ' + eightBall + '.</p>';
  }

};

//magicEightBallSays();

let runFortune = function(e) {
  magicEightBallSays();
  e.preventDefault();
};

//getFortune.addEventListener('click', runFortune);
getFortune.addEventListener('submit', runFortune);

