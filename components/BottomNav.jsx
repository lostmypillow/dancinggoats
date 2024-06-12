"use client"
import { useState } from 'react'
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InfoIcon from '@mui/icons-material/Info';
import Link from 'next/link';
import {usePathname} from 'next/navigation'

export default function BottomNav() {

  const pathname = usePathname()
  return (
    <div className="z-100 fixed w-svw bottom-0 md:hidden ">
   
      <BottomNavigation
        showLabels
        value={pathname}
       
      >
        <BottomNavigationAction
          label="首頁"
          value={"/"}
          href='/'
          icon={<HomeIcon />}
          component={Link}
        />

        <BottomNavigationAction
          label="最新消息"
          value={"/news"}
          icon={<InfoIcon />}
          href='/news'
          component={Link}
          />
          
          <BottomNavigationAction
          label="菜單"
          value={"/menu"}
          icon={<MenuBookIcon />
            
          }  component={Link}
          href='/menu'
        />
      </BottomNavigation>
    </div>
  );
}


