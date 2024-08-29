import React from "react";
import Navbar from "../component/landingpage";
import Adobe from "../img/Adobe.svg";
import Colab from "../img/CoLab.svg";
import Holtzman from "../img/Holtzman.svg";
import Mosaic from "../img/Mosaic.svg";
import Aboutus from "../section/aboutus";
import Feature from "../section/Feature";
import Signup from "../section/signup";
import Clientcomment from "../section/clientcomment";
import Howitwork from "../section/howitwork";


const Home = () => {
  return (
    <div>
      <div className="home">
        <Navbar />
      </div>
      <div className="sponsor">
        <img src={Adobe} alt="adobe" />
        <img src={Colab} alt="adobe" />
        <img src={Holtzman} alt="adobe" />
        <img src={Mosaic} alt="adobe" />
      </div>
      <div>
        <Aboutus />
        <Feature />
        <Signup />
        <Clientcomment />
        <Howitwork />
      </div>
    </div>
  );
};

export default Home;
