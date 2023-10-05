import React, { useState } from "react";
import { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import CopyrightIcon from "@mui/icons-material/Copyright";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.css";

function Header({ togglelang, toggleSidebar, openSidebarHandler }) {
  // header timer state and setup start
  const [getTime, setTime] = useState(new Date());
  useEffect(() => {
    var timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  // timer setup end

  const setSidebar = () => {
    toggleSidebar();
  };

  return (
    <div className="header">
      {/* header left side ends here */}

      <div className="header__right-side">
        <MenuIcon className="menu" onClick={openSidebarHandler} />
        <span className="header__right-side--user_name">Abdullah</span>
      </div>

      {/* header left side starts here */}
      <div className="header__left-side">
        <span className="time">
          {getTime.toLocaleTimeString("fa", {
            hour12: true,
          })}
        </span>
        <AccountCircleIcon className="icon" />
        <TurnRightIcon className="icon header__left-side--turn-right" />
        <CopyrightIcon className="icon" />
        <NotificationsIcon className="bell icon" />
        <LanguageIcon onClick={togglelang} className="icon" />
        <FullscreenIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
