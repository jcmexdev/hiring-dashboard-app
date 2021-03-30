import React from "react";
import logo from "../../assets/images/logo.svg";
import "./styles.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__brand">
        <img src={logo} alt="Logo" />
      </div>
      <div className="Hero__title">
        <span>Hiring Dashboard</span>
      </div>
    </div>
  );
};

export default Hero;
