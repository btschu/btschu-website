import React, { useState, useEffect } from "react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My <span>Portfolio</span>
      </h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.length && (
          <Carousel
            className="app__work-item"
            touch={true}
            interval={null}
            variant="dark"
            controls={false}
            indicators={false}
            onSelect={() =>
              handleClick(
                currentIndex === 0 ? works.length - 1 : currentIndex - 1
              )
            }
          >
            <div
              className="app__work-img app__flex"
            >
              <img
                src={urlFor(works[currentIndex].imgUrl)}
                alt={works[currentIndex].name}
              />
              <motion.div
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a
                  href={works[currentIndex].projectLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.2] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a
                  href={works[currentIndex].codeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.2] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
          <div className="app__flex">
            <div
              className="app__work-btns"
              style={{ cursor: "pointer" }}
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? works.length - 1 : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__work-btns"
              style={{ cursor: "pointer" }}
              onClick={() =>
                handleClick(
                  currentIndex === works.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>

            <div className="app__work-content">
              <h4 className="bold-text">
                  {works[currentIndex].title}
              </h4>
              <h5
                className="p-text"
              >
                <em>{works[currentIndex].technologies}</em>
              </h5>
              <details>

              <summary >
                Project Description
              </summary>
              <p className="p-text">
                {works[currentIndex].description}
              </p>
              </details>
            </div>
          </Carousel>
        )}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "portfolio",
  "app__primarybg"
);
