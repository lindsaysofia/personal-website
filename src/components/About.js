import '../styles/About.css';

function About() {
  return (
    <div className="About" id="about">
      <h2 className="section-header"><span className="color-main">{"<"}</span>About Me <span className="color-main">{"/>"}</span></h2>
      <div className="About-content">
        <p>A short haiku to describe myself:</p>
        <p className="About-haiku">A lifelong learner,</p>
        <p className="About-haiku">I always give it my all</p>
        <p className="About-haiku">and push my limits.</p>
        <p>In all seriousness, I’m passionate about solving problems and I love software development because it challenges me and forces me to think outside the box. One of my favorite aspects of the development process is to sit down with my whiteboard and plan out my projects. I'm elated when I finally start coding- there’s always so much to learn!</p>
      </div>
    </div>
  );
}

export default About;