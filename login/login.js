// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAuth,signINWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDjQBz4Xu5S_v4sbgG3s_mx_Ajs_4l3RgQ",
    authDomain: "games-signup.firebaseapp.com",
    projectId: "games-signup",
    storageBucket: "games-signup.appspot.com",
    messagingSenderId: "1069776412043",
    appId: "1:1069776412043:web:dbeeb6e6b196951839a38e",
    measurementId: "G-V4D100RDTY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth()

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  function login(e){
    e.preventDefault();
    var obj = {
        emil:email.value,
        password:password.value,
    };
    signINWithEmailAndPassword(auth, obj.emil, obj.password)
    .then(function(success){
        console.log(user.uid)
        alert("Log in Successfully")
    })
    .catch(function(err)
    {
        alert("login Error" + err)
    })
    console.log(obj)
  }