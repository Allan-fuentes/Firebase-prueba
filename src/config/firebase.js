import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';
// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyDoritEcAGH7ZMJcKBy_wf96HFgpzRFgv8",
  authDomain: "practica-firebase-20220406.firebaseapp.com",
  projectId: "practica-firebase-20220406",
  storageBucket: "practica-firebase-20220406.appspot.com",
  messagingSenderId: "1000518601106",
  appId: "1:1000518601106:web:72ccb6ea22f4355b9b594b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (app) {
  console.log('Firebase initialized successfully');
} else {
  console.log('Firebase initialization failed');
}

const database = getFirestore(app);
if (database) {
  console.log('Firestore initialized correctly');
} else {
  console.log('Firestore initialization failed');
}

const storage = getStorage(app);

if (storage) {
  console.log('storage initialized correctly');
} else {
  console.log('storage initialization failed');
}

export { database,storage };
