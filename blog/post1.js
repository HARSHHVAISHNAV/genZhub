import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPb6O846-piMx9Oby1oi0EpbO_Uh2CcAk",
    authDomain: "reg-log-3cfe5.firebaseapp.com",
    databaseURL: "https://reg-log-3cfe5-default-rtdb.firebaseio.com",
    projectId: "reg-log-3cfe5",
    storageBucket: "reg-log-3cfe5.appspot.com",
    messagingSenderId: "129613168031",
    appId: "1:129613168031:web:09f7172c3a85d6c27dd1aa"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app)
const txtDB = getFirestore(app)

export {imgDB,txtDB};
