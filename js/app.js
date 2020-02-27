'use strict';

var score = 0;

function question1(){
  var pets = prompt('Do I have any pets?').toLowerCase();
  // console.log('Pets at home: yes');
  while (pets === '') {
    pets = prompt('Please answer the question.').toLowerCase();
  }
  while (pets !== '') {
    if (pets === 'yes') {
      alert('Correct! I have a dog.');
      score++;
      break;
    } else if (pets === 'no') {
      alert('I\'m sorry, I do have a pet.');
      break;
    } else {
      pets = prompt('Please answer yes or no.').toLowerCase();
    }
  }
}

question1();

function question2(){
  var travel = prompt('Have I traveled internationally?').toLowerCase();
  // console.log('Been outside of America: yes');
  while (travel === '') {
    travel = prompt('Please answer the question.').toLowerCase();
  }
  while (travel !== '') {
    if (travel === 'yes') {
      alert('Correct! I have been to Germany and Ireland.');
      score++;
      break;
    } else if (travel === 'no') {
      alert('I have. I love to travel!');
      break;
    } else {
      travel = prompt('Please answer yes or no.').toLowerCase();
    }
  }
}

question2();

function question3(){
  var saxophone = prompt('Do I play any musical instruments?').toLowerCase();
  // console.log('Plays music: yes');
  while (saxophone === '') {
    saxophone = prompt('Please answer the question.').toLowerCase();
  }
  while (saxophone !== '') {
    if (saxophone === 'yes') {
      alert('Correct! I play saxophone.');
      score++;
      break;
    } else if (saxophone === 'no') {
      alert('I do! I play saxophone.');
      break;
    } else {
      saxophone = prompt('Please answer yes or no.').toLowerCase();
    }
  }
}

question3();

function question4(){
  var home = prompt('Was I born in Wisconsin?').toLowerCase();
  // console.log('Born in WI: no');
  while (home === '') {
    home = prompt('Please answer the question.').toLowerCase();
  }
  while (home !== '') {
    if (home === 'yes') {
      alert('Nope! I was born in Colorado.');
      break;
    } else if (home === 'no') {
      alert('Correct! I was born in Colorado.');
      score++;
      break;
    } else {
      home = prompt('Please answer yes or no.').toLowerCase();
    }
  }
}

question4();

function question5(){
  var whatNext = prompt('Will I stay in Iowa forever?').toLowerCase();
  // console.log('Staying in Iowa: no');
  while (whatNext === '') {
    whatNext = prompt('Please answer the question.').toLowerCase();
  }
  while (whatNext !== '') {
    if (whatNext === 'yes') {
      alert('Nope! I want to move to Washington next.');
      break;
    } else if (whatNext === 'no') {
      alert('Correct! Iowa is a stepping stone for me.');
      score++;
      break;
    } else {
      whatNext = prompt('Please answer yes or no.').toLowerCase();
    }
  }
}

question5();

function question6(){
  var band;
  // console.log('Band members: 4');
  for (var i = 0; i < 5; i++) {
    if (!band) {
      band = prompt('How many members are in my band?');
    } else {
      if (!isNaN(Number(band))) {
        console.log(!isNaN(Number(band)));
        if (band > 4) {
          band = prompt('That is too many. Try again!');
        } else if (band < 4) {
          band = prompt('Too low! Try again.');
        } else {
          alert('Correct! Two guitars, a drummer, and bass.');
          score++;
          break;
        }
      }
      else {
        alert('Answer with a number please.');
        band = null;
      }
    }
  }
  if (band != 4) {
    console.log(band);
    alert('There are four people in my band.');
  }
}
question6();

function question7(){
  var answers = ['maine', 'florida', 'germany', 'ireland', 'colorado', 'holland'];
  // console.log('I have been to: maine, florida, colorado, germany, ireland, and holland.')
  for (var i = 0; i < 6; i++) {
    var isValid = false;
    var places = prompt('Where is somewhere I have travelled to?').toLowerCase();
    for (var j = 0; j < answers.length; j++) {
      if (places === answers[j]) {
        isValid = true;
      }
    }
    if (isValid) {
      score++;
      break;
    }
  }
}
question7();

var output = alert('Yes! I have been to Maine, Florida, Colorado, Ireland, Germany, and Holland.');


alert('Thank you for your time. Your total score is ' + score + ' out of 7!');

var userName = prompt('What is your preferred name?');
alert('Hello ' + userName + ' and welcome to the journey I like to call \'Chasin\' Chase\'!');
