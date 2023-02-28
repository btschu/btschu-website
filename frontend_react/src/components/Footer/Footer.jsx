import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">
        <span>Contact</span> Me
      </h2>
      <form
        className="app__footer-form app__flex"
        action="https://formspree.io/f/mknyegdr"
        method="post"
      >
        <div className="app__flex">
          <input
            required
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="username"
            value={username}
            onChange={handleChangeInput}
          />
        </div>
        <div className="app__flex">
          <input
            required
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea
            required
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button
          type="submit"
          className="p-text"
          aria-label="Send a message to Brandon Schumacher"
          onClick={handleSubmit}
        >
          {!loading
            ? "Send Message"
            : `Thank you for the message. I'll be in touch shortly.`}
        </button>
      </form>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
