'use strict';

var myDog = function () {
    var pets = prompt('Do I have any pets?').toLowerCase();
    console.log('Does he have pets: yes');
    while (pets === '') {
        pets = prompt('Please answer the question.');
    }
    if (pets === 'yes') {
        alert('Correct! I have a dog.');
    } else if (pets === 'no') {
        alert('I\'m sorry, I do have a pet.');
    }
}
myDog ();



// var beerType = function () {
    // var type = prompt('What is your favorite brand of beer?').toLowerCase();
//     var suggestion;
//     while (type === '') {
//         type = prompt('Please enter a domestic, craft, or import.');
//     }
//     if (type === 'domestic') {
//         suggestion = 'Check out our domestic section.';
//     }  else if (type === 'craft') {
//         suggestion = 'Check out our craft section.';
//     }  else if (type === 'import') {
//         suggestion = 'Check out our import section.';
//     }
//     document.write('<h3>' + suggestion + '</h3>');
// }