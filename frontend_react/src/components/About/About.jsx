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
          
            Hello, and welcome to my portfolio site! My name is Brandon and I am a full-stack developer. With extensive experience in both front-end and back-end development, I am confident in my ability to take on any project and see it through to completion.<br></br><br></br>

            As a developer, I pride myself on being detail-oriented, always striving to deliver clean, elegant code that is both efficient and maintainable. I have a keen eye for design, and I take great care to ensure that the user experience of every application I build is intuitive and user-friendly.<br></br><br></br>

            One of my greatest strengths is my problem-solving ability. I enjoy tackling complex challenges and finding creative solutions that meet the unique needs of each project. Whether it's debugging a tricky bug or optimizing code for performance, I am always up for a good challenge.<br></br><br></br>

            In addition to my work as a developer, I am a self-motivated individual who is always seeking to learn and grow. I am constantly exploring new technologies and techniques, and I am never satisfied with the status quo. I believe that the key to success in any field is a willingness to adapt and evolve, and I strive to embody this philosophy in everything I do.<br></br><br></br>

            When I'm not coding, I enjoy spending time with my family, playing the drums, golfing, and traveling. These activities help me to recharge my batteries and keep me inspired and motivated.

            Thank you for taking the time to learn a bit about me, and I look forward to the opportunity to work with you on your next project.

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
