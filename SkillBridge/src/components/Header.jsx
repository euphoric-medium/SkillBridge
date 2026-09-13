import { Link } from 'react-router-dom'; // when the user clicks on the start matching , this takes them to that 
                                         // Link is designed for navigation inside a React application without doing a full browser page reload.
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
