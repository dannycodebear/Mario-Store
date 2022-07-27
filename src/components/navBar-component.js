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
            <Link to="/">登入</Link>
          </li>
          <li>
            <Link to="/">購物車</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarComponent;
