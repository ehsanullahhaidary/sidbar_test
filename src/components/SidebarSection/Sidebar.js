import React, { useState } from "react";
import "./Sidebar.css";
import NavSearch from "../NavSearchSection/NavSearch";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TuneIcon from "@mui/icons-material/Tune";
import PaidIcon from "@mui/icons-material/Paid";
import BackupIcon from "@mui/icons-material/Backup";
import CodeIcon from "@mui/icons-material/Code";
import { Info } from "@mui/icons-material";
import { Logout } from "@mui/icons-material";

import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { useEffect } from "react";

function Sidebar({ openSidebar, openSidebarHandler }) {
  // selected setup
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [opendevs, setOpendevs] = React.useState(false);
  const [opensecond, setOpenSecond] = React.useState(false);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  // collapse open/close setup
  const handleClickdevs = () => {
    setOpendevs(!opendevs);
  };
  const handleClickAccount = () => {
    setOpenSecond(!opensecond);
  };

  const [width, setWidth] = useState("");

  const getSize = () => {
    setWidth(window.innerWidth);
  };

  // useEffect for getting window size change in pixel
  useEffect(() => {
    window.addEventListener("resize", getSize);
    if (width < 500) {
      if (openSidebar == true) {
        openSidebarHandler();
      }
    } else {
      if (openSidebar == false) {
        openSidebarHandler();
      }
    }
    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, [window.innerWidth]);

  return (
    <div className={openSidebar ? "nav" : "hide"}>
      {/* search input at top of sidebar */}
      <NavSearch />

      {/* sidebar 1 items */}
      <div className="sidebar">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListSubheader component="div" id="nested-list-subheader">
            اصلی
          </ListSubheader>

          {/* sidebar item */}
          <MenuItem
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>دشبورد</ListItemText>
          </MenuItem>

          {/* devider between sidebar items*/}
          <Divider className="devider" />

          {/* sidebar 2 item */}
          <MenuItem
            selected={selectedIndex === 1}
            onClick={(event) => {
              handleClickdevs();
              handleListItemClick(event, 1);
            }}
          >
            <ListItemIcon>
              <CodeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>برنامه نویسان</ListItemText>
            <ListItemIcon>
              {opendevs ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          </MenuItem>

          {/* sidebar three collapsable items */}
          <Collapse in={opendevs} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                selected={selectedIndex === 11}
                onClick={(event) => handleListItemClick(event, 11)}
                sx={{ textAlign: "start" }}
              >
                <ListItemText primary="احسان الله" />
              </ListItemButton>
            </List>
          </Collapse>
          <Collapse in={opendevs} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                selected={selectedIndex === 12}
                onClick={(event) => handleListItemClick(event, 12)}
                sx={{ textAlign: "start" }}
              >
                <ListItemText primary="نسیم" />
              </ListItemButton>
            </List>
          </Collapse>
          <Collapse in={opendevs} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                selected={selectedIndex === 13}
                onClick={(event) => handleListItemClick(event, 13)}
                sx={{ textAlign: "start" }}
              >
                <ListItemText primary="مصطفی" />
              </ListItemButton>
            </List>
          </Collapse>

          {/* devider between items : the line */}
          <Divider className="devider" />

          {/* header for items */}
          <ListSubheader component="div" id="nested-list-subheader">
            تنظیمات
          </ListSubheader>

          {/* sidebar item */}
          <MenuItem
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <TuneIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>تنظیمات</ListItemText>
          </MenuItem>
          <Divider className="devider" />

          {/* sidebar item */}

          <MenuItem
            selected={selectedIndex === 3}
            onClick={(event) => {
              handleClickAccount();
              handleListItemClick(event, 3);
            }}
          >
            <ListItemIcon>
              <PaidIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>حساب ها</ListItemText>
            <ListItemIcon>
              {opensecond ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          </MenuItem>
          {/* sidebar collapsable item */}

          <Collapse in={opensecond} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                selected={selectedIndex === 31}
                onClick={(event) => handleListItemClick(event, 31)}
                sx={{ textAlign: "start" }}
              >
                <ListItemText primary="احسان الله" />
              </ListItemButton>
            </List>
          </Collapse>
          <Collapse in={opensecond} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                selected={selectedIndex === 32}
                onClick={(event) => handleListItemClick(event, 32)}
                sx={{ textAlign: "start" }}
              >
                <ListItemText primary="نسیم" />
              </ListItemButton>
            </List>
          </Collapse>
          <Collapse in={opensecond} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                selected={selectedIndex === 33}
                onClick={(event) => handleListItemClick(event, 33)}
                sx={{ textAlign: "start" }}
              >
                <ListItemText primary="مصطفی" />
              </ListItemButton>
            </List>
          </Collapse>

          {/* sidebar devider */}
          <Divider className="devider" />

          {/* sidebar item */}
          <MenuItem
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemIcon>
              <BackupIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>بک اپ</ListItemText>
          </MenuItem>
          <Divider className="devider" />
        </List>
      </div>

      {/* sidebar bottom header */}
      <ListSubheader component="div" id="nested-list-subheader">
        معلومات
      </ListSubheader>

      {/* sidebar bottom item */}
      <MenuItem
        selected={selectedIndex === 5}
        onClick={(event) => handleListItemClick(event, 5)}
      >
        <ListItemIcon>
          <Info fontSize="small" />
        </ListItemIcon>
        <ListItemText>معلومات</ListItemText>
      </MenuItem>

      {/* sidebar bottom item */}
      <MenuItem
        selected={selectedIndex === 6}
        onClick={(event) => handleListItemClick(event, 6)}
      >
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        <ListItemText>خروج</ListItemText>
      </MenuItem>
    </div>
  );
}

export default Sidebar;