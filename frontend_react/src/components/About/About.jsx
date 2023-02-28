import React from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
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
            Welcome to my portfolio site! As a full stack developer, I am passionate about crafting exceptional digital experiences that meet the needs of modern businesses and users alike.<br></br><br></br>
            I pride myself on being a highly detail-oriented individual with a strong problem-solving mindset. I understand that even the smallest details can make a big difference in the final product, and I always strive for excellence in everything I do.<br></br><br></br>
            Throughout my career, I have honed my skills in various technologies, frameworks, and programming languages to ensure that I can deliver outstanding solutions to my clients. I enjoy taking on complex challenges and finding innovative solutions that exceed expectations.<br></br><br></br>
            With my extensive knowledge and experience in the field, I am confident that I can create outstanding digital solutions that deliver results. So if you're looking for a skilled and dedicated full stack developer who can bring your ideas to life, then look no further! I am ready to take on your next project and help you achieve your goals.
          </p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
