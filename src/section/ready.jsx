import React from "react";
import Button from "../component/button";
import Check from "../img/feature/how/check.svg";

const Ready = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "5%",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", color: "#160647" }}>
          Ready to level-up?
        </h1>
        <h6 style={{textAlign:'center', color: "#160647" }}>
          Id ipsum amet nibh dolor mi ac diam pellentesque.
        </h6>
      </div>
      <Button
        backgroundcolor={"#47BEBA"}
        text={"Get Started - It’s Free"}
        color={"#FFFFFF"}
        radius={"5px"}
      />
      <div className="hg" style={{ display: "flex", padding: "3%" }}>
        <div>
          <img src={Check} width={20}  alt="" srcset="" />
          <p>No Credit Card Required</p>
        </div>
        <div>
          <img src={Check} width={20}  alt="" srcset="" />
          <p>30 credits on sign up</p>
        </div>
        <div>
          <img src={Check} width={20} srcset="" />
          <p>90+ contents type to explore</p>
        </div>
      </div>
    </div>
  );
};

export default Ready;
