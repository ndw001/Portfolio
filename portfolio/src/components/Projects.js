import "./Projects.css";

function Projects() {
  // Each Section is a different Project

  const testProjects = ["Set"];

  return (
    <div className="projects">
      {testProjects.map((tab, index) => (
        <div key={index}>{tab}</div>
      ))}
    </div>
  );
}

export default Projects;
