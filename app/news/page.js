"use client";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
import { doc, setDoc, Timestamp } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";
import { TextField } from "@mui/material";

import CircularProgress from '@mui/material/CircularProgress';
export default function News() {
  const [listy, setListy] = useState([]);
// const listy = [
//     {
//         "time": {
//             "seconds": 1718611326,
//             "nanoseconds": 544000000
//         },
//         "title": "dfsfs",
//         "content": "sdfsdfsfsdf"
//     },
//     {
//         "title": "i am title",
//         "content": "i am content blah blah blah",
//         "time": {
//             "seconds": 1718263001,
//             "nanoseconds": 710000000
//         }
//     }
// ]

    
useEffect(() => {
    handleget()
   }, []);
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

  async function handleget() {
    setLoading(true)
    const querySnapshot = await getDocs(collection(db, "ann"));

    const firestoreData = querySnapshot.docs.map((doc) => doc.data());
    console.log(firestoreData);
    firestoreData.sort((a, b) => b.time.seconds - a.time.seconds);
    setLoading(false)
    setListy(firestoreData);
    
  }
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "UTC",
  };
  const [titletext, setTitletext] = useState("");
  const [contenttext, setContenttext] = useState("");
  function handleContent(e) {
    setContenttext(event.target.value);
  }

  function handleTitle(e) {
    setTitletext(event.target.value);
  }
  async function buttonDoc() {
    const timestamp = Timestamp.now();
  const seconds = timestamp.seconds.toString();
    const docData = {
      title: titletext,
      content: contenttext,
      time: timestamp,
    };
    await setDoc(doc(db, "ann", `ann${seconds}`), docData);
    handleget()
  }

  const [loading, setLoading] = useState(false)
  return (
    <>
   <h1 className="text-4xl font-bold">最新消息</h1>   


{/* 
      <Button onClick={handleget}>get data</Button> */}

<div className="flex flex-col gap-4 pt-4  w-full items-start justify-center">
    
    
{loading? <CircularProgress /> : null}
     {listy?.map((item, key) => {
   
        const { seconds, nanoseconds } = item.time;
        const timestampInMillis = seconds * 1000 + nanoseconds / 1000000;
        const jsDate = new Date(timestampInMillis);
        const formattedDate = format(jsDate, "MMMM dd, yyyy");
        const formattedTime = format(jsDate, "HH:mm:ss");
        return (
          <Card variant="outlined" className="min-w-full" key={key}>
            <CardContent>
              <h1 className="font-bold text-2xl">{item.title}</h1>
              <h2 className="font-light text-sm">
                {formattedDate} at {formattedTime}
              </h2>
              <p>{item.content}</p>
            </CardContent>
          </Card>
        );
      })}</div>
      
    <div className="flex flex-col items-center justify-center gap-6 pt-8">
        <h1 className="text-4xl font-bold">在此新增公告</h1>
        <TextField
        value={titletext}
        onChange={handleTitle}
        id="filled-basic"
        label="標題"
        variant="filled"
      />
      <br />
      <TextField
        value={contenttext}
        onChange={handleContent}
        id="filled-basic"
        label="內容"
        variant="filled"
      />
      <Button variant="outlined" onClick={buttonDoc}>
        新增公布
      </Button>
      
      
      
      </div> 
      
    </>
  );
}
