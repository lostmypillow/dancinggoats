import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#D97706',
      light: '#6B3F2F',
      dark: '#6B3F2F',
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
   <ThemeProvider theme={darkTheme}><React.StrictMode>
      
    <App />
    <CssBaseline />
  </React.StrictMode>
  </ThemeProvider>,
)
