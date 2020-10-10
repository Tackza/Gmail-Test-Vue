const firebase = require('firebase')


var firebaseConfig = {
  apiKey: "AIzaSyCi9GtXAcxsG9E9jI3CKMlxnRT-3yTQ0wU",
  authDomain: "vue-19665.firebaseapp.com",
  databaseURL: "https://vue-19665.firebaseio.com",
  projectId: "vue-19665",
  storageBucket: "vue-19665.appspot.com",
  messagingSenderId: "385266932002",
  appId: "1:385266932002:web:bf99456c43eee9ccdd6d7b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  firestore: firebase.firestore()
};