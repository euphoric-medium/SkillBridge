import { useEffect, useState } from 'react';

const STAGES = [
  'Reading resume',
  'Understanding job requirements',
  'Comparing semantic meaning',
  'Calculating compatibility',
];

function LoadingState() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) =>
        current < STAGES.length - 1 ? current + 1 : current,
      );
    }, 800);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="loading" aria-live="polite" aria-busy="true">
      <h2>Analyzing your resume...</h2>
      <p className="muted">
        Comparing semantic meaning between the resume and the job description.
      </p>
      <ol className="stage-list">
        {STAGES.map((stage, index) => {
          const isDone = index < activeIndex;
          const isCurrent = index === activeIndex;

          return (
            <li
              key={stage}
              className={isCurrent ? 'current' : undefined}
            >
              {isDone ? '✓' : isCurrent ? '→' : '○'} {stage}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default LoadingState;
