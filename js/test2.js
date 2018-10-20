/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var username = prompt('enter username');
var username = 'qwerty';
if (username.length < 4 || username > 20) {
    alert('username must be between 4 and 20 symbols');
}

var num = Math.random()*100;
num = parseInt(num);
console.log('number is ' + num);
if (num % 2 === 0) {
    console.log('number is even');
} else {
    console.log('number is odd');
}

var day =  new Date().getDay();
console.log('today is ' + day + 'th day of the week');


//don't forget to use the switch in order to exit after a match
switch (day) {
    case 1:
        console.log('today is Monday');
        break;
    case 2:
        console.log('today is Tuesday');
        break;
    case 3:
        console.log('today is Wednesday');
        break;
    case 4:
        console.log('today is Thursday');
        break;
    case 5:
        console.log('today is Friday');
        break;
    default:
        console.log('Weekend!');
    
}

//if we don't use break then we will execute all the cases following the matching case e.g. display all to do items/events until the end of the week, but skip those that are for previous days

var day1 = 4;
switch (day1) {
    case 1:
        console.log('work');
    case 2:
        console.log('work, meet friends');
    case 3:
        console.log('work, go to the jim');
    case 4:
        console.log('Work, dream for friday');
    case 5:
        console.log('work, be happy it is friday');
    case 6:
        console.log('party!');
    case 7:
        console.log('more party!');
        break;
    default:
        console.log('something went wrong...');
    
}

let trafficLight = 'red';


//for performance - try to put the most commonly used options at the top of the if else so that only top lines will be executed most of the time. For long if else statements consider a switch. 
if (trafficLight == 'red') {
    console.log('stop');
} else if (trafficLight == 'green') {
    console.log('go');
} else {
    console.log('caution');
}