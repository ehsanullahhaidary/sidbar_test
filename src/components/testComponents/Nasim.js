import React from "react";
import "./tempCss.css";
import { useEffect } from "react";
import { useState } from "react";

function Nasim({ openSidebar, setOpenSideBar }) {
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
        <h1>Nasim's Page</h1>
        <p>if any problem, contact me</p>
      </div>
    </div>
  );
}

export default Nasim;
