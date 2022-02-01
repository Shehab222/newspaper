 import firebase from "firebase";
 // Your web app's Firebase configuration
  const firebaseConfig34 = {
    apiKey: "AIzaSyCQ8w75Xz0gzPS3e3__sKxqO4eDv4yq7OU",
    authDomain: "newsletter-66aae.firebaseapp.com",
    databaseURL: "https://newsletter-66aae-default-rtdb.firebaseio.com",
    projectId: "newsletter-66aae",
    storageBucket: "newsletter-66aae.appspot.com",
    messagingSenderId: "588088969117",
    appId: "1:588088969117:web:c52b5e230347ccb68c1174"
  };
  // Initialize Firebase
let app = firebase.initializeApp(firebaseConfig34);
 export default app.database();
