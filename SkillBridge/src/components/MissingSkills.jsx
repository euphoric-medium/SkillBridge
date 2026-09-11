function MatchedSkills({ skills }) {
  return (
    <section className="panel" aria-labelledby="matched-skills-title">
      <h3 id="matched-skills-title">Matched Skills</h3>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill}>✓ {skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default MatchedSkills;
