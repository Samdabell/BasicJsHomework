// Episode 1

var name = 'Slim Shady';

var printName = function() {
  console.log('Hi! My name is', name);
};

printName();

//Will print Hi! My name is Slim Shady, function is concatenating 'Hi! My name is' and the variable name which equals 'Slim Shady'

// Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// function will return 3 as it will read the variable in the method over the global method

// Episode 3

var myAnimals = ['chickens', 'cats', 'rabbits'];

var listAnimals = function() {
  myAnimals = ['ducks', 'dogs', 'lions'];
  for(var i=0; i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// will print out 0: ducks nl 1: dogs nl 2: lions as the local variable myAnimals will overwrite the global one

// Episode 4

var suspectOne = 'Alan';
var suspectTwo = 'Steve';
var suspectThree = 'John';
var suspectFour = 'Ally';

var allSuspects = function() {
  var suspectThree = 'Adam'
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// the all suspects function will print Suspects include: Alan, Steve, Adam, Ally but the next linw will print Suspect three is John as the allSuspects variable will read the local variable suspectThree but the next line will read the global variable suspectThree

// Episode 5

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// detectiveInfo will print Poirot as in the function the name is redefined to this

// Episode 6

var murderer = 'John';

var outerFunction = function() {
  var murderer = 'Ally';

  var innerFunction = function() {
    murderer = 'Steve';
  }

  innerFunction();
}

outerFunction();
console.log('The murderer is', murderer);

// outerFunction will print nothing as there is no return, the next line will print The murderer is John as John is the global variable

// Episode 7

var name = "Sam"

var name = function(name){
  name = "Stuart"
  console.log(name);
}
name(name, "Dale");
