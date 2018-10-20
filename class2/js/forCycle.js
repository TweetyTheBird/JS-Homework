/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//sequence: check condition -> if true execute block -> increase counter -> repeat
//Thus on i = 10 will print 10, increase to 11 and then check condition to false and exit
for (var i = 1; i < 11; i++) {
    document.write(i);
}

console.log(i);

for (let j = 1; j < 11; j++) {
    console.log(j);
}

//j was declared with let - thus it does not exist after the block is closed
console.log(j);



