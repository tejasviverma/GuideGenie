$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getDatabase, ref, get, set, child } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAD6Uj40KwrKsdeEmUGsvo8lNwebuc0OYo",
    authDomain: "guidegenie-a2177.firebaseapp.com",
    projectId: "guidegenie-a2177",
    storageBucket: "guidegenie-a2177.appspot.com",
    messagingSenderId: "820065377823",
    appId: "1:820065377823:web:a12d42fde4c173827a3f2a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

//   get ref to data services
  const db = getDatabase(ref);

  document.getElementById("submit").addEventListener('click', function(e){

    set(ref(db, 'name/' + document.getElementById("name").value),{
        FullName: document.getElementById("name").value,
        UserName: document.getElementById("user").value,
        Email: document.getElementById("email").value,
        Password: document.getElementById("pass").value,

    });
        alert("Login Successful");
  })