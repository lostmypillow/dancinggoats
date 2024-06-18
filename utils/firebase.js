// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, Timestamp,  query, orderBy, limit } from "firebase/firestore";
import { redirect } from 'next/navigation'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWf6o5RXpy5joJoZA3jeFw6IxbhlS1u-c",
  authDomain: "dancinggoats-b3d2b.firebaseapp.com",
  projectId: "dancinggoats-b3d2b",
  storageBucket: "dancinggoats-b3d2b.appspot.com",
  messagingSenderId: "430762138929",
  appId: "1:430762138929:web:9120813dc33a9f9d3ee410",
  measurementId: "G-5PJ76S5WFL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


// Firestore interaction functions
export async function getCollectionDocs(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map((doc) => doc.data());
}

// export async function addDocToCollection(collectionName, docData) {
//   const timestamp = Timestamp.now();
//   const seconds = timestamp.seconds.toString();
//   await setDoc(doc(db, collectionName, `doc${seconds}`), docData);
// }

export async function getLatestDoc(collectionName) {
    const latestDocQuery = query(
      collection(db, "ann"),
      orderBy("time", "desc"),
      limit(1)
    );
    const querySnapshot = await getDocs(latestDocQuery);
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    } else {
      return null;
    }
  }

  import {
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged as _onAuthStateChanged,
  } from "firebase/auth";
  
//   import { getAuth } from "firebase/auth";

// export function CheckCredentials(email) {
//     if (email === 'jmlin0101@gmail.com' || email === 'yourdeveloper@example.com') {
//         return true
//       } else {
//         return false;
//       }

// }


//   export async function FirebaseSignIn() {
//     const provider = new GoogleAuthProvider();
//     const auth = getAuth();
//     auth.useDeviceLanguage();
  
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
  
//       // Check if the signed-in user's email is authorized
//       if (CheckCredentials(user.email) ==  true) {
//         return true
//       } else {
//         return false
//       }
//     } catch (error) {
//       console.error('Error signing in with Google:', error.message);
//       throw error; // Optionally handle or log errors
//     }
//   }