import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import './Header.scss';
import circleImg from '../../assets/circle.svg'
import profileImg from '../../assets/profile.png'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div>
            <p className="p-text">Hello, my name is</p>
            <h1 className="head-text">Brandon</h1>
          </div>
        </div>

      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={profileImg} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={circleImg}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
    <div className="app__header-badge">
        <div className="tag-cmp app__flex">
          <div>
            <p className="p-text">I am a</p>
            <h2>Full-Stack Developer</h2>
          </div>
        </div>
      </div>
      {/* {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))} */}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
