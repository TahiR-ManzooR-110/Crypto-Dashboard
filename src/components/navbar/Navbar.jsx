import React, { useState } from "react";
import "./navbar.css";
import LogoUrl from "../../util/koinxLogo.png";
export const Navbar = () => {
  const [tooglemenu, setToggleMenu] = useState(false);
  const handleMenu = () => {
    setToggleMenu(!tooglemenu);
    // console.log(tooglemenu);
  };

  return (
    <div id="navbar-layout">
      <div id="logo-nav">
        <img src={LogoUrl} alt="" />
      </div>
      <div id="nav-elements">
        <ul id="nav-items">
          <li>
            {" "}
            <a href="#">Crypto Taxes</a>
          </li>
          <li>
            {" "}
            <a href="#">Free Tools</a>
          </li>
          <li>
            <a href="#">Resource Center</a>
          </li>
          <li>
            <button id="element-id-button-nav">Get Started</button>
          </li>
        </ul>
      </div>
      <div id="mobile-menu" onClick={handleMenu}>
        {tooglemenu ? (
          <i class="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-sharp fa-solid fa-bars"></i>
        )}
        <div
          className="mobile-nav-items"
          id={tooglemenu ? "mobile-nav-show" : ""}
        >
          <ul>
            <li className="mobile-nav-ele">
              <a href="">Crypto Taxes</a>
            </li>
            <li className="mobile-nav-ele">
              {" "}
              <a href="">Free Tools</a>
            </li>
            <li className="mobile-nav-ele">
              {" "}
              <a href="">Resource Center</a>
            </li>
            <li>
              <button id="nav-menu-button">Get Started</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
