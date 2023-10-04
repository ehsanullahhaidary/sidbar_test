import React from "react";
import "./sidebar.css";
import NavSearch from "./NavSearch";
import NavLink from "./NavLink";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TuneIcon from "@mui/icons-material/Tune";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaidIcon from "@mui/icons-material/Paid";
import BackupIcon from "@mui/icons-material/Backup";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeIcon from "@mui/icons-material/Code";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { List, ListSubheader } from "@mui/material";

function sidebar({ showSidebar }) {
  return (
    // <div className={showSidebar ? "sidebar" : ""}>
    <div className="sidebar">
      <div className="nav">
        <NavSearch />
        <List
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
            active={"selected"}
            className="item"
            text={"دشبورد"}
            Icon={DashboardIcon}
            SecondIcon={""}
          />
          <NavLink
            SecondIcon={ExpandMoreIcon}
            text={"برنامه نویسان"}
            Icon={CodeIcon}
          />
          <NavLink SecondIcon={""} text={"تنظیمات"} Icon={TuneIcon} />
          <NavLink SecondIcon={""} text={"معامله"} Icon={ShoppingCartIcon} />
          <NavLink SecondIcon={DashboardIcon} text={"حساب"} Icon={PaidIcon} />
          <NavLink SecondIcon={""} text={"بک اپ"} Icon={BackupIcon} />
        </List>

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
      </div>
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
  );
}

export default sidebar;
