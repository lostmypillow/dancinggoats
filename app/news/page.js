"use client"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Button } from "@mui/material";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBWf6o5RXpy5joJoZA3jeFw6IxbhlS1u-c",
    authDomain: "dancinggoats-b3d2b.firebaseapp.com",
    projectId: "dancinggoats-b3d2b",
    storageBucket: "dancinggoats-b3d2b.appspot.com",
    messagingSenderId: "430762138929",
    appId: "1:430762138929:web:9120813dc33a9f9d3ee410",
    measurementId: "G-5PJ76S5WFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
import { collection, getDocs } from "firebase/firestore"; 
async function handleClick() {
   const querySnapshot = await getDocs(collection(db, "announcements"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
}); 
}



export default function News() {
    return (
        <>
        i am News
        <Button onClick={handleClick}>get data</Button>
        </>
    )
}