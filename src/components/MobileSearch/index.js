import React from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
function MobileSeachBar() {
  return (
    <div className="mobile-search-bar">
      <div className="seachBar">
        <SearchIcon className="seachbar-icom" />
        <input
          className="seachbar-input"
          placeholder="Anywhere Any week add guests"
        />
      </div>
      <div className="filter">
        <TuneIcon />
      </div>
    </div>
  );
}
export default MobileSeachBar;
