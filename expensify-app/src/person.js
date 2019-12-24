console.log('person.js is running!');

export const isAdult = (age) => {
  return age >= 18 ? true : false
};
// short version
export const canDrink = (age) => age >= 21;

const isSenior = (age) => age >= 65;

export default isSenior;