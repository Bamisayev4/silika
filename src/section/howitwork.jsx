import React from "react";
import check from "../img/feature/gradient/check_circle.svg";
import rectang from "../img/feature/how/Rectangle1.svg";
import rectang2 from "../img/feature/how/Rectangle2.svg";
import rectang3 from "../img/feature/how/Rectangle3.svg";
import Howksc from "./howksc";

const Howitwork = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "90px 0 85",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>How it works</h1>
      <Howksc
        patittle={"Enter your copywrite project"}
        listnum={"1"}
        src={rectang}
      />
      <Howksc patittle={"Genarate Idea"} listnum={"2"} src={rectang2} />
      <Howksc patittle={"Copy & Use"} listnum={"3"} src={rectang3} />
    </div>
  );
};

export default Howitwork;
