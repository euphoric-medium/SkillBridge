function Recommendations({ items }) {
  return (
    <section className="panel" aria-labelledby="recommendations-title">
      <h3 id="recommendations-title">Recommendations</h3>
      <p className="note">
        These suggestions are meant to improve how existing experience is
        presented. Do not add skills you do not have.
      </p>
      <ul className="rec-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Recommendations;
