import React, { useState, useEffect } from "react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import Carousel from "react-bootstrap/Carousel";

import "./Testimonial.scss";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>Testimonials</span>
      </h2>
      {testimonials.length && (
        <Carousel
          className="app__testimonial-item app__flex"
          touch={true}
          controls={false}
          interval={null}
          variant="dark"
          indicators={false}
          onSelect={() =>
            handleClick(
              currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
            )
          }
        >
          <div className="app__testimonial-img">
            <div className="app__flex">
              <div
                className="app__testimonial-btns app__flex"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? testimonials.length - 1
                      : currentIndex - 1
                  )
                }
              >
                <HiChevronLeft />
              </div>

              <img
                src={urlFor(testimonials[currentIndex].imageurl)}
                alt={testimonials[currentIndex].name}
              />

              <div
                className="app__testimonial-btns app__flex"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleClick(
                    currentIndex === testimonials.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
              >
                <HiChevronRight />
              </div>
            </div>
          </div>

          <div className="app__testimonial-content">
            <p className="p-text">{testimonials[currentIndex].feedback}</p>
            <div>
              <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
              <h5 className="p-text">{testimonials[currentIndex].company}</h5>
            </div>
          </div>
        </Carousel>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
