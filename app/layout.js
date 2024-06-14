// import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from "@/components/Theme";
import { ThemeProvider } from "@mui/material/styles";

export const metadata = {
  title: "Dancing Goats Coffee",
  description: "good coffee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body><ThemeProvider theme={darkTheme}>
          <TopNav />
          <div className="pt-4 px-4 pb-16">
            {children}
          </div>
          <BottomNav />
          <CssBaseline />
         </ThemeProvider> </body>
    
    </html>
  );
}
