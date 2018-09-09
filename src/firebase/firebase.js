import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };
//child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// set up expenses
// database.ref('expenses').push({
//   description : 'Rent',
//   note: 'Some note',
//   amount: 102000,
//   createdAt: 7686797869766
// });


// get expenses
// database.ref('expenses')
//   .on('value', (snapshot) => {

//     //console.log(snapshot.val());
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
//   });



// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
// }, (e) => {
//     console.log('error ', e)
// });

// setTimeout(() => {
//     database.ref('age').set(36);
// }, 3500);

// setTimeout(() => {
//     database.ref('age').set(76);
// }, 7500);


//subscribed to changes, off to unsub
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
// })


//Promise
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('error fetching data: ' + e)
//     })

// firebase.database().ref().set({
//     name: "Poop",
//     age: 25,
//     isSingle: false,
//     location: {
//         country: "Serbia",
//         city: "Belgrade",
//         street: "New poop street"
//     }
// }).then(() => {
//     console.log('saved data!');
// }).catch((err) => {
//     console.log('failed: '+ err);
// });

// firebase.database().ref('age').set(35);
// firebase.database().ref('location/city').set('Z. Polje');
// firebase.database().ref('attributes').set({
//     height: 171,
//     weight: 77
// }).then(() => {
//     console.log('saved data!');
// }).catch((err) => {
//     console.log('failed: '+ err);
// });

// const status = firebase.database().ref('isSingle');
// status.remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });