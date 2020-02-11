import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyDPEx_ZRZ6eAW-JdcDB5tdfedrN5slTJoI",
    authDomain: "plataformahack.firebaseapp.com",
    databaseURL: "https://plataformahack.firebaseio.com",
    projectId: "plataformahack",
    storageBucket: "plataformahack.appspot.com",
    messagingSenderId: "908674634993",
    appId: "1:908674634993:web:08a21f3a105f5852964550"
  };
  // Initialize Firebase

  var Fire = firebase.initializeApp(firebaseConfig);

  export default Fire;
