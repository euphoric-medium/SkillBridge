import { useId, useState } from 'react';

const ACCEPTED_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const ACCEPTED_EXTENSIONS = ['.pdf', '.docx'];

function isAcceptedFile(file) {
  if (!file) {
    return false;
  }

  const name = file.name.toLowerCase();
  const hasAllowedExtension = ACCEPTED_EXTENSIONS.some((ext) =>
    name.endsWith(ext),
  );

  return hasAllowedExtension || ACCEPTED_TYPES.includes(file.type);
}

function formatFileSize(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function ResumeUploader({ file, onFileChange }) {
  const inputId = useId();
  const [isDragging, setIsDragging] = useState(false);
  const [localError, setLocalError] = useState('');

  function applyFile(nextFile) {
    if (!nextFile) {
      return;
    }

    if (!isAcceptedFile(nextFile)) {
      setLocalError('Please choose a PDF or DOCX file.');
      return;
    }

    setLocalError('');
    onFileChange(nextFile);
  }

  function handleInputChange(event) {
    const nextFile = event.target.files?.[0];
    applyFile(nextFile);
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const nextFile = event.dataTransfer.files?.[0];
    applyFile(nextFile);
  }

  function handleRemove() {
    setLocalError('');
    onFileChange(null);
  }

  return (
    <section className="panel" aria-labelledby="resume-panel-title">
      <h3 id="resume-panel-title">Your Resume</h3>
      <div className="resume-upload">
        <input
          id={inputId}
          className="file-input"
          type="file"
          accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleInputChange}
        />
        <label
          htmlFor={inputId}
          className={`dropzone${isDragging ? ' is-dragging' : ''}`}
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          <p>
            <strong>Drop your resume here</strong>
          </p>
          <p>PDF or DOCX</p>
          <p className="muted">or click to browse files</p>
        </label>
      </div>

      {file ? (
        <div className="file-meta">
          <p>
            <strong>Selected file:</strong> {file.name}
          </p>
          <p>
            <strong>Size:</strong> {formatFileSize(file.size)}
          </p>
          <button type="button" className="btn" onClick={handleRemove}>
            Remove file
          </button>
        </div>
      ) : null}

      {localError ? (
        <p className="form-error" role="alert">
          {localError}
        </p>
      ) : null}
    </section>
  );
}

export default ResumeUploader;
