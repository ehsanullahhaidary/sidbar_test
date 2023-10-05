import React from "react";
import "./content.css";

function Content({ openSidebar }) {
  return (
    <div className={openSidebar ? "content margin" : "content"}>Content</div>
  );
}

export default Content;
