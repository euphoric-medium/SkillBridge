import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <h1>
        <Link to="/">SkillBridge</Link>
      </h1>
      <p>Match your resume to the right opportunity.</p>
    </header>
  );
}

export default Header;
