import React from "react";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <div>
      <div className="navBar">
        <a href="/">
          <img src={require("../photo/homepage-logo.png")} alt="homepageLogo" title="Mario Store" />
        </a>
        <ul>
          <li>
            <Link to="/">關於</Link>
          </li>
          <li>
            <Link to="/login">登入 / 註冊</Link>
          </li>
          <li>
            <Link to="/">購物車</Link>
          </li>
        </ul>
      </div>
      <div className="bar">
        <ul>
          <li>
            <Link to="/categories">實用道具</Link>
          </li>
          <li>
            <Link to="/categories">百變服裝</Link>
          </li>
          <li>
            <Link to="/categories/">怪物收藏</Link>
          </li>
          <li>
            <Link to="/categories">購物商城</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarComponent;
