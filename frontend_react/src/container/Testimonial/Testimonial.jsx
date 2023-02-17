import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import Carousel from "react-bootstrap/Carousel";
import "./Testimonial.scss";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
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
          controls={true}
          slide={true}
          touch={true}
          variant="dark"
          onSelect={() =>
            handleClick(
              currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
            )
          }
        >
          <div className="app__testimonial-img">
            <img
              src={urlFor(testimonials[currentIndex].imageurl)}
              alt={testimonials[currentIndex].name}
            />
            <div>
              <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
              <h5 className="p-text">{testimonials[currentIndex].company}</h5>
            </div>
          </div>
          <div className="app__testimonial-content">
            <p className="p-text">{testimonials[currentIndex].feedback}</p>
          </div>
        </Carousel>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
