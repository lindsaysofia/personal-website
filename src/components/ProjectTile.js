import '../styles/ProjectTile.css';

function ProjectTile(props) {
  const { githubCode, githubDemo, project, index } = props;
  return (
    <div className={`ProjectTile${(index % 2 === 0) ? ' left': ' right'}`}>
      <img 
        src={require(`../images/${project}.png`)}
        alt=""
      />
      <h3>{project.split('-').join(' ')}</h3>
      <div className="ProjectTile-buttons">
        <a href={`${githubDemo}${project}`} target="_blank" rel="noreferrer">
          <button>
            <i className="fas fa-laptop-code"></i> Live Demo
          </button>
        </a>
        <a href={`${githubCode}${project}`} target="_blank" rel="noreferrer">
          <button>
            <i className="fas fa-code"></i> Code
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectTile;