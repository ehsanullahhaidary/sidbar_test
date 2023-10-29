import React from "react";
import "./Content.css";
import { useEffect } from "react";
import { useState } from "react";
import VideoContainer from "./VideoSection/VideoContainer";

function Content({ openSidebar, setOpenSideBar, direction }) {
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
          ? "darken main-content"
          : "main-content" && openSidebar && direction === "rtl"
          ? "main-content margin"
          : "main-content" && openSidebar && direction === "ltr"
          ? "main-content margin-left"
          : "main-content"
      }
    >
      {/* videos with description ... */}
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
    </div>
  );
}

export default Content;
