"use client"
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InfoIcon from '@mui/icons-material/Info';
import { Button } from "@mui/material";
import { usePathname } from 'next/navigation'
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Link from "next/link";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { AppBar } from '@mui/material';
const pages = [
  {
    "name": "最新消息",
    "link": "/news",
  },
  {
    "name": "菜單",
    "link": "/menu",
  },
];


function LinkTab(props) {
  return (
    <Tab
      component="Link"

      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}
LinkTab.propTypes = {
  selected: PropTypes.bool,
};
function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}
export default function TopNav() {
  const pathname = usePathname()
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.

    setValue(newValue);

  };
// className="w-svw py-2 px-6 flex flex-row items-center justify-start gap-4 z-5 fixed top-0 h-18"
  return (
    <>
      <AppBar position='static' className='flex flex-row items-center justify-center md:justify-start gap-4 px-4 h-[72px]' >
   <img src="/icon.png" className=" h-8 w-8 " />
        <h1 className="flex font-semibold text-lg md:text-xl text-white "> Dancing Goats Coffee </h1>


   
          <Tabs className="hidden md:flex"
            value={pathname}
          >
            <Tab label="首頁" value="/"  component={Link} href="/" icon={<HomeIcon />} iconPosition="start" />
            <Tab label="最新消息" value="/news" component={Link} href="/news" icon={<InfoIcon />} iconPosition="start" />
            <Tab label="菜單" value="/menu"  component={Link} href="/menu" icon={<MenuBookIcon />} iconPosition="start" />
  
          </Tabs>

        </AppBar>

    </>
  );
}
