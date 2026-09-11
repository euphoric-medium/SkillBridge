function SemanticMatches({ matches }) {
  return (
    <section className="panel" aria-labelledby="semantic-matches-title">
      <h3 id="semantic-matches-title">Semantic Matches</h3>
      <p>
        These pairs show related meaning, even when the wording is not
        identical. That is the difference between semantic matching and simple
        keyword matching.
      </p>
      {matches.map((item) => (
        <article className="semantic-card" key={`${item.resumeText}-${item.jobText}`}>
          <p>
            <strong>Resume:</strong> “{item.resumeText}”
          </p>
          <p>
            <strong>Job description:</strong> “{item.jobText}”
          </p>
          <p className="similarity">Similarity: {item.similarity}%</p>
        </article>
      ))}
    </section>
  );
}

export default SemanticMatches;
