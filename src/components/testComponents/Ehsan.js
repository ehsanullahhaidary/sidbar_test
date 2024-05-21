import React from "react";
import "./tempCss.css";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

function Ehsan() {
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
          ? "darken content"
          : "content" && ctx.openSidebar && ctx.direction === "rtl"
          ? "content margin"
          : "content" && ctx.openSidebar && ctx.direction === "ltr"
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
