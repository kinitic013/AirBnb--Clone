import React from "react";
import "./styles.css";
import logo from "../../assets/logo/long-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import SimpleBottomNavigation from "./bottombar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "./menu";
function Header() {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="logo" className="navbar-logo" />
      </div>
      <div className="searchbar">
        <div className="seachbar-div">Anywhere</div>
        <span>|</span>
        <div className="seachbar-div">Any week</div>
        <span>|</span>
        <div className="seachbar-div2">Add guests</div>
        <SearchIcon className="seachbar-div2-icon" />
      </div>

      <div className="navbar-right">
        <div className="profile-home">Airbnb your home</div>
        <div className="profile-language">
          <LanguageIcon />
        </div>
        <div className="profile-account">
          <div className="profile-menu">
            <Menu />
          </div>
          <div className="profile-account-circle-icon">
            <AccountCircleIcon />
          </div>
        </div>
      </div>
      <div className="bottom-navbar">
        <SimpleBottomNavigation />
      </div>
      
    </div>
  );
}
export default Header;
