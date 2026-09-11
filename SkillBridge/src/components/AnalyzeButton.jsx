function AnalyzeButton({ disabled, isLoading }) {
  return (
    <button
      type="submit"
      className="btn btn-primary"
      disabled={disabled || isLoading}
    >
      {isLoading ? 'Analyzing...' : 'Analyze Match'}
    </button>
  );
}

export default AnalyzeButton;
