var nameVar = 'Jon';
var nameVar = 'Robb';
console.log('nameVar', nameVar);

let nameLet = 'Arya';
nameLet = 'Sansa';
console.log('nameLet', nameLet);

const nameConst = 'Bran';
// nameConst = 'Rickon';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Jon Snow';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
