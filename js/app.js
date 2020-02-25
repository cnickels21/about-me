'use strict';

var myDog = function () {
    var pets = prompt('Do I have any pets?').toLowerCase();
    console.log('Pets at home: yes');
    while (pets === '') {
        pets = prompt('Please answer the question.');
    }
    while (pets !== '') {
        if (pets === 'yes') {
            alert('Correct! I have a dog.');
            break;
        } else if (pets === 'no') {
            alert('I\'m sorry, I do have a pet.');
            break;
        } else {
            pets = prompt('Please answer yes or no.');
        }
    }
}
myDog();

var outsideAmerica = function () {
    var travel = prompt('Have I traveled internationally?').toLowerCase();
    console.log('Been outside of America: yes');
    while (travel === '') {
        travel = prompt('Please answer the question.');
    }
    while (travel !== '') {
        if (travel === 'yes') {
            alert('Correct! I have been to Germany and Ireland.');
            break;
        } else if (travel === 'no') {
            alert('I have. I love to travel!');
            break;
        } else {
            travel = prompt('Please answer yes or no.');
        }
    }
}
outsideAmerica();

var music = function () {
    var saxophone = prompt('Do I play any musical instruments?').toLowerCase();
    console.log('Plays music: yes');
    while (saxophone === '') {
        saxophone = prompt('Please answer the question.');
    }
    while (saxophone !== '') {
        if (saxophone === 'yes') {
            alert('Correct! I play saxophone.');
            break;
        } else if (saxophone === 'no') {
            alert('I do! I play saxophone.');
            break;
        } else {
            saxophone = prompt('Please answer yes or no.');
        }
    }
}
music();

var birth = function () {
    var home = prompt('Was I born in Wisconsin?').toLowerCase();
    console.log('Born in WI: no');
    while (home === '') {
        home = prompt('Please answer the question.');
    }
    while (home !== '') {
        if (home === 'yes') {
            alert('Nope! I was born in Colorado.');
            break;
        } else if (home === 'no') {
            alert('Correct! I was born in Colorado.');
            break;
        } else {
            home = prompt('Please answer yes or no.');
        }
    }
}
birth();

var myFuture = function () {
    var whatNext = prompt('Will I stay in Iowa forever?').toLowerCase();
    console.log('Staying in Iowa: no');
    while (whatNext === '') {
        whatNext = prompt('Please answer the question.');
    }
    while (whatNext !== '') {
        if (whatNext === 'yes') {
            alert('Nope! I want to move to Washington next.');
            break;
        } else if (whatNext === 'no') {
            alert('Correct! Iowa is a stepping stone for me.');
            break;
        } else {
            whatNext = prompt('Please answer yes or no.');
        }
    }
}
myFuture();

var userName = prompt('What is your preferred name?')
alert('Hello ' + userName + ' and welcome to the journey I like to call \'Chasin\' Chase\'!')