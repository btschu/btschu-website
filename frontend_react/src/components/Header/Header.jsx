import React from "react";
import { motion } from "framer-motion";

import profileImg from "../../assets/profile.png";
import profileImgDark from "../../assets/profile-dark.png";

import "./Header.scss";

const Header = ({ theme }) => {
  return (
    <div className="app__header" id="home">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="app__header-info"
      >
        <div className="app__header-container">
          <div className="app__header-info">
            <h3 className="bold-text">Welcome!</h3>
            <h1 className="head-text">
              As a <span>full-stack developer</span>, I create solutions that
              seamlessly integrate various layers of technology and
              functionality{" "}
            </h1>
          </div>
          <div className="app__header-img">
            {theme === "dark" ? (
              <img src={profileImgDark} alt="profile_picture" />
            ) : (
              <img src={profileImg} alt="profile_picture" />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
