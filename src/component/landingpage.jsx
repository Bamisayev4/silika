import React from "react";
import "../Header.css";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import Button from "./button";

const Navbar = () => {
  const [active, setactive] = useState(true);

  function dropdown() {
    setactive(!active);
  }
  return (
    <div>
      <header className="header">
        <div className="logo">
          <span className="logo-name">silika</span>
          <span className="logo-hiring">We're Hiring</span>
        </div>
        <nav className="nav">
          <a href="#user-cases">user cases</a>
          <a href="#resources">resources</a>
          <a href="#demos">weekly demos</a>
          <a href="#pricing">pricing</a>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="get-started-btn">Get Started</button>
        </div>
        <IoIosMenu className={"hamburger"} onClick={dropdown} />
      </header>
      <div className="hero_text">
        <div style={{ maxWidth: "400px" }}>
          <h1 className="mar">Silika Helps Marketing Agencies!</h1>
        </div>

        <h6 style={{ padding: " 0 5%", maxWidth: "500px" }}>
          At nulla tristique facilisis augue. Lectus diam dignissim erat blandit
          pellentesque egestas nulla a. Nulla consectetur nunc egestas metus
          pellentesque.
        </h6>
        <div className="hero_button">
          <Button
            className="hero__b"
            text={"Get started"}
            radius={"5px"}
            width={"140px"}
            height={"50px"}
            backgroundcolor={"#47BEBA"}
          />
          <Button
            className="hero__b"
            radius={"5px"}
            backgroundcolor={"#F22E52"}
            text={"How it works"}
            width={"140px"}
            height={"50px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
