////
// Object destructuring
////

// const person = {
//   name: 'Jon',
//   age: 15,
//   location: {
//     city: 'Winterfell',
//     temp: 92
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

////
// Array destructuring
////

// const address = ['1299 Kings Road', 'Winterfell', 'North', '19785'];

// //const [street, city, state, zip] = address;
// const [, city, state = 'Kings Landing'] = address;

// console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , medium] = item;
// grab first and third item 
console.log(`A medium ${itemName} costs ${medium}`);