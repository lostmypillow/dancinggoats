"use client"

import { ThemeProvider, createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#855A40',
      light: '#6B3F2F',
      dark: '#855A40',
    }
  },
});