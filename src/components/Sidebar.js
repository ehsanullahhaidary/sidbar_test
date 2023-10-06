import React, { useState } from "react";
import "./sidebar.css";
import NavSearch from "./NavSearch";
// import NavLink from "./NavLink";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TuneIcon from "@mui/icons-material/Tune";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaidIcon from "@mui/icons-material/Paid";
import BackupIcon from "@mui/icons-material/Backup";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeIcon from "@mui/icons-material/Code";
import { Info } from "@mui/icons-material";
import { Logout } from "@mui/icons-material";

import { Link } from "react-router-dom";
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

// const devs = ["احسان الله", "نسیم", "مصطفی", "عبذالرازق", "عبدالحمید"];
function Sidebar({
  showSidebar,
  openSidebar,
  openSidebarHandler,
  setOpenSideBar,
}) {
  // selected setup
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [opendevs, setOpendevs] = React.useState(false);
  const [opensecond, setOpenSecond] = React.useState(false);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    // if (index !== 1) {
    //   setOpen(false);
    // }
  };

  // collapse open/close setup

  const handleClickdevs = () => {
    setOpendevs(!opendevs);
  };
  const handleClickAccount = () => {
    setOpenSecond(!opensecond);
  };

  const [width, setWidth] = useState("");
  const [display, setDisplay] = useState("");

  const getSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getSize);
    if (width < 500) {
      // setDisplay("hide");
      if (openSidebar == true) {
        // setOpenSideBar(false);
        openSidebarHandler();
      }
    } else {
      // setDisplay("display");
      if (openSidebar == false) {
        // setOpenSideBar(true);
        openSidebarHandler();
      }
    }
    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, [window.innerWidth]);

  // useEffect(() => {
  //   console.log(window.innerWidth);
  //   if (window.innerWidth < 500) {
  //     // document.getElementsByClassName("nav").classList.add("hide");
  //     openSidebarHandler();
  //     console.log(window.innerWidth);
  //   }
  // }, [window.innerWidth]);

  return (
    // <div className={showSidebar ? "sidebar" : ""}>

    <div className={openSidebar ? "nav" : "hide"}>
      <NavSearch />
      <div className="sidebar">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListSubheader component="div" id="nested-list-subheader">
            اصلی
          </ListSubheader>
          <MenuItem
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>دشبورد</ListItemText>
          </MenuItem>

          <Divider className="devider" />

          <MenuItem
            selected={selectedIndex === 1}
            onClick={(event) => {
              handleClickdevs();
              handleListItemClick(event, 1);
            }}
            // onClick={handleClick}
          >
            <ListItemIcon>
              <CodeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>برنامه نویسان</ListItemText>
            <ListItemIcon>
              {opendevs ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          </MenuItem>

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
          <Divider className="devider" />
          <ListSubheader component="div" id="nested-list-subheader">
            تنظیمات
          </ListSubheader>
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

          <MenuItem
            selected={selectedIndex === 3}
            onClick={(event) => {
              handleClickAccount();
              handleListItemClick(event, 3);
            }}
            // onClick={handleClick}
          >
            <ListItemIcon>
              <PaidIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>حساب ها</ListItemText>
            <ListItemIcon>
              {opensecond ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          </MenuItem>

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
          <Divider className="devider" />
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

        {/* <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            اصلی
          </ListSubheader>
        }
      >
        <NavLink
          // active={true}
          className="item"
          text={"دشبورد"}
          Icon={DashboardIcon}
          SecondIcon={""}
          active={selectedIndex === 0}
          onClick={handleListItemClick}
        />
        <NavLink
          SecondIcon={ExpandMoreIcon}
          text={"برنامه نویسان"}
          Icon={CodeIcon}
          submenu={devs}
          active={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        />
        <NavLink SecondIcon={""} text={"تنظیمات"} Icon={TuneIcon} />
        <NavLink SecondIcon={""} text={"معامله"} Icon={ShoppingCartIcon} />
        <NavLink SecondIcon={""} text={"حساب"} Icon={PaidIcon} />
        <NavLink SecondIcon={""} text={"بک اپ"} Icon={BackupIcon} />
      </List> */}

        {/* <p className="title">اصلی</p> */}

        {/* <NavLink
          active={"selected"}
          className="item"
          text={"دشبورد"}
          Icon={DashboardIcon}
          SecondIcon={""}
        /> */}

        {/* <NavLink
          SecondIcon={ExpandMoreIcon}
          text={"برنامه نویسان"}
          Icon={CodeIcon}
        />
        <NavLink SecondIcon={""} text={"تنظیمات"} Icon={TuneIcon} />
        <NavLink SecondIcon={""} text={"معامله"} Icon={ShoppingCartIcon} />
        <NavLink SecondIcon={DashboardIcon} text={"حساب"} Icon={PaidIcon} />
        <NavLink SecondIcon={""} text={"بک اپ"} Icon={BackupIcon} /> */}

        {/* <Sidebar>
        <Menu>
          <MenuItem> Pie charts </MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
            <Menu>
              <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
            </Menu>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar> */}
      </div>
      <ListSubheader component="div" id="nested-list-subheader">
        معلومات
      </ListSubheader>
      <MenuItem
        selected={selectedIndex === 5}
        onClick={(event) => handleListItemClick(event, 5)}
      >
        <ListItemIcon>
          <Info fontSize="small" />
        </ListItemIcon>
        <ListItemText>معلومات</ListItemText>
      </MenuItem>
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
