import React from "react";
import icon1 from "../img/footericon/icon1.svg";
import icon2 from "../img/footericon/icon2.svg";
import icon3 from "../img/footericon/icon3.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="auto">
        <div>
          <h3>Product</h3>
          <p>login</p>
          <p>Pricing</p>
          <p>Copy ai Reviews</p>
          <p>Alternatives</p>
          <p>25+ Languages</p>
          <p>Free Ai Tools</p>
        </div>
        <div>
          <h3>Company</h3>
          <p>Blog</p>
          <p>Careers</p>
          <p>Community</p>
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Affiliate Program</p>
        </div>
        <div>
          <h3>Support</h3>
          <p>Weekly Deos</p>
          <p>Contact Us</p>
          <p>Report a Bug</p>
          <p>Report an Outage</p>
          <p style={{ width: "100px" }}>Request a New Feature</p>
        </div>
        <div>
          <h3>User Cases</h3>
          <p>For Blog Writers</p>
          <p>For Social Media</p>
          <p>Managers</p>
          <p>Report</p>
        </div>
      </div>
      <div>
        <div className="fg">
          <div className="auto2">
            <h2>Silika.ai</h2>
            <h6>© 2022 copy ai, Inc</h6>
            <h6>Privacy Notice</h6>
            <h6>Terms of service</h6>
          </div>
          <div style={{ display: "flex", gap: "10%",justifyContent:'center'}}>
            <img width={20} src={icon1} alt="" />
            <img width={20} src={icon2} alt="" />
            <img width={20} src={icon3} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
