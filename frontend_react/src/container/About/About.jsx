import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
import aboutImg from '../../assets/about.jpeg'

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">A Little <span>About</span> Me</h2>
      <div className="app__about-container">
        <div className="app__about-img">
            <img src={aboutImg} alt="profile_bg" />
            <p className="bold-text app__about-text">I find great joy in building applications that work seamlessly from end-to-end. I enjoy the challenge of developing both the front-end user interface and the back-end server logic, and the opportunity to apply my skills across the entire technology stack. I constantly find myself learning new technologies and exploring ways to optimize performance and user experience. Overall, my passion for development fuels my drive to continuously improve and innovate in the field. Apart from coding, I love spending quality time with my family, playing the drums, golfing, and exploring new places through travel.</p>
        </div>
      </div>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);