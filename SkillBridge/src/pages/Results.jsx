import { Link, Navigate } from 'react-router-dom';
import MatchScore from '../components/MatchScore.jsx';
import MatchedSkills from '../components/MatchedSkills.jsx';
import MissingSkills from '../components/MissingSkills.jsx';
import Recommendations from '../components/Recommendations.jsx';
import SemanticMatches from '../components/SemanticMatches.jsx';
import { useMatch } from '../context/useMatch.js';

function Results() {
  const { lastResult, clearResult } = useMatch();

  if (!lastResult) {
    return <Navigate to="/match" replace />;
  }

  return (
    <>
      <h2>Resume Compatibility Report</h2>
      <p className="lede">
        {lastResult.resumeFileName
          ? `Report for ${lastResult.resumeFileName}`
          : 'Compatibility report based on the submitted resume and job description.'}
      </p>
      <MatchScore
        score={lastResult.matchScore}
        label={lastResult.matchLabel}
        summary={lastResult.summary}
      />
      <div className="two-column">
        <MatchedSkills skills={lastResult.matchedSkills} />
        <MissingSkills skills={lastResult.missingSkills} />
      </div>
      <div className="stack results-lower">
        <SemanticMatches matches={lastResult.semanticMatches} />
        <Recommendations items={lastResult.recommendations} />
      </div>
      <p className="note demo-note">
        This report uses labelled mock analysis data for the frontend demo.
        A live embedding model is not connected yet.
      </p>
      <p className="center-actions">
        <Link className="btn btn-primary" to="/match" onClick={clearResult}>
          Analyze Another Resume
        </Link>
      </p>
    </>
  );
}

export default Results;
