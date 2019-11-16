'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  // console.log(arguments);
  return a + b;
};
console.log(add(45, 5));

// this keyword - no longer bound

var user = {
  name: 'Arya',
  cities: ['Winterfell', 'Kings Landing', 'Braavos'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};
console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
  // numbers array
  numbers: [2, 3, 4],
  // multiplyBy - single number
  multiplyBy: 3,
  // multiply return new array where the number hve been multiplied
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (num) {
      return _this2.multiplyBy * num;
    });
  }
};

console.log(multiplier.multiply()); // [1,2,3] 2 [2,4,6]
