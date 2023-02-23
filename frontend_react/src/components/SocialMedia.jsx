import {useState, useEffect} from 'react';

import { AiOutlineMail, AiOutlineArrowUp } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaRegFilePdf } from 'react-icons/fa';
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

import resume from '../assets/resume.pdf'

const SocialMedia = ({theme, switchTheme}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="app__social">
        <a href={switchTheme}>
          <button 
            type="switch"
            onClick={switchTheme}
            id="custom-switch"
            variant="sm"
            aria-label={`Toggle ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Toggle ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? <BsFillSunFill /> : <BsMoonStarsFill />}
          </button> 
        </a>
        <a href="https://github.com/btschu" target="_blank" rel="noreferrer" title="View my GitHub" aria-label="View my GitHub"><button><FaGithub /></button></a>
        <a href="https://www.linkedin.com/in/brandon-schumacher/" target="_blank" rel="noreferrer" title="View My LinkedIn" aria-label="View My LinkedIn"><button><FaLinkedin /></button></a>
        <a href="mailto:btschu@icloud.com" title="Email Me" aria-label="Email Me"><button><AiOutlineMail /></button></a>
        <a href={resume} target="_blank" rel="noreferrer" title="Download My Resume" aria-label="Download My Resume"><button><FaRegFilePdf /></button></a>
        {isVisible && (
        <a href="#home" title="Scroll to top" aria-label="Scroll to top"><button><AiOutlineArrowUp /></button></a>
        )}
    </div>
  )
};

export default SocialMedia;
