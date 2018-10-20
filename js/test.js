/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var age = 18,
    first_name = 'Maria',
    last_name = 'Ivanova';
    
//console.log(first_name);
//first_name = 'Ivan';
//console.log(first_name);

var number = 10;
number++; //11
console.log(number); //11
console.log(number++); //print 11 then increase to 12
console.log(++number); //increase to 13 and then print 13 
console.log(number); //print 1
var b = 3%2;
console.log(b);

function sayHello() {
    let name = "Gosho";
    var name2 = "Gosho2";
    console.log(name + name2);
}

//you can't change a coonstant
const PI = 3.14;


//booleans
console.log("=============booleans==============="); 
var x = 5;
console.log(x == 5); //true
console.log(x == '5'); //true - compares only value
console.log(x === '5'); //false - compares value and type
console.log(x !== '5'); //true

//'' 

console.log("=============booleans example usage==============="); 
show_agree = false;
a = 5;
if ((!show_agree) && (a > 5)) {
    alert('something');
} else {
    alert('something else');
}


if ((!show_agree) ^ (a === 5)) {
    alert('OK - only one is true');
} else {
    alert('NOK - only one must be true, now both are');
}


var a = 5;
var b = 10;
//condition ? result_ifTrue : result_ifFalse
console.log(a > b ? 'true' : 'false');
console.log(b > a ? 'true' : 'false');