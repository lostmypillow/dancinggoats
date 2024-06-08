// import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";
import CssBaseline from "@mui/material/CssBaseline";
// const inter = Inter({ subsets: ["latin"] });

import { darkTheme } from "@/components/Theme";
import { ThemeProvider } from "@mui/material/styles";

export const metadata = {
  title: "Dancing Goats Coffee",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={darkTheme}>
          <TopNav />
          <div className="pt-12 px-4">
            {children}
          </div>
          <BottomNav />
          <CssBaseline />
        </ThemeProvider>
      </body>
    </html>
  );
}