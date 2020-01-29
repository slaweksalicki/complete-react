import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAQzVCIQ6cmDRHsU7-Hg77XqmltBIS9lPQ",
  authDomain: "expensify-16f3e.firebaseapp.com",
  databaseURL: "https://expensify-16f3e.firebaseio.com",
  projectId: "expensify-16f3e",
  storageBucket: "expensify-16f3e.appspot.com",
  messagingSenderId: "518762954263",
  appId: "1:518762954263:web:656d2daf161649a40fa652"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set(
  {
    name: 'Jon Snow',
    age: 15,
    isSingle: false,
    location: {
      city: 'Winterfell',
      country: 'North'
    }
  }
);

// database.ref().set('This is my data.');

database.ref('age').set(17);
database.ref('location/city').set('The Wall');

database.ref('attributes').set({
  height: 175,
  weight: 80
});