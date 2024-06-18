"use client";

import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import CallIcon from "@mui/icons-material/Call";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Divider from "@mui/material/Divider";
import { Card, CardContent } from "@mui/material";
import { getLatestDoc } from "../utils/firebase";
import * as React from "react";

function Socials() {
  return (
    <>
      <div className="flex flex-row text-xl items-center justify-center">
        <label>社群: </label>
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
    <div className="flex flex-row gap-2 text-xl">
      <label>地址: </label>
      <a
        href="https://maps.app.goo.gl/dgUTGJ4EcQvuUzxu7"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-400"
      >
        台北市大安區新生南路三段6-1號
      </a>
    </div>
  );
}

function Actions() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Button href="/menu" variant="contained" startIcon={<MenuBookIcon />}>
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
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import convertTime from "./converttime";
function Hero() {
  const [latestnews, setLatestNews] = useState();
  async function getAnn() {
    const latest = await getLatestDoc("ann");
    console.log(latest);
    setLatestNews(latest);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl">跳舞山羊咖啡</h1>
      <Button onClick={getAnn}>Button</Button>
      <Location />
      <Socials />
      <Card variant="outlined" className="min-w-full">
        <CardContent>
          <h1 className="font-bold text-2xl">{latestnews?.title}</h1>
          <h2 className="font-light text-sm">
            {convertTime(latestnews?.time).date} at{" "}
            {convertTime(latestnews?.time).time}
          </h2>
          <p>{latestnews?.content}</p>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        href="/news"
        endIcon={<ArrowForwardOutlinedIcon />}
      >
        更多最新消息
      </Button>
      <Divider flexItem />
    </div>
  );
}

function AboutUs() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-4 gap-4">
        <label className="text-center text-3xl">關於我們</label>
        <p className="md:px-[25%] px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Divider flexItem />
    </>
  );
}

function WeAreFresh() {
  return (
    <div className="flex flex-col items-center justify-center py-4 gap-4">
      <label className="text-center text-3xl">簡單健康</label>
      <p className="md:px-[25%] px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <Divider flexItem />
    </div>
  );
}

function HighlightedFood() {
  return (
    <div className="flex  flex-col items-center justify-center py-4 gap-4">
      <label className="text-center text-3xl">精粹萃取、新鮮烘焙</label>
      <div className="flex flex-col md:flex-row max-w-svw gap-8 ">
        <img src="placeholder.png" />
      </div>
      <Button
        variant="contained"
        href="/menu"
        endIcon={<ArrowForwardOutlinedIcon />}
      >
        去看菜單
      </Button>
      <Divider flexItem />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full h-full">
        <Hero />
        <AboutUs />
        <WeAreFresh />
        <HighlightedFood />
      </main>
    </>
  );
}
