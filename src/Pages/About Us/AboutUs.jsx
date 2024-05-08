import React from "react";
import officeVideo from "../../../public/office.mp4";
import quote1 from "../../../public/quoteup.png"
import quote2 from "../../../public/quotedown.png";
import woman1 from "../../../public/woman1.png";
import woman2 from "../../../public/woman2.png";
import man from "../../../public/man.png";
import stroke from "../../../public/stroke.png";
import './About.css'

const About = () => {
  return (
    <div>
      <div className=" d-flex flex-column overrall">
        <div className=" d-lg-flex mt-5 gap-5 text-start section1  px-5 pb-4 text-white rounded-4  ">
          <div className="identity">
            <h2 className="fs-2 fw-semibold">Who We Are</h2>
            <p className="fs-4 ">
              We help you build and grow your startup. With our 300+ projects we
              have the experience you need to among the 10% successful start ups
            </p>
          </div>
          <video width="550" height="480" controls className="mb-5 rounded-4">
            <source src={officeVideo} type="video/mp4" />
          </video>
        </div>
        <div className="position-relative d-flex flex-column gap-3  section2">
          <img className="position-absolute upperquote" src={quote1} alt="" />
          <p className=" fw-bold text-start">
            90% of startups are failing, with our 300+ portfolio experience we
            will prevent mistakes of failed startups and make it the top 10%
          </p>
          <img
            className="position-absolute lowerquote fw-bold"
            src={quote2}
            alt=""
          />
        </div>
        <div className="d-lg-flex section3 gap-lg-4">
          <div className="d-flex flex-column gap-lg-4 woman">
            <img src={woman1} alt="" className="wom1" />
            <img src={woman2} alt="" className="wom2" />
          </div>
          <div className="d-lg-flex align-items-lg-center gap-5 try">
            <div>
              <img src={man} alt="" className="man" />
            </div>
            <div className="text-start">
              <h2 className="fs-2 fw-bold">Our teams job</h2>
              <p className="ourteams fs-3 ">
                we have the best team, from designersto markets we select we
                select the very best of candidatesout of our participant pool of
                diverse
              </p>
            </div>
          </div>
        </div>
        <div className="d-lg-flex gap-4  justify-content-between section4">
          <div className="d-flex flex-column gap-2 fact1">
            <div className="d-flex gap-2">
              <img src={stroke} alt="" />
              <h2>Facts 1</h2>
            </div>
            <p className="fs-5">
              <span className="d-block">We have worked</span>with 12+ clients
            </p>
          </div>
          <div className="d-flex flex-column gap-2 fact2">
            <div className="d-flex gap-2">
              <img src={stroke} alt="" />
              <h2>Facts 1</h2>
            </div>
            <p className="fs-5">
              <span className="d-block">We have worked</span>with 12+ clients
            </p>
          </div>
          <div className="d-flex flex-column gap-2 fact3">
            <div className="d-flex gap-2">
              <img src={stroke} alt="" />
              <h2>Facts 1</h2>
            </div>
            <p className="fs-5">
              <span className="d-block">We have worked</span>with 12+ clients
            </p>
          </div>
          <div className="d-flex flex-column gap-2 fact4">
            <div className="d-flex gap-2">
              <img src={stroke} alt="" />
              <h2>Facts 1</h2>
            </div>
            <p className="fs-5">
              <span className="d-block">We have worked</span>with 12+ clients
            </p>
          </div>
        </div>
        <div className="d-flex flex-column gap-5 section5">
          <div>
            <h2 className="fs-2 fw-bold">Our 300+ portfolio projects</h2>
            <p className="fs-3 text-start">
              We help you build and grow your startup. With our 300+ projects we
              have the experience you need to among the 10% successful start ups{" "}
            </p>
          </div>
          <a
            href=""
            className="text-decoration-none bg-black text-white py-3  toportfolio"
          >
            See Our Portfollio
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
