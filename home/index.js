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