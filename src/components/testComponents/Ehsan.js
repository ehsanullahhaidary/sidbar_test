import React, { useContext } from "react";
import "./tempCss.css";
import { useEffect } from "react";
import { useState } from "react";
import AuthContext from "../../store/auth-context";

function Ehsan({ openSidebar, setOpenSideBar }) {
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

  const ctx = useContext(AuthContext);

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
          : "content" && openSidebar && ctx.direction === "rtl"
          ? "content margin"
          : "content" && openSidebar && ctx.direction === "ltr"
          ? "content margin-left"
          : "content"
      }
    >
      <div id="temp-page">
        <h1>Ehsan's Page</h1>
        <p>if any problem, contact me</p>
      </div>
    </div>
  );
}

export default Ehsan;
