import '../styles/About.css';

function About() {
  return (
    <div className="About" id="about">
      <h2 className="section-header"><span className="color-main">{"<"}</span>About Me <span className="color-main">{"/>"}</span></h2>
      <div className="About-content">
        <p>A short haiku to describe myself:</p>
        <p className="About-haiku">A lifelong learner,</p>
        <p className="About-haiku">I like to push my limits</p>
        <p className="About-haiku">and unearth knowledge.</p>
        <p>In all seriousness, I’m passionate about solving problems and I want a career in software development because that challenges me and forces me to think outside the box. I have consistently gravitated towards web development and I truly enjoy it. I find it exciting to sit down with my whiteboard and plan out my projects. I'm elated when I finally start coding (and come across problems I didn't initally think about)- there’s always so much to learn! My goal is to start in front-end and eventually learn more of the back-end in order to become a full-stack developer. However, I am open to different paths- I wouldn't want an intriguing oppurtunity to pass me by!</p>
      </div>
    </div>
  );
}

export default About;