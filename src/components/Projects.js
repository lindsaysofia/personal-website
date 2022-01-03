import '../styles/Projects.css';
import ProjectTile from './ProjectTile';

function Projects(props) {
  const { githubCode, githubDemo, projects } = props;

  return (
    <div className="Projects" id="projects">
      <h2 className="section-header"><span className="color-main">{"<"}</span>My Projects <span className="color-main">{"/>"}</span></h2>
      <div className="Projects-content">
        {projects.map((project, index) => {
          return (
            <ProjectTile key={index} project={project} githubCode={githubCode} githubDemo={githubDemo} index={index} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;