import React from "react";
import "./Content.css";
import { useEffect } from "react";
import { useState } from "react";
import VideoContainer from "./VideoSection/VideoContainer";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

function Content() {
  // setup for mobile size and pc sizes to set dark screen on contents or not
  const [mobileSize, setMobileSize] = useState(false);

  const ctx = useContext(AuthContext);

  useEffect(() => {
    if (window.innerWidth < 500) {
      if (ctx.openSidebar) {
        setMobileSize(true);
      } else {
        setMobileSize(false);
      }
    } else {
      setMobileSize(false);
    }
  }, [ctx.openSidebar]);

  return (
    <div
      onClick={() => {
        if (ctx.openSidebar && window.innerWidth < 500) {
          ctx.setOpenSideBar(false);
        }
      }}
      className={
        mobileSize
          ? "darken main-content"
          : "main-content" && ctx.openSidebar && ctx.direction === "rtl"
          ? "main-content margin"
          : "main-content" && ctx.openSidebar && ctx.direction === "ltr"
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
