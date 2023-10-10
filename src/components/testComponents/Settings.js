import { useEffect } from "react";
import "./tempCss.css";
import { useState } from "react";

export default function Settings({ openSidebar, setOpenSideBar }) {
  // setup for mobile size and pc sizes to set dark screen on contents or not
  const [mobileSize, setMobileSize] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 500) {
      if (openSidebar === true) {
        setMobileSize(true);
      } else {
        setMobileSize(false);
      }
    } else {
      setMobileSize(false);
    }
  }, [openSidebar]);

  return (
    <div
      onClick={() => {
        if (openSidebar === true && window.innerWidth < 500) {
          setOpenSideBar(false);
        }
      }}
      className={
        mobileSize
          ? "darken content"
          : "content" && openSidebar
          ? "content margin"
          : "content"
      }
    >
      <div id="temp-page">
        <h1>Settings Page</h1>
        <p>Setup your settings.</p>
      </div>
    </div>
  );
}
