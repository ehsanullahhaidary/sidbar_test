import React from "react";

import "./navlink.css";
import { Divider, ListItemIcon, ListItemText, MenuItem } from "@mui/material";

// import { ContentCopy } from "@mui/icons-material";

function NavLink({ text, Icon, active, SecondIcon }) {
  console.log(SecondIcon);
  return (
    <div className="item">
      <MenuItem selected={active}>
        <ListItemIcon>
          <Icon fontSize="small" />
        </ListItemIcon>
        <ListItemText>{text}</ListItemText>
        {/* <ListItemIcon className={SecondIcon == "DashboardIcon" ? "hide" : ""}>
          <SecondIcon fontSize="small" />
        </ListItemIcon> */}
        {SecondIcon == "" ? (
          ""
        ) : (
          <ListItemIcon>
            <SecondIcon fontSize="small" />
          </ListItemIcon>
        )}
      </MenuItem>

      <Divider />
    </div>
  );
}

export default NavLink;
