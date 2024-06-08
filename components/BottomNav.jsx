"use client"
import { useState } from 'react'
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InfoIcon from '@mui/icons-material/Info';

import { useRouter } from 'next/navigation'

export default function BottomNav() {
  const [value, setValue] = useState(0);
  const router = useRouter();
  return (
    <div className="z-100 fixed w-svw bottom-0 md:hidden ">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          router.push(newValue)
        }}
      >
        <BottomNavigationAction
          label="首頁"
          value={"/"}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
        label="菜單"
        value={"menu"}
        icon={<MenuBookIcon />}
        />
        <BottomNavigationAction
        label="關於我們"
        value={"about"}
        icon={<InfoIcon />} />
      </BottomNavigation>
    </div>
  );
}


