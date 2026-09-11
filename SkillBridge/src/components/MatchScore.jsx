function MatchScore({ score, label, summary }) {
  return (
    <section className="score-block" aria-labelledby="overall-match-title">
      <h3 id="overall-match-title">Overall Match</h3>
      <p className="score">{score}%</p>
      <p className="label">{label}</p>
      <p>{summary}</p>
    </section>
  );
}

export default MatchScore;
