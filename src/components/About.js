import '../styles/About.css';

function About() {
  return (
    <div className="About" id="about">
      <h2 className="section-header"><span className="color-main">{"<"}</span>About Me <span className="color-main">{"/>"}</span></h2>
      <div className="About-content">
        <h3>A Short Haiku to Describe Myself:</h3>
        <p>A lifelong learner,</p>
        <p>I like to push my limits</p>
        <p>and unearth knowledge.</p>
        <p>In all seriousness, I am passionate about problem-solving. Software engineering has captured my interest for years, and I'd love to pursue a career in it.</p>
      </div>
    </div>
  );
}

export default About;