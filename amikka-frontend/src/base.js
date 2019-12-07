import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBclBpCNM6VHUngAM6wBBZnCiDyrbXd34c",
    authDomain: "amikka-tutoring.firebaseapp.com",
    databaseURL: "https://amikka-tutoring.firebaseio.com",
    projectId: "amikka-tutoring",
    storageBucket: "amikka-tutoring.appspot.com",
    messagingSenderId: "910104735740",
    appId: "1:910104735740:web:6aacceb88a5392972dcc79",
    measurementId: "G-GSKCLGP37E"
  };

const app = firebase.initializeApp({
    apiKey: firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
    databaseURL: firebaseConfig.databaseURL,
    projectId: firebaseConfig.projectId,
    storageBucket: firebaseConfig.storageBucket,
    messagingSenderId: firebaseConfig.messagingSenderId,
    appId: firebaseConfig.appId,
    measurementId: firebaseConfig.measurementId
});

export default app;