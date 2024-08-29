import React from "react";
import arrowl from "../img/feature/gradient/Arrow2.svg";
import arrow2 from "../img/feature/gradient/Arrow1.svg";
import picture from "../img/feature/gradient/pic.jpeg";
const Clientcomment = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "5%",
      }}
    >
      <h1 style={{ maxWidth: "25%", textAlign: "center", color: "#160647" }}>
        Let’s See What Our Clients Says
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10%",
          maxWidth: "60%",
          marginTop: "10%",
        }}
      >
        <img src={arrowl} />
        <div style={{ border: "1px solid #7A8994", padding: "2%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5%",
            }}
          >
            <div>
              <img
                style={{ height: "40px", width: "41px", borderRadius: "100%" }}
                src={picture}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1 style={{ margin: "0 0", color: "#160647"}}>
                Brooklyn Simmons
              </h1>
              <p style={{ margin: "0 0" }}>Nursing Assistant</p>
            </div>
          </div>
          <div>
            <p style={{ color: "#7A8994", maxHeight: "57px" }}>
              Odio dictum lacus augue nulla sit integer facilisis massa. Nec et
              tellus eu amet. Faucibus sit sit massa ullamcorper
            </p>
          </div>
        </div>
        <img src={arrow2} />
      </div>
    </div>
  );
};

export default Clientcomment;
