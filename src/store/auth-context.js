import React from "react";

const AuthContext = React.createContext({
  direction: document.body.dir,
  showSidebar: false,
});

export default AuthContext;
