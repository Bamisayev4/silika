import React from "react";
import Button from "../component/button";
import { FcGoogle } from "react-icons/fc";
const Signup = () => {
  return (
    <div
      className="gradient"
      style={{
        color: "white",
      }}
    >
      <div
        className="upgradiv"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "capitalize",
        }}
      >
        <h1 style={{ maxWidth: "450px", textAlign: "center" }}>
          Say ‘Goodbye’ to the blank page{" "}
          <span style={{ color: "red" }}>for good</span>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="downgradiv"
      >
        <h4>Get your free account today</h4>
        <div
          style={{
            display: "flex",
            gap: "10%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            icon={<FcGoogle className="google" />}
            radius="50px"
            color={"#160647"}
            text={"sign up with google"}
          />
          <h4 style={{ color: "#7A8994" }}>or</h4>
          <Button
            text={"sign up with email"}
            radius={"50px"}
            color={"#160647"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
