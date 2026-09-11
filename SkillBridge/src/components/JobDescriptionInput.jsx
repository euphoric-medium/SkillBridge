import { useId } from 'react';

function JobDescriptionInput({ value, onChange }) {
  const textareaId = useId();

  return (
    <section className="panel" aria-labelledby="job-panel-title">
      <h3 id="job-panel-title">Job Description</h3>
      <div className="textarea-wrap">
        <label htmlFor={textareaId}>Paste the job description</label>
        <textarea
          id={textareaId}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Paste the job description here..."
        />
        <p className="char-count" aria-live="polite">
          {value.trim().length} characters
        </p>
      </div>
    </section>
  );
}

export default JobDescriptionInput;
