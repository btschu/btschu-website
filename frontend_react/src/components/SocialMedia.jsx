import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaPaperclip } from 'react-icons/fa';
import resume from '../assets/resume.pdf'

const SocialMedia = () => (
  <div className="app__social">
      <button><a href="https://github.com/btschu" target="_blank" rel="noreferrer" title="View my GitHub" aria-label="View my GitHub"><FaGithub /><span>GitHub</span></a></button>
      <button><a href="https://www.linkedin.com/in/brandon-schumacher/" target="_blank" rel="noreferrer" title="View My LinkedIn" aria-label="View My LinkedIn"><FaLinkedin /><span>LinkedIn</span></a></button>
      <button><a href="mailto:btschu@icloud.com" title="Email Me" aria-label="Email Me"><AiOutlineMail /><span>Email</span></a></button>
      <button><a href={resume} target="_blank" rel="noreferrer" title="Download My Resume" aria-label="Download My Resume"><FaPaperclip /><span>Resume</span></a></button>
  </div>
  
);

export default SocialMedia;
