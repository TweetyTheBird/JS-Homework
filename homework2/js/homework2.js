console.log('=====================task 1 - positive, negative, zero========================');

var inputNumber1 = 81;

if (inputNumber1 > 0) {
    console.log('number is positive');
} else if (inputNumber1 < 0) {
    console.log('number is negative');
} else {
    console.log('number is 0!');
}


console.log('=====================task 2 - odd, even, zero========================');

var inputNumber2 = 81;

if (inputNumber2 === 0) {
    console.log('number is 0!');
} else if (inputNumber2 % 2 === 0) {
    console.log('number is even');
} else {
    console.log('number is odd');
}

console.log('=====================task 3 - greatest out of three========================');

var a = 5, b = 101, c = -88;

if (a === b && a === c) {
    console.log('numbers are equal');
} else if ((a === b) && (a > c)) {
    console.log('a and b are equal and greater than c!');
} else if ((a === c) && (a > b)) {
    console.log('a and c are equal and greater than b!');
} else if ((c === b) && (c > a)) {
    console.log('c and b are equal and greater than a!');
} else if ((a > b) && (a > c)) {
    console.log('a is greatest');
} else if ((a > b) && !(a > c)) {
    console.log('c is greatest');
} else if ((b > a) && (b > c)) {
    console.log('b is greatest');
} else {
    console.log('c is greatest');
}


console.log('=====================task 4 - all divisible by three========================');

for (let i = 0; i < 101; i++) {
    if ((i % 3 === 0) && (i !== 0)) {
        console.log(i);
    }
}

console.log('=====================task 5 - all numbers 20 to 0 ========================');

for (i = 20; i > -1; i--) {
    console.log(i);
}

console.log('=====================task 6 - all numbers 20 to 0 ========================');

var lang = 'bg';

switch (lang) {
    case 'en':
    {
        console.log('English message');
        break;
    }
    case 'es':
    {
        console.log('Spanish message');
        break;
    }
    case 'de':
    {
        console.log('De message');
        break;
    }
    case 'bg':
    {
        console.log('Bg message');
        break;
    }
    default:
    {
        console.log('Invalid language');
    }
}

console.log('=====================task 7 - mark per score ========================');

var score = 70;

switch (true) {
    case (score >= 1 && score <= 60):
    {
        console.log('mark is 2');
        break;
    }
    case (score >= 61 && score <= 70):
    {
        console.log('mark is 3');
        break;
    }
    case (score >= 71 && score <= 80):
    {
        console.log('mark is 4');
        break;
    }
    case (score >= 81 && score <= 90):
    {
        console.log('mark is 5');
        break;
    }
    case (score >= 91 && score <= 100):
    {
        console.log('mark is 6');
        break;
    }
    default:
    {
        console.log('invalid score');
    }
}

console.log('=====================task 8 - month name by number 1-12 ========================');

var month = 5;

switch (month) {
    case 1:
    {
        console.log('Jan');
        break;
    }
    case 2:
    {
        console.log('Feb');
        break;
    }
    case 3:
    {
        console.log('Mar');
        break;
    }
    case 4:
    {
        console.log('Apr');
        break;
    }
    case 5:
    {
        console.log('May');
        break;
    }
    case 6:
    {
        console.log('Jun');
        break;
    }
    case 7:
    {
        console.log('Jul');
        break;
    }
    case 8:
    {
        console.log('Aug');
        break;
    }
    case 9:
    {
        console.log('Sep');
        break;
    }
    case 10:
    {
        console.log('Oct');
        break;
    }
    case 11:
    {
        console.log('Nov');
        break;
    }
    case 12:
    {
        console.log('Dec');
        break;
    }
    default:
    {
        console.log('invalid month');
    }
}


console.log('=====================task 9 - month name by number 1-12 (used document.write) ========================');

for (let a = 1; a < 11; a++) {
    for (let b = 1; b < 11; b++) {
        result = a * b;
        document.write(a + ' * ' + b + ' = ' + result + '<br>');
    }
}

//console.log('=====================task 10 - alternating li colors ========================');


function redGreen() {
    var vegiesList = document.querySelectorAll('ul li');
//    var vegiesList = document.getElementById('vList').getElementsByTagName('li');

    for (let i = 0; i < vegiesList.length; i++) {
        if (i % 2 === 0) {
            vegiesList[i].style.color = 'red';
        } else {
            vegiesList[i].style.color = 'green';
        }
    }
}










