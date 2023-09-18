import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../../images/logo.png";
import CallIcon from "@mui/icons-material/Call";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <div className="nav-items">
          <li style={{ marginRight: isAuthenticated ? "2rem" : "0" }}>
            <NavLink className="nav-link" to="/contact">
              <CallIcon />
            </NavLink>
          </li>
          {!isAuthenticated && (
            <li>
              <NavLink className="login" to="/login">
                Log in
              </NavLink>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Header;
