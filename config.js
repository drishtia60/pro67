import firebase from 'firebase';

// add SDK Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAg5r-k-fj2kTpVMsriANG9e7OMUEe_rU",
    authDomain: "pro58-d6adc.firebaseapp.com",
    databaseURL: "https://pro58-d6adc-default-rtdb.firebaseio.com",
    projectId: "pro58-d6adc",
    storageBucket: "pro58-d6adc.appspot.com",
    messagingSenderId: "771181835598",
    appId: "1:771181835598:web:17a00929a62947b6371a1f",
    measurementId: "G-PLHV5JXFCF"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();