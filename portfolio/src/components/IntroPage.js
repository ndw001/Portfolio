import "./IntroPage.css";
import { Element } from "react-scroll";

function IntroPage() {
  return (
    <Element name="home" className="introPage">
      <div className="hero-content">
        <div className="welcomeText">
          <span className="greeting">Hi, I'm</span>
          <span className="name-highlight">Nathan Wong</span>
        </div>
        <div className="subtitle">
          Software Developer | Problem Solver | Creative Thinker
        </div>
        <div className="descriptionText">
          I'm a passionate software developer dedicated to crafting innovative and
          efficient solutions that solve real-world problems. With a strong
          foundation in JavaScript and React, I specialize in building intuitive
          user interfaces, as well as backend processes for processing data.
          <br /><br />
          I thrive in collaborative environments, constantly seeking opportunities
          to learn, grow, and create impactful projects. Let's build
          something great together!
        </div>
      </div>
    </Element>
  );
}

export default IntroPage;
