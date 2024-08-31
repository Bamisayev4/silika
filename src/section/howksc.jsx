import React from "react";
import check from "../img/feature/gradient/check_circle.svg";
import rectang from "../img/feature/how/Rectangle1.svg";
const Howksc = ({ num, patittle, listnum, src }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "9%",
      }}
    >
      <div
        style={{
          display: "flex",
          maxWidth: "80%",
          justifyContent: "center",
          gap: "2%",
        }}
      >
        <div className="hdivs">
          <div style={{ padding: "2% 0", gap: "2%" }} className="howitdiv">
            <div >
              <img src={src} className="img1" />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2%",
                float: "right",
                margin: "0",
                // height: "150%",
              }}
              className="dash"
            >
              <div style={{ padding: "10px", border: "1px solid black" }}>
                <h5 style={{ margin: "0" }}>{listnum}</h5>
              </div>
              <div
                style={{
                  border: "1px dashed #B4B4B4",
                  height: "100%",
                  width: "0",
                  float: "right",
                }}
              ></div>
            </div>
          </div>
          <div className="kj">
            <h4>{patittle}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              est purus eu tempor tincidunt commodo.
            </p>
            <div className="sha">
              <p>
                <img src={check} alt="" />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </p>
              <p>
                <img src={check} alt="" />
                <span>
                  Quam duis viverra amet, ultrices risus quis integer nec nulla.
                </span>
              </p>
              <p>
                <img src={check} alt="" />
                <span>Tortor turpis nibh viverra nunc bibendum.</span>
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px dashed #B4B4B4",
            height: "100%",
            width: "0",
            float: "right",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Howksc;
