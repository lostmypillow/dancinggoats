"use client";




import HomeIcon from '@mui/icons-material/Home';
import { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import CallIcon from "@mui/icons-material/Call";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Divider from '@mui/material/Divider';

import * as React from "react";





function Socials() {
  return (
    <>
      <div className="flex flex-row">
        <IconButton
          size="large"
          href="https://www.facebook.com/people/%E8%B7%B3%E8%88%9E%E5%B1%B1%E7%BE%8A%E7%B2%BE%E5%93%81%E5%92%96%E5%95%A1%E9%A4%A8-%E5%A3%B9%E8%99%9F%E5%BA%97/100063938147830/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </IconButton>

        <IconButton
          size="large"
          href="https://www.instagram.com/dancing_goats_coffee_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </IconButton>
      </div>
    </>
  );
}

function Location() {
  return (
    <Button
      href="https://maps.app.goo.gl/dgUTGJ4EcQvuUzxu7"
      target="_blank"
      rel="noopener noreferrer"
    >
      台北市大安區新生南路三段6-1號
    </Button>
  );
}

function Actions() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Button href='/menu' variant="contained" startIcon={<MenuBookIcon />}>
        Menu
      </Button>
      <Button
        variant="contained"
        href="tel:0223695899"
        startIcon={<CallIcon />}
        
      >
        (02) 2369 5899
      </Button>
    </div>
  );
}

export default function Home() {
  return (
  <>
 
      <main className="flex flex-col items-center justify-center w-full h-full">

<h1 className='text-4xl'>跳舞山羊咖啡</h1>

<img src='placeholder.png' />
        <p>新鮮烘焙</p>
        
        <Divider flexItem />
        <p>精粹萃取</p>
        <Divider flexItem />
        <p>簡單健康</p>
        <Divider flexItem />
        <p>外帶型咖啡</p>
        <Divider flexItem />
        <p>平價中的精品店</p>
        <Location />
        <Socials />
        <Actions />

       
       
      </main>
  </>
  );
}
