import React from "react";
import Form from "./components/Form";
import "./styles/Contact.css";
import image1 from "./assets/facebook.png";
import image2 from "./assets/twitter.png";
import image3 from "./assets/linkedin.png";
import image4 from "./assets/instagram.png";
// import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1 className="contacth1">Contact Us</h1>
      <p className="contactp">
        We would love to hear from you. Please fill use the informtion below to
        get in touch with our team
      </p>
      <div className="contactflex">
        <div className="infobody">
          <h2 className="infoh2">Contact Information</h2>
          <div>
            <h3 className="infoh3">General Enquiring</h3>
            <h6 className="infoh6">info@workshopapp.com</h6>
            <h3 className="infoh3">Visit Us</h3>
            <h6 className="infoh6">
              8 Jubilee-CMD Road, Magodo, Lagos State, Nigeria
            </h6>
            <h3 className="infoh3">Follow Us</h3>
            <div className="links">
              <a href="#">
                <img className="profilelinks" src={image1} alt="" />
              </a>
              <a href="https://twitter.com/Onanusi12" target="blank">
                <img className="profilelinks" src={image2} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-lateef-onanusi-080b03303/"
                target="blank"
              >
                <img className="profilelinks" src={image3} alt="" />
              </a>
              <a
                href="https://www.instagram.com/lar_tyf1?igsh=dzY3YndxbjMwOHlo&utm_source=qr"
                target="blank"
              >
                <img className="profilelinks" src={image4} alt="" />
              </a>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
