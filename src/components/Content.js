import React from "react";
import "./content.css";
import { useEffect } from "react";
import { useState } from "react";

function Content({ openSidebar }) {
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
      className={
        mobileSize
          ? "darken content"
          : "content" && openSidebar
          ? "content margin"
          : "content"
      }
    >
      ContentContentContentContentContentContentContent
    </div>
  );
}

export default Content;
