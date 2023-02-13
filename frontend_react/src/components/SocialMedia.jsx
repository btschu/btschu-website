import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaPaperclip } from 'react-icons/fa';
import resume from '../assets/resume.pdf'

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
      <a href="mailto:btschu@icloud.com" title="Email Me">
        <AiOutlineMail />
      </a>
    </div>
    <div>
      <a href={resume} target="_blank" rel="noreferrer" title="Download My Resume" download>
        <FaPaperclip />
      </a>
    </div>
  </div>
  
);

export default SocialMedia;
