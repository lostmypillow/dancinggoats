"use client"
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Button } from "@mui/material";
import { usePathname } from 'next/navigation'
const pages = [
   {
    "name": "關於我們",
    "link": "/about",
   }, 
   {
    "name": "菜單",
    "link": "/menu",
   } , 
    ];
export default function TopNav() {
    const pathname = usePathname()
    return (

        <div className="w-screen px-4 py-2 flex items-center justify-start gap-4 z-5 fixed top-0 h-12">
          <MenuBookIcon />
          <div className="flex flex-row gap-4 font-mono font-semibold text-m md:text-lg text-white no-underline text-center">
            <h1> Dancing Goats Coffee </h1>
            <h2 className="md:hidden"> {
            pathname === "/admin" ? "ADMIN" :
            pathname === "/menu" ? "菜單" :
            pathname === "/about" ? "關於我們" :
               ""}</h2>
           
           
          </div>
       
          <div className="flex-grow flex-row hidden md:flex">
            {pages.map((page) => (
              <Button className="px-4 py-2 text-xl text-white block" href={page.link}>
                {page.name}
              </Button>
            ))}
          </div>
        </div>
  
    );
}
