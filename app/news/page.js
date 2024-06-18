"use client"
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Button, Card, CardContent, TextField, CircularProgress } from "@mui/material";
import { getCollectionDocs, addDocToCollection } from '../../utils/firebase';
import convertTime from "../converttime";
export default function News() {
  const [listy, setListy] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGet();
  }, []);

  async function handleGet() {
    setLoading(true);
    const firestoreData = await getCollectionDocs("ann");
    firestoreData.sort((a, b) => b.time.seconds - a.time.seconds);
    setLoading(false);
    setListy(firestoreData);
  }




  return (
    <>
      <h1 className="text-4xl font-bold">最新消息</h1>

      <div className="flex flex-col gap-4 pt-4  w-full items-start justify-center">
        {loading ? <CircularProgress /> : null}
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
                  {convertTime(item.time).date} at {convertTime(item.time).time}
                </h2>
                <p>{item.content}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      
    </>
  );
}
