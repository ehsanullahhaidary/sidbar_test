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
import AuthContext from "./store/auth-context";

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
    if (document.body.dir === "rtl") {
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
    // <div className="app">
    <AuthContext.Provider
      value={{
        openSidebar: openSidebar,
        direction: direction,
        showSidebar: showSidebar,
        togglelang: toggleDirection,
        openSidebarHandler: openSidebarHandler,
        setOpenSideBar: setOpenSideBar,
      }}
    >
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/ehsan" element={<Ehsan />} />
          <Route path="/nasim" element={<Nasim />} />
          <Route path="/mustafa" element={<Mustafa />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/hamid" element={<Hamid />} />
          <Route path="/raziq" element={<Raziq />} />
          <Route path="/ahmad" element={<Ahmad />} />
          <Route path="/backup" element={<BackUp />} />
          <Route path="/info" element={<Info />} />
          <Route path="/exit" element={<Exit />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
    // </div>
  );
}

export default App;
