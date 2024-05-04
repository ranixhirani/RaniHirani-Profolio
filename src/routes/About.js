import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const aboutTextStyle = {
  padding: '20px', // Add padding around the text
  textAlign: 'left', // Align text from left to right
  fontSize: '20px', // Decrease font size
  margin: '75px auto', // Center horizontally and move text downward
  maxWidth: '800px', // Limit maximum width
};


const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="Who Am I?" style={{ fontSize: '28px' }} /> {/* Decrease heading size */}
      <div style={aboutTextStyle}>
        <p>
          Hello there, I am a web developer and I find immense satisfaction in turning ideas into reality and enhancing user experiences. Currently pursuing a BTech in AIML, I dedicate significant time to platforms like LeetCode and CodeChef to refine my coding skills, particularly in data structures and algorithms.
        </p>
        <p>
          In addition to my technical pursuits, I am a published author and have contributed as a content writer for an NGO, where I honed my skills in crafting engaging narratives. I also actively engage in content creation across various social media platforms. Furthermore, I possess adept photo and video editing skills, adding a creative dimension to my skill set.
        </p>
      </div>
      <Footer />
      <AboutContent />
    </div>
  );
}

export default About;


