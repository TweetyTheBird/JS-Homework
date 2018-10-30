//======================task one - small animals==========================

var animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
];

var smallAnimals = [];
smallAnimals = animals.filter(function(animal){
    return (animal.size = 'small');
}) ;

console.log("(task 1) small animals:");
console.log(smallAnimals);

//======================task two - areas by radius==========================

var arr_radii = [10, 15, 20];

var areas = [];
areas = arr_radii.map(function(radius){
    var area = Math.PI*radius*radius;
    return area;
});

console.log("(task 2) areas by radius 12,15,20");
console.log(areas);

//======================task three - average under 18==========================

var persons = [
    { name : 'Pesho', age: 19},
    { name : 'Gosho', age: 16},
    { name : 'Spaska', age: 12},
    { name : 'Maria', age: 18},
    { name : 'Ivan', age: 15},
    { name : 'Ginka', age: 21}
];


var under18 = persons.filter(function(person){
    return person.age <= 18;
});

for (var i = 0, count = 0, totAge = 0; i < under18.length; i++) {
    totAge += under18[i].age;
    count++;
}

var avrgAge = totAge/count;
console.log("(task 3) Average age of people under 18:");
console.log(avrgAge);

//======================task 4 - check if string exists=========================

var inputWord = 'testWord';

function searchForString(searchString,inputWord) {

if (inputWord.search(searchString) != '-1') {
    return true;
} else {
    return false;
}

}

console.log("(task 4) search for a string:");
console.log("should be true", searchForString('test',inputWord));
console.log("should be false", searchForString('missing',inputWord));










