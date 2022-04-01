import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={require("./images/Logo.png")} />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Sign in</span>
          <span className="header__optionLineTwo">Accounts & Lists </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBusket">
            <ShoppingCartOutlinedIcon />
            <span className="header__optionLineTwo header__busketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
