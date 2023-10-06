import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";

import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [direction, setDirection] = useState(document.body.dir);

  // menu click handler for nav
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSideBar = () => {
    //togglesidebar with useState
    setShowSidebar(!showSidebar);
  };

  // useEffect(() => {
  //   //Runs only on the first render
  // }, [showSidebar]);

  const toggleDirection = () => {
    if (document.body.dir == "rtl") {
      document.body.dir = "ltr";
      setDirection("ltr");
      return;
    } else {
      document.body.dir = "rtl";
      setDirection("rtl");
    }
  };

  // sidebar open/close setup
  const [openSidebar, setOpenSideBar] = useState();

  const openSidebarHandler = () => {
    setOpenSideBar(!openSidebar);
  };

  useEffect(() => {
    if (window.innerWidth > 500) {
      setOpenSideBar(true);
    } else {
      setOpenSideBar(false);
    }
  }, []);

  const openNav = () => {
    // document.getElementsByClassName("sidebar").style.width = "256px";
    // document.getElementsByClassName("content").style.marginLeft = "256px";
  };
  const closeNav = () => {
    // document.getElementsByClassName("sidebar").style.width = "0";
    // document.getElementsByClassName("content").style.marginLeft = "0";
  };

  return (
    <div className="app">
      <Header
        togglelang={toggleDirection}
        // toggleSidebar={handleToggleSideBar}
        openSidebarHandler={openSidebarHandler}
      />
      <Sidebar
        openSidebarHandler={openSidebarHandler}
        openSidebar={openSidebar}
        showSidebar={showSidebar}
        setOpenSideBar={setOpenSideBar}
      />
      <Content
        setOpenSideBar={setOpenSideBar}
        openSidebar={openSidebar}
        className="content"
      />
    </div>
  );
}

export default App;
