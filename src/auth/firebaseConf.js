import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAxSWvHYeSDq3T3nDQXQlF7vLFYALrwl9Q",
  authDomain: "perruno-f0870.firebaseapp.com",
  databaseURL: "https://perruno-f0870.firebaseio.com",
  projectId: "perruno-f0870",
  storageBucket: "perruno-f0870.appspot.com",
  messagingSenderId: "487761333241",
  appId: "1:487761333241:web:afb42ba6e1a996c7e3cb28",
  measurementId: "G-3EX5234EHX"
  };
  const Firebase = firebase.initializeApp(config);
export default Firebase;