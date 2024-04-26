var firebaseConfig = {
  apiKey: "AIzaSyDPb6O846-piMx9Oby1oi0EpbO_Uh2CcAk",
  authDomain: "reg-log-3cfe5.firebaseapp.com",
  projectId: "reg-log-3cfe5",
  storageBucket: "reg-log-3cfe5.appspot.com",
  messagingSenderId: "129613168031",
  appId: "1:129613168031:web:09f7172c3a85d6c27dd1aa"
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

const firebaseApp = initializeApp(firebaseConfig);


function ProfilePage() {
  var userData = null;
  var setUserData = function(data) {
    userData = data;
    render();
  };

  var auth = firebase.auth();
  
  var fetchUserData = async function() {
    var currentUser = auth.currentUser;
    if (currentUser) {
      var db = firebase.firestore();
      var userRef = db.collection("users").doc(currentUser.uid);
      var userDoc = await userRef.get();
      if (userDoc.exists) {
        setUserData(userDoc.data());
      } else {
        console.log("No such document!");
      }
    }
  };

  var render = function() {
    var container = document.getElementById("profilePageContainer");
    if (userData) {
      container.innerHTML = `
        <div>
          <img src="${userData.photoURL}" alt="Profile" />
          <h2>Welcome, ${userData.displayName}</h2>
          <p>Email: ${userData.email}</p>
        </div>
      `;
    } else {
      container.innerHTML = "Loading...";
    }
  };

  fetchUserData();

  return null; // Since we're not using React, return null instead of JSX.
}


  
  document.addEventListener("DOMContentLoaded", function() {
    var profilePageContainer = document.getElementById("profilePageContainer");
    if (profilePageContainer) {
        userName.innerHTML = `
        <div>
          <img src="${userData.photoURL}" alt="Profile" />
          <h2>Welcome, ${userData.displayName}</h2>
          <p>Email: ${userData.email}</p>
        </div>
      `
        
    }
});