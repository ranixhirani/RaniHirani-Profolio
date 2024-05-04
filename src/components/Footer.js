import "./FooterStyles.css"
import React from 'react';
import { FaHome, FaMailBulk } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Girls Hostel, CMREC.</p>
              <p>Hyderabad</p>
            </div>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />218r1a66c0@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>About</h4>
          <p>Rani Hirani is a web developer and an AI-ML enthusiast in the third year of studies. Dedicated to employing engineering knowledge to craft real-time projects aimed at simplifying everyday life. Committed to delivering impactful solutions through technical proficiency and innovation.</p>
          <div className="social">
  <a href="https://www.linkedin.com/in/rani-hirani-039a7120b/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin
      size={30}
      style={{ color: "#fff", marginRight: "1rem" }}
    />
  </a>
</div>

        </div>
      </div>
    </div>
  )
}

export default Footer;

