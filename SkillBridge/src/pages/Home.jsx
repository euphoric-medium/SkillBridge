import Hero from '../components/Hero.jsx';

function Home() {
  return (
    <>
      <Hero />
      <div className="two-column">
        <section className="panel">
          <h3>What this site does</h3>
          <p>
            Upload a resume, paste a job description, and review a
            compatibility report. The report is designed to show related
            meaning, not only words that appear in both documents.
          </p>
          <p>
            This frontend currently uses sample analysis data so the full
            product flow can be demonstrated before the Python backend is
            connected.
          </p>
        </section>
        <section className="panel">
          <h3>How it works</h3>
          <ol className="flow-list">
            <li>Resume</li>
            <li className="flow-arrow" aria-hidden="true">
              ↓
            </li>
            <li>Semantic Analysis</li>
            <li className="flow-arrow" aria-hidden="true">
              ↓
            </li>
            <li>Job Description</li>
            <li className="flow-arrow" aria-hidden="true">
              ↓
            </li>
            <li>Compatibility Score</li>
          </ol>
        </section>
      </div>
    </>
  );
}

export default Home;
