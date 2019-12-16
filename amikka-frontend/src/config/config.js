import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const config = {
  apiKey: "AIzaSyBclBpCNM6VHUngAM6wBBZnCiDyrbXd34c",
  authDomain: "amikka-tutoring.firebaseapp.com",
  databaseURL: "https://amikka-tutoring.firebaseio.com",
  projectId: "amikka-tutoring",
  storageBucket: "amikka-tutoring.appspot.com",
  messagingSenderId: "910104735740",
  appId: "1:910104735740:web:6aacceb88a5392972dcc79",
  measurementId: "G-GSKCLGP37E"
};

firebase.initializeApp(config);

export default firebase 