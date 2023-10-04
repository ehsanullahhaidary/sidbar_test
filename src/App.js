import "./App.css";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import { useState } from "react";

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
  return (
    <div className="app">
      <Header
        togglelang={toggleDirection}
        toggleSidebar={handleToggleSideBar}
      />
      <Sidebar showSidebar={showSidebar} />
    </div>
  );
}

export default App;
