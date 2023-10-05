import React, { useState } from "react";

import "./navlink.css";
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";

// import { ContentCopy } from "@mui/icons-material";

function NavLink({ text, Icon, active, SecondIcon, submenu }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="item">
      <MenuItem onClick={handleClick} selected={active}>
        <ListItemIcon>
          <Icon fontSize="small" />
        </ListItemIcon>
        <ListItemText>{text}</ListItemText>

        {SecondIcon == "" ? (
          ""
        ) : (
          <ListItemIcon>
            {/* <SecondIcon fontSize="small" /> */}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
        )}
      </MenuItem>
      <div className="sub-menu">
        {
          SecondIcon == ""
            ? ""
            : // submenu == undefined ? () : ()
              submenu.map((video, index) => (
                <Collapse key={index} in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4, textAlign: "start" }}>
                      {/* <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon> */}
                      <ListItemText primary={video} />
                    </ListItemButton>
                  </List>
                </Collapse>
              ))
          // <Collapse in={open} timeout="auto" unmountOnExit>
          //   <List component="div" disablePadding>
          //     <ListItemButton sx={{ pl: 4 }}>
          //       <ListItemIcon>
          //         <StarBorder />
          //       </ListItemIcon>
          //       <ListItemText primary="Starred" />
          //     </ListItemButton>
          //   </List>
          // </Collapse>
        }
      </div>

      <Divider className="devider" />
    </div>
  );
}

export default NavLink;
