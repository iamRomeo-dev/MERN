import React from "react";
import { Link } from "react-router-dom";
import AuthNav from "./Auth0/loginFunction";
import logo from "../img/wodamoiLogo.png";

const NavBar = () => {
  return (
    <header className="mb-3" style={{backgroundColor: "#9f7800"}}>
      <div className="topnav">
        <div className="topnav-centered">
          <Link to="/">
              <img src={logo} alt="logo" className="logoHeader"></img>
          </Link>
        </div>
          
        <div className="topnav-right">
          <AuthNav />
        </div>
      </div>
      <p className="blocUnderHeader"></p>
    </header>
  );
};

export default NavBar;
