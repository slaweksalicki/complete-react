// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(45, 5));


// this keyword - no longer bound

const user = {
  name: 'Arya',
  cities: ['Winterfell', 'Kings Landing', 'Braavos'],
  printPlacesLived() {

    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  // numbers array
  numbers: [2, 3, 4],
  // multiplyBy - single number
  multiplyBy: 3,
  // multiply return new array where the number hve been multiplied
  multiply() {
    return this.numbers.map((num) => this.multiplyBy * num);
  }
};

console.log(multiplier.multiply());  // [1,2,3] 2 [2,4,6]