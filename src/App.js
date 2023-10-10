import "./App.css";
import Sidebar from "./components/SidebarSection/Sidebar";
import Header from "./components/HeaderSection/Header";
import Content from "./components/Content";

import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorSection/ErrorPage";
import Settings from "./components/testComponents/Settings";
import Ehsan from "./components/testComponents/Ehsan";
import Nasim from "./components/testComponents/Nasim";
import Mustafa from "./components/testComponents/Mustafa";
import Hamid from "./components/testComponents/Hamid";
import Raziq from "./components/testComponents/Raziq";
import Ahmad from "./components/testComponents/Ahmad";
import BackUp from "./components/testComponents/BackUp";
import Info from "./components/testComponents/Info";
import Exit from "./components/testComponents/Exit";

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
      <BrowserRouter>
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
        <Routes>
          <Route
            path="/"
            element={
              <Content
                setOpenSideBar={setOpenSideBar}
                openSidebar={openSidebar}
                className="content"
              />
            }
          />
          <Route
            path="/ehsan"
            element={
              <Ehsan
                setOpenSideBar={setOpenSideBar}
                openSidebar={openSidebar}
              />
            }
          />
          <Route
            path="/nasim"
            element={
              <Nasim
                setOpenSideBar={setOpenSideBar}
                openSidebar={openSidebar}
              />
            }
          />
          <Route
            path="/mustafa"
            element={
              <Mustafa
                setOpenSideBar={setOpenSideBar}
                openSidebar={openSidebar}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <Settings
                setOpenSideBar={setOpenSideBar}
                openSidebar={openSidebar}
              />
            }
          />
          <Route
            path="/hamid"
            element={
              <Hamid
                setOpenSideBar={setOpenSideBar}
                openSidebar={openSidebar}
              />
            }
          />
          <Route
            path="/raziq"
            element={
              <Raziq
                setOpenSideBar={setOpenSideBar}
                openSidebar={openSidebar}
              />
            }
          />
          <Route
            path="/ahmad"
            element={
              <Ahmad
                setOpenSideBar={setOpenSideBar}
                openSidebar={openSidebar}
              />
            }
          />
          <Route
            path="/backup"
            element={
              <BackUp
                setOpenSideBar={setOpenSideBar}
                openSidebar={openSidebar}
              />
            }
          />
          <Route
            path="/info"
            element={
              <Info setOpenSideBar={setOpenSideBar} openSidebar={openSidebar} />
            }
          />
          <Route
            path="/exit"
            element={
              <Exit setOpenSideBar={setOpenSideBar} openSidebar={openSidebar} />
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
