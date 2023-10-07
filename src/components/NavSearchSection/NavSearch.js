import React from "react";

import "./NavSearch.css";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function NavSearch() {
  return (
    <div className="nav-search">
      {/* the search input at top of sidebar */}
      <TextField
        className="change-icon-direction sidebar__search"
        id="outlined-basic"
        placeholder="جستجو"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon className=" sidebar__search--account" />
            </InputAdornment>
          ),
        }}
      ></TextField>
    </div>
  );
}

export default NavSearch;
