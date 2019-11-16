function square(x) {
  return x * x;
};

console.log(square(3));

// const squareArrow = (x) => {
//   return x * x;
// };

const squareArrow = (x) => x*x;

console.log(squareArrow(8));

// Challenge - Use arrow functions

const getFirstName = (name) => {
  return name.split(' ')[0];
};

const getFirstName2 = (name) => name.split(' ')[0];

console.log(getFirstName('Bran Stark'));
console.log(getFirstName2('Arya Stark'));