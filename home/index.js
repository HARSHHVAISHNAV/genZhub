// Firebase configuration (replace with your actual Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyCBa4WVRATdJMoAKUWnsEZxnOHvctenteo",
  authDomain: "aboutform-be3c1.firebaseapp.com",
  databaseURL: "https://aboutform-be3c1-default-rtdb.firebaseio.com",
  projectId: "aboutform-be3c1",
  storageBucket: "aboutform-be3c1.appspot.com",
  messagingSenderId: "577630884759",
  appId: "1:577630884759:web:72085b243c174dc6fe2ad2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Realtime Database
var aboutFormDB = firebase.database().ref("aboutForm");

// Event listener for the form submission
document.getElementById("aboutForm").addEventListener("submit", submitForm);

// Function to handle form submission
function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var message = getElementVal("message");

  saveMessage(name, email, message);

  document.getElementById("aboutForm").reset();
}

// Function to save messages to the Realtime Database
const saveMessage = (name, email, message) => {
  var newAbout = aboutFormDB.push();

  newAbout.set({
      name: name,
      email: email,
      message: message,
  });
}

// Function to get the value of an element by its ID
const getElementVal = (id) => {
  return document.getElementById(id).value;
}
// 
// 
// button redirect function starts from here
document.addEventListener("DOMContentLoaded", function() {
  // Find the button element by its id
  var redirectButton = document.getElementById("account");

  // Add a click event listener to the button
  redirectButton.addEventListener("click", function() {
      // Redirect the user to another page within the same project
      window.location.href = "../register/login/profile.html"; // Replace "another-page.html" with the path to your desired page
  });

  var redirectButtona = document.getElementById("about-us");
  redirectButtona.addEventListener("click", function() {
    // Redirect the user to another page within the same project
    window.location.href = "about.html"; // Replace "another-page.html" with the path to your desired page  
});
  var redirectButtond = document.getElementById("about-us-a");
  redirectButtond.addEventListener("click", function() {
    // Redirect the user to another page within the same project
    window.location.href = "about.html"; // Replace "another-page.html" with the path to your desired page  
});
  var redirectButtonb = document.getElementById("forums");
  redirectButtonb.addEventListener("click", function() {
    // Redirect the user to another page within the same project
    window.location.href = "../forum/forum.html"; // Replace "another-page.html" with the path to your desired page  
});
  var redirectButtonc = document.getElementById("forums-a");
  redirectButtonc.addEventListener("click", function() {
    // Redirect the user to another page within the same project
    window.location.href = "../forum/forum.html"; // Replace "another-page.html" with the path to your desired page  
});
  var redirectButtone = document.getElementById("tech-page");
  redirectButtone.addEventListener("click", function() {
    // Redirect the user to another page within the same project
    window.location.href = "../tech/tech.html"; // Replace "another-page.html" with the path to your desired page  
});
  var redirectButtonf = document.getElementById("busi-page");
  redirectButtonf.addEventListener("click", function() {
    // Redirect the user to another page within the same project
    window.location.href = "../business/business.html"; // Replace "another-page.html" with the path to your desired page  
});
  var redirectButtong = document.getElementById("social-page");
  redirectButtong.addEventListener("click", function() {
    // Redirect the user to another page within the same project
    window.location.href = "../social/social.html"; // Replace "another-page.html" with the path to your desired page  
});
  var redirectButtonh = document.getElementById("ente-page");
  redirectButtonh.addEventListener("click", function() {
    // Redirect the user to another page within the same project
    window.location.href = "../entertainment/enter.html"; // Replace "another-page.html" with the path to your desired page  
});
 
});
