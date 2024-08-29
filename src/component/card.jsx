import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


const Card = ({ src, alt, content,paragraph,width,height }) => {
  return (
      <div className="card">
          <div className="fimage"> 
      <img src={src} alt={alt} width={width} height={height} />
          </div>
      <div className="fcontent">
        <h3>{content}</h3>
        <p>{paragraph}</p>
        <h6>
          Try Blog Content{" "}
          <span>
            <IoIosArrowRoundForward />
          </span>
        </h6>
      </div>
    </div>
  );
};

export default Card;
