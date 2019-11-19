
class Person {
  constructor(name = 'Anonymous Name', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    //return 'Hello, ' + this.name + '!';
    // Template string:
    return `Hello, ${this.name}!!!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }

}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }
    return description;
  }
}

// Traveler -> Person
// Add support for homelocaton
// Override getGreeting
// 1. Hi. I am Jon Snow. I'm visiting from Winterfell
// 2. Hi. I am Jon Snow.

class Traveler extends Person {
  constructor(name, age, homelocation) {
    super(name, age);
    this.homelocation = homelocation;
  }
  hasHomelocation() {
    return !!this.homelocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasHomelocation()) {
      greeting += ` I'm visiting from ${this.homelocation}.`
    }
    return greeting;
  }
}



const me = new Traveler('Jon Snow', 14, 'Winterfell');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());