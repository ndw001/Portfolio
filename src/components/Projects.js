import "./Projects.css";

function Projects() {
  // Each Section is a different Project

  const testProjects = ["Set"];

  // alternating Left and Right Text and Picture
  // Text box is CLAIM: Caption

  return (
    <div className="projects">
      {testProjects.map((tab, index) => (
        <div className="projectContainer" key={index}>
          <div className="title"> {tab} </div>
          <div className="textBox"> Text Box </div>
          <div className="photo"> Photo </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
