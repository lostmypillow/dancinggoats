import { useEffect } from 'react'
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import Divider from "@mui/material/Divider";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function App() {

  useEffect(() => {
    // Load the Facebook SDK script
    const fbScript = document.createElement('script');
    fbScript.async = true;
    fbScript.defer = true;
    fbScript.crossOrigin = 'anonymous';
    fbScript.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0';
    fbScript.onload = () => {
      // Initialize the SDK after it loads
      window.FB?.init({
        xfbml: true,
        version: 'v20.0'
      });
    };
    document.body.appendChild(fbScript);

    // Clean up the script when the component is unmounted
    return () => {
      if (fbScript.parentNode) {
        fbScript.parentNode.removeChild(fbScript);
      }
    };
  }, []);

  return (
    <>
      <main className="flex flex-col md:flex-row items-start justify-center w-svw h-full px-4 py-6 gap-4">

        <div className='flex flex-col items-start justify-start gap-4'>
          <img src="/icon.webp" alt="logo" />
          <h1 className="text-4xl md:text-6xl font-bold">跳舞山羊咖啡<br className='md:hidden' />Dancing Goats Coffee</h1>

          <Button
            size="large"
            href="https://www.instagram.com/dancing_goats_coffee_/"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<InstagramIcon />}
          >
            dancing_goats_coffee_
          </Button>

          <Button
            size="large"
            href="https://www.facebook.com/profile.php?id=100063938147830"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<FacebookIcon />}
          >
            跳舞山羊精品咖啡館 壹號店
          </Button>

          <Button
            size="large"
            href="https://maps.app.goo.gl/dgUTGJ4EcQvuUzxu7"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LocationOnIcon />}
          >
            台北市大安區新生南路三段6-1號
          </Button>

          <Button
            size="large"
            href="tel:0223695899"
            startIcon={<CallIcon />}
          >
            (02) 2369 5899
          </Button>

        </div>

        <Divider className='md:hidden' flexItem />

        <div className='flex flex-col items-start justify-start gap-4'>

          <h2 className='text-2xl md:text-4xl font-semibold'>
            最新消息
          </h2>

          <div
            className="fb-page"
            data-href="https://www.facebook.com/profile.php?id=100063938147830"
            data-tabs="timeline"
            data-width=""
            data-height=""
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="false">
            <blockquote
              cite="https://www.facebook.com/profile.php?id=100063938147830"
              className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/profile.php?id=100063938147830">
                跳舞山羊精品咖啡館 壹號店
              </a>
            </blockquote>
          </div>

          <Divider flexItem />

          <h2 className='text-2xl md:text-4xl font-semibold'>
            關於我們
          </h2>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <Divider flexItem />
          <h2 className='text-2xl md:text-4xl font-semibold'>菜單</h2>
        </div>

      </main>
    </>
  )
}

export default App
