import "./IntroPage.css";

function IntroPage() {
  // Headers: Top, About Me, Projects, Contact Me
  return (
    <div className="introPage">
      <div className="welcomeText">
        Hi, I'm Nathan Wong. Welcome to my page!
      </div>
      <div className="descriptionText">
        I'm a passionate software developer dedicated to crafting innovative and
        efficient solutions that solve real-world problems. With a strong
        foundation in JavaScript and React, I specialize in building intuitive
        user interfaces, as well as backend processes for processing data. I
        thrive in collaborative environments, constantly seeking opportunities
        to learn, grow, and create impactful projects.
        <br />
        Feel free to explore my portfolio to see the projects I’ve worked on,
        showcasing my skills in coding, design, and problem-solving. Let’s build
        something great together!
      </div>
    </div>
  );
}

export default IntroPage;
