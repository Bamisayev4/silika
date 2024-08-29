import React from "react";
import Button from "../component/button";
import silika from '../img/silikavideo.svg'

const Aboutus = () => {
  return (
    <div className="aboutUs">
      <h1>More About Us</h1>
      <div className="profession">
        <div
          style={{
            display: "flex",
            maxWidth: "450px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#322853",
          }}
        >
          <div>
            <h1>Professional & team choose copy.ai</h1>
          </div>
          <div>
            <h6 style={{ color: "#818181" }}>
              Odio dictum lacus augue nulla sit integer facilisis massa. Nec et
              tellus eu amet. Faucibus sit sit massa ullamcorper
            </h6>
          </div>
          <Button />
        </div>
        <div className="sil">
          <img src={silika} className="silikavideo" alt="aboutsilka" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
