import "./Projects.css";

function Projects() {
  // Each Section is a different Project

  // const testProjects = ["Set"];

  const testProjects = [
    {
      name: "Set",
      descTitle: "Card game",
      desc: "This is a game",
      photo: "",
    },
  ];

  // alternating Left and Right Text and Picture
  // Text box is CLAIM: Caption

  return (
    <section id="projects">
      <header className="projectsHeader">Projects</header>
      <div className="projects">
        {testProjects.map((tab, index) => (
          <div className="projectContainer" key={index}>
            <div className="title"> {tab.name} </div>
            <div className="textBox"> Text Box </div>
            <div className="photo"> Photo </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
