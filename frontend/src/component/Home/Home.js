import React from "react";
import "./Home.css";
import seller from "../../images/seller.svg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Start your shop on BeaWorth</h1>
        <p>
          Register yourself to become a seller on BeaWorth and manage sales,
          inventory and your business operations on the seller shop Dashboard.
        </p>
        <span className="buttons">
          <NavLink to="/me/application">
            <button className="button-1">Register Your Shop</button>
          </NavLink>
          <NavLink to="/login">
            <button className="button-2">Log In</button>
          </NavLink>
        </span>
      </div>
      <div className="image-box">
        <img src={seller} alt="Shop Keeper" />
      </div>
    </div>
  );
};

export default Home;
