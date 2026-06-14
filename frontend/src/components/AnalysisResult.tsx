import {
  DebugAnalysisResponse,
  DebugReport,
} from "../types/debug";

type Props = {
  result:
    | DebugAnalysisResponse
    | DebugReport;
};

const AnalysisResult = ({ result }: Props) => {

  const copyShareLink = async () => {
    if (!("id" in result)) {
      alert(
        "Please open a saved report from history first."
      );
  
      return;
    }
  
    const shareUrl =
      `${window.location.origin}/report/${result.id}`;
  
    await navigator.clipboard.writeText(
      shareUrl
    );
  
    alert("Share link copied!");
  };

  return (
    <div className="card analysis-card">
      <div className="result-header">
        <h2>Analysis Result</h2>

        {"id" in result && (
          <button
            className="share-button"
            onClick={copyShareLink}
          >
            Copy Share Link
          </button>
        )}
      </div>
      <section>
        <h3>Summary</h3>
        <p>{result.summary}</p>
      </section>

      <section>
        <h3>Root Cause</h3>
        <p>{result.rootCause}</p>
      </section>

      <section>
        <h3>Severity</h3>
        <span className={`badge ${result.severity}`}>
          {result.severity}
        </span>
      </section>

      <section>
        <h3>Confidence Score</h3>
        <p>{Math.round(result.confidenceScore * 100)}%</p>
      </section>

      <section>
        <h3>Suggested Fix</h3>
        <p>{result.suggestedFix}</p>
      </section>

      {result.improvedCode && (
        <section>
          <h3>Improved Code</h3>
          <pre>
            <code>{result.improvedCode}</code>
          </pre>
        </section>
      )}

      <section>
        <h3>Prevention Tips</h3>
        <ul>
          {result.preventionTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </section>

      {result.followUpQuestions && result.followUpQuestions.length > 0 && (
        <section>
          <h3>Follow-up Questions</h3>
          <ul>
            {result.followUpQuestions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default AnalysisResult;