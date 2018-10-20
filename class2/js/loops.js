/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var lis = document.querySelectorAll('ul li');
console.log(lis);

for (let i = 0; i < lis.length; i++) {
    console.log(lis[i].innerHTML);
}


//while - print only even numbers exclude 0 as well
//variant 1
var j = 0;
while(j < 11) {
    if ((j % 2 === 0) && (j !== 0)) {
    console.log(j);
    }
    j++;
}

//variant 2

while(j < 11) {
    if (j === 0) { //if j === 0 -> incrase j to 1 and move to next cycle
        j++;
        continue;
    }
    if ((j % 2 === 0)) {
    console.log(j);
    }
    j++;
}


//break
var k = 0;
while(true) {
    k++;
    console.log(k);
    if (k === 10) {
        break;
    }
}

//do while
do {
    console.log('will print at least once');
}
while (false);




