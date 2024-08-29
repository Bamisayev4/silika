import React from "react";
import Card from "../component/card";
import folder from "../img/feature/iconoir_add-folder.svg";
import airplane from "../img/feature/iconoir_airplane-helix.svg";
import align from "../img/feature/iconoir_align-center.svg";
import design from "../img/feature/iconoir_add-database-script.svg";
import desnib from "../img/feature/iconoir_design-nib.svg";
import rocket from "../img/feature/iconoir_design-nib.svg";

const Feature = () => {
  return (
    <div className="features">
      <h1>Our Features</h1>
      <div className="cards">
        <Card
          src={folder}
          alt="folber"
          content="Blog Content"
          paragraph="Write optimized blog posts in
    a fraction of the time"
        />
        <Card
          src={airplane}
       
          alt="airplane"
          content="Article"
          paragraph="Write optimized blog posts in
    a fraction of the time"
        />
        <Card
          src={design}
          alt="design"
          content="Content Writing"
          paragraph="Write optimized blog posts in
    a fraction of the time"
        />
        <Card
          src={align}
          alt="align"
          content="Seo"
          paragraph="Write optimized blog posts in
    a fraction of the time"
        />
        <Card
          src={desnib}
          alt="desnib"
          content="Design"
          paragraph="Write optimized blog posts in
    a fraction of the time"
        />
        <Card
          src={rocket}
          alt="rocket"
          content="Coding"
          paragraph="Write optimized blog posts in
    a fraction of the time"
        />
      </div>
    </div>
  );
};

export default Feature;
