// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdcLEYVzyXDIEEd3wslvGexvL7-t3KDes",
  authDomain: "book-heaven-2114b.firebaseapp.com",
  projectId: "book-heaven-2114b",
  storageBucket: "book-heaven-2114b.firebasestorage.app",
  messagingSenderId: "7120389937",
  appId: "1:7120389937:web:1ef245ba7472200a769210",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// submit button

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Logged In Sucessfully");
      window.location.href = "loading.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Something Went Wrong");
      // ..
    });
});
