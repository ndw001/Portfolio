import "./Skills.css";
import { Element } from "react-scroll";

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Data Processing", "API Development"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Problem Solving", "Agile Methodology"],
    },
  ];

  return (
    <Element name="skills" className="skills-section">
      <div className="skills-content">
        <header className="skillsHeader">Skills & Technologies</header>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div className="skill-item" key={i}>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Skills;
