import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import "./Header.scss";
import profileImg from '../../assets/profile.png'

const Header = () => (
  <div className="app__header">
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="app__header-info"
    >
      <div className="app__header-container">
        <div className="app__header-info">
          <h3 className="bold-text">Welcome!</h3>
          <h1 className="head-text">
          As a <span>full-stack developer</span>, I have the ability to create end-to-end solutions that seamlessly integrate various layers of technology and functionality          </h1>
        </div>
        <div className="app__header-img">
          <img src={profileImg} alt="profile_bg" />
        </div>
      </div>
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
