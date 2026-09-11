import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="home-welcome">
      <h2>welcome to SkillBridge</h2>
      <p className="tagline">Match your resume to the right job.</p>
      <p className="muted">
        Understand your compatibility beyond keywords.
      </p>
      <p>
        SkillBridge compares a candidate resume with a job description using
        semantic meaning, not only exact keyword overlap.
      </p>
      <p className="center-actions">
        <Link className="btn btn-primary" to="/match">
          Start Matching
        </Link>
      </p>
    </section>
  );
}

export default Hero;
