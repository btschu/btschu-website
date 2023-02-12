import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/btschu" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/brandon-schumacher/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="mailto:btschu@icloud.com">
        <AiOutlineMail />
      </a>
    </div>
  </div>
);

export default SocialMedia;
