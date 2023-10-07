import "./App.css";
import Sidebar from "./components/SidebarSection/Sidebar";
import Header from "./components/HeaderSection/Header";
import Content from "./components/Content";

import { useState } from "react";
import { useEffect } from "react";

function App() {
  // screen direction useState
  const [direction, setDirection] = useState(document.body.dir);

  // menu click handler for nav
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSideBar = () => {
    //togglesidebar with useState
    setShowSidebar(!showSidebar);
  };

  // screen direction rtl/ltr setup
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

  return (
    <div className="app">
      <Header
        togglelang={toggleDirection}
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
