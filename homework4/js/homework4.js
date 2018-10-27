//========================task 1 - say hi====================

function sayName(name) {
    console.log("(task 1) Hi " + name);
}

sayName("Gosho");


//====================task 2 - calculate============================

function calcNums(num1, num2, action) {
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) {
        return "invalid input numbers";
    }
    switch (action) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            return "invalid action - valid actions are +,-,*";
    }
}

console.log('(task 2) multiply: ' + calcNums(3, 2, '*'));
console.log('(task 2) invalid action: ' + calcNums(3, 2, 'invalid'));
console.log('(task 2) invalid number: ' + calcNums('invalid', 2, '+'));


//====================task 3 - calculate============================

function printCities(cities) {
    //why is type an object and not an array?
    if (!Array.isArray(cities) && typeof cities !== 'string') {
        console.log(cities + " is an invalid input. please supply a city or an array of cities");
        return;
    }
    if (typeof cities === 'string') {
        console.log(cities);
    } else {
        for (var i = 0; i < cities.length; i++) {
            console.log(cities[i]);
        }
    }
}
console.log("(task3) Print three cities:");
printCities(['sofia', 'varna', 'ruseeee']);
console.log("(task3) Print a single city:");
printCities('London');
console.log("(task3) Invalid input (non string and/or not an array):");
printCities(11111);


//====================task 4 - 1-99============================
function numToString(num) {
    if (typeof num !== 'number' || (num < 1 || num > 99)) {
        console.log("Invalid input - enter a num between 1 and 99");
        return;
    }
    var numStr = num.toString();
    var result;
    var numsStrings = [
        ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    ];
    
    
    if (numStr.length === 1) {
        for (var i = 0; i < 10; i++) {
            if (numStr == i) {
                result = numsStrings[0][i];
                return result;
            }
        }
    }
    else if(numStr[0] == 1) { 
        for (var i = 0; i < 10; i++) {
            if(numStr[1] == i) {
                result = numsStrings[2][i];
                return result;
            }
        }     
    }
    else {
        for (var i = 2; i < 10; i++) {
            if (numStr[0] == i) {
                result = numsStrings[1][i-2];
            }
        }
        for (var i = 0; i < 10; i++) {
            if (numStr[1] == i) {
                result += numsStrings[0][i];
            }
        }
        return result;
    }
    return "something went wrong";
}

console.log("#Task 4#");
console.log(numToString(25));
console.log(numToString(13));
console.log(numToString(10));
console.log(numToString(4));
console.log(numToString(400));

console.log("#End of task 4#");

//====================task 5  - under 18============================

var persons = [
    {name: 'Pesho', age: 19},
    {name: 'Gosho', age: 16},
    {name: 'Spaska', age: 12},
    {name: 'Maria', age: 18},
    {name: 'Ivan', age: 15},
    {name: 'Ginka', age: 21}
];

var personsUnder18 = [];
for (var i = 0; i < persons.length; i++) {
    if (persons[i].age < 18) {
        personsUnder18.push(persons[i]);

    }
}

console.log("(task 5)Persons under 18:");
console.log(personsUnder18);


//====================task 6  - dog============================

class Dog {
    constructor(breed, size, age, color) {
        this.breed = breed;
        this.size - size;
        this.age = age;
        this.color = color;
    }
}


Dog.prototype.eat = function () {
    console.log(this.breed + " dog is eating...");
};
Dog.prototype.sleep = function () {
    console.log(this.breed + " dog is sleeping...");
};
Dog.prototype.sit = function () {
    console.log(this.breed + " dog is sitting...");
};
Dog.prototype.run = function () {
    console.log(this.breed + " dog is running...");
};


var dog1 = new Dog("somebreed1", "large", 5, "black");
var dog2 = new Dog("somebreed2", "small", 2, "grey");
var dog3 = new Dog("somebreed3", "medium", 3, "white");

console.log(dog1, dog2, dog3);
dog1.eat();
dog2.run();
dog3.run();




