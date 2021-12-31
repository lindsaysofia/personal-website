import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="Navigation">
      <ul>
        <li><a href="home">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="skills">Skills</a></li>
        <li><a href="projects">Projects</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;