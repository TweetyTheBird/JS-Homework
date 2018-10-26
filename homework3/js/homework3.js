//==================================task 1 - lowest number======================

var arr1 = [1,4,6,-8,99, -98,3,478,-54,-123,0];
var arr1Length = arr1.length;

for (var i = 1, result = arr1[0]; i < arr1Length; i++) {
    if (arr1[i] < result) {
        result = arr1[i];
    }
}

console.log("(Task 1)Lowest number is: " + result);


//==================================task 2 - sum all elements===================


var arr2 = [1,2,3,4,5,6];
var arr2Length = arr2.length;

for (var i = 0, result2 = 0; i < arr2Length; i++) {
    result2 += arr2[i];
}

console.log("(Task 2) Sum of all numbers is: " + result2);

//=============================task 3 - print numbers between two vars=========


function numbersBetween(num1, num2) {
    let startNum, endNum;
    //find which num is lower and set it as startNum
    if (num1 < num2) {
        startNum = num1;
        endNum - num2;
    } 
    else {
        startNum = num2;
        endNum = num1;
    }
    for (var i = startNum; i <= endNum; i++) {
        console.log(i);
    }
    
}

console.log("(Task 3) print numbers in an interval");
numbersBetween(8,-1);
console.log("#end of task 3");

//=============================task 4 - reverse an array======================

var arr4 = [1,2,3,4,5,7];
var resultArr4 = new Array(5);
var lastIndex = arr4.length - 1;

for (var i = 0; i < arr4.length; i++) {
    resultArr4[i] = arr4[lastIndex-i];
}
console.log("(task 4) Reverse an array: " + resultArr4);

//==========task 5 - find indexes of items vith value Lada in array=============
console.log("(task 5) Lada Indexes");

var cars = ["Lada", "Nissan", "BMW", "Lada", "VW", "Lada"];
var fromIndex = 0;
var ladaIndexesArr = [];
do {
    var resultIndex = cars.indexOf("Lada",fromIndex);
    if (resultIndex != -1)
        ladaIndexesArr.push(resultIndex);
    fromIndex = resultIndex+1;
} while (resultIndex != -1);

console.log(ladaIndexesArr);

//==================task 6 - list of vegetables=============

var vegArray = ["tomato", "cucumber", "onion", "pepper"];
htmlVegArray = [];

for (e of vegArray) {
    let item = "<li>" + e + "</li>";
    htmlVegArray.push(item);
}

var vegList = '<ul id="vegetables">' + htmlVegArray.join('') + '</ul>';

function getVegList() {
    document.body.innerHTML += vegList;
}

//=====================last task - recurssion=============

var arrResult = [];
function toZero(n) {
    if (n >= 0) {
        arrResult.push(n);
        toZero(n-1);
    } 
}

toZero(5);
console.log("last task: " + arrResult);

