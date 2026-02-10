import "./Projects.css";
import { Element } from "react-scroll";

function Projects() {
  const testProjects = [
    {
      name: "Set Card Game",
      descTitle: "Interactive Card Game",
      desc: "A fully interactive implementation of the classic Set card game built with React. Features real-time game logic, pattern matching algorithms, and a responsive UI for an engaging gaming experience.",
      tags: ["React", "JavaScript", "Game Logic"],
      photo: "",
    },
    {
      name: "Statsland Fantasy",
      descTitle: "",
      desc: "",
      tags: ["React", "CSS3", "Responsive Design"],
      photo: "",
    },
  ];

  return (
    <Element name="projects" className="projects-section">
      <div className="projects-content">
        <header className="projectsHeader">Featured Projects</header>
        <div className="projects-grid">
          {testProjects.map((project, index) => (
            <div className="projectCard" key={index}>
              <div className="projectImage">
                <div className="placeholder-image">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      strokeWidth="2"
                    />
                    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                    <polyline points="21 15 16 10 5 21" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="projectContent">
                <h3 className="projectTitle">{project.name}</h3>
                <p className="projectSubtitle">{project.descTitle}</p>
                <p className="projectDesc">{project.desc}</p>
                <div className="projectTags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Projects;
