import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore/lite';
import 'firebase/storage';

// Rishabh Bhaiya Vercel pe ye host hai
const firebaseConfig = {
  apiKey: "AIzaSyDIIdbHGwoP1XNjQ3x_GCedPgNy_Si1_Io",
  authDomain: "powerbyte-ems.firebaseapp.com",
  databaseURL: "https://powerbyte-ems-default-rtdb.firebaseio.com",
  projectId: "powerbyte-ems",
  storageBucket: "powerbyte-ems.appspot.com",
  messagingSenderId: "692941197797",
  appId: "1:692941197797:web:79610354fe47ae1b7c1f0c",
  measurementId: "G-69D92WERCL"
};


// Innovation@cii
// const firebaseConfig = {
//   apiKey: "AIzaSyAoY7CGCXeMxJ21ZkDzOlFfiZgyPm77yNg",
//   authDomain: "powertbyte-aiems.firebaseapp.com",
//   projectId: "powertbyte-aiems",
//   storageBucket: "powertbyte-aiems.appspot.com",
//   messagingSenderId: "481034484572",
//   appId: "1:481034484572:web:0d87a14b06efd7db711f99",
//   measurementId: "G-P32JGZCZ4B"
// };

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const analytics = getAnalytics(app);

const database = getDatabase(app);

const db = getFirestore(app); // Initialize Firestore

const storage = getStorage();

const storageRef = ref;

// const firstore = firebase.firestore();

// console.log(auth.currentUser.getIdToken().then((token) => {
//   console.log(token);
// }));

export { app, auth, analytics, database, db, storageRef, storage, getDownloadURL };
