import React, { useEffect, useRef } from 'react';
import IntroImg from "../assets/dark.jpg";
import ResumePDF from "../assets/ranihirani-resume.pdf";
import { Link } from "react-router-dom";
import "./HeroImgStyles.css";
import Typed from 'typed.js';

const HeroImg = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elementRef.current, {
      strings: ['Web Developer', 'AI-ML Enthusiast', 'Content-Writer', 'Content-Creator'],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <div className="intro-text">
          <p>Hello, My name is <span className="my-name" style={{ color: 'white' }}>Rani Hirani</span></p>
          <p>and I'm a passionate</p>
        </div>
        <span ref={elementRef} className="animated-text"></span> {/* Add className to span */}
        <div className="buttons">
          <a href={ResumePDF} className="btn" download>Download Resume</a>
          <Link to="https://github.com/ranixhirani" className="btn btn-github">Visit Github</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;







