import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnalyzeButton from '../components/AnalyzeButton.jsx';
import JobDescriptionInput from '../components/JobDescriptionInput.jsx';
import LoadingState from '../components/LoadingState.jsx';
import ResumeUploader from '../components/ResumeUploader.jsx';
import { useMatch } from '../context/useMatch.js';
import { analyzeMatch } from '../services/api.js';

function Matcher() {
  const navigate = useNavigate();
  const { setLastResult } = useMatch();
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const canAnalyze = Boolean(resumeFile) && jobDescription.trim().length > 0;

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!resumeFile) {
      setError('Please select a resume file.');
      return;
    }

    if (!jobDescription.trim()) {
      setError('Please paste a job description.');
      return;
    }

    setIsLoading(true);

    try {
      const result = await analyzeMatch({
        resumeFile,
        jobDescription,
      });
      setLastResult(result);
      navigate('/results');
    } catch (analysisError) {
      setError(
        analysisError.message ||
          'The analysis could not be completed. Please try again.',
      );
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <>
      <h2>Resume ↔ Job Matcher</h2>
      <p className="lede">
        Compare your resume with a job description using semantic matching.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="two-column">
          <ResumeUploader file={resumeFile} onFileChange={setResumeFile} />
          <JobDescriptionInput
            value={jobDescription}
            onChange={setJobDescription}
          />
        </div>
        {error ? (
          <p className="form-error" role="alert">
            {error}
          </p>
        ) : null}
        <p className="center-actions">
          <AnalyzeButton disabled={!canAnalyze} isLoading={isLoading} />
        </p>
      </form>
    </>
  );
}

export default Matcher;
