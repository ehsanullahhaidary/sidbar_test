import React from "react";
import "./content.css";
import { useEffect } from "react";
import { useState } from "react";
import VideoContainer from "./videoSection/VideoContainer";

function Content({ openSidebar, setOpenSideBar }) {
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
  console.log(mobileSize);
  return (
    <div
      onClick={() => {
        if (openSidebar === true && window.innerWidth < 500) {
          setOpenSideBar(false);
          console.log("first");
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
