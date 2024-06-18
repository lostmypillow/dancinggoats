import { format } from 'date-fns'; // Import format function from date-fns or any other date formatting library

export default function convertTime(timestamp) {
    if (!timestamp || typeof timestamp !== 'object' || !timestamp.seconds || !timestamp.nanoseconds) {
        console.error('Invalid timestamp object:', timestamp);
        return {
          date: '',
          time: '',
          datetime: null
        };
      }
      const {seconds, nanoseconds} = timestamp
  const timestampInMillis = seconds * 1000 + nanoseconds / 1000000;
  const jsDate = new Date(timestampInMillis);
  const formattedDate = format(jsDate, "MMMM dd, yyyy");
  const formattedTime = format(jsDate, "HH:mm:ss");

  return {
    date: formattedDate,
    time: formattedTime,
    datetime: jsDate // Optionally return the JavaScript Date object if needed
  };
}