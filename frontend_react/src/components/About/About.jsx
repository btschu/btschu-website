import React from "react";

import aboutImg from "../../assets/about.jpeg";

import "./About.scss";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        <span>About</span> Me
      </h2>
      <div className="app__about-container">
        <div className="app__about-img">
          <img src={aboutImg} alt="about_img" />
          <p className="p-text app__about-text">
            Building applications that work seamlessly from end-to-end brings me
            immense pleasure.. I enjoy the challenge of developing both the
            front-end user interface and the back-end server logic, and the
            opportunity to apply my skills across the entire technology stack. I
            constantly find myself learning new technologies and exploring ways
            to optimize performance and user experience. Overall, my passion for
            development fuels my drive to continuously improve and innovate in
            the field. Apart from coding, I love spending quality time with my
            family, playing the drums, golfing, and exploring new places through
            travel.
          </p>
        </div>
      </div>
    </>
  );
};

export default About("app__about", "about", "app__whitebg");
