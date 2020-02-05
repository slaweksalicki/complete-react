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

//child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });


// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });



// database.ref('expenses').push({
//   description: 'Wine',
//   note: 'red wine from Spain',
//   amount: 1200,
//   createdAt: 45235234525,
// });


// database.ref('notes').push({
//   title: 'Course topic',
//   body: 'React native'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })



// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('Error with data fetching', e);
//   });

// setTimeout(() => {
//   database.ref('age').set(16);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(18);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   });

// database.ref().set(
//   {
//     name: 'Jon Snow',
//     age: 15,
//     stressLevel: 6,
//     job: {
//       title: 'Bastard',
//       company: 'Starks'
//     },
//     location: {
//       city: 'Winterfell',
//       country: 'North'
//     }
//   }
// ).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('This failed.', error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Night Watch',
//   'location/city': 'The Wall'
// });

//database.ref('isSingle').set(null);

// database.ref().set('This is my data.');

// database.ref('age').set(17);
// database.ref('location/city').set('The Wall');

// database.ref('attributes').set({
//   height: 175,
//   weight: 80
// }).then(() => {
//   console.log('Data is saved 2');
// }).catch((error) => {
//   console.log('This failed 2.', error);
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((error) => {
//     console.log('Did not remove data', error);
//   });