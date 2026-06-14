import { useState } from "react";
import DebugForm from "../components/DebugForm";
import AnalysisResult from "../components/AnalysisResult";
import HistorySidebar from "../components/HistorySidebar";

import { DebugAnalysisResponse } from "../types/debug";
import { fetchDebugReport } from "../api/reportApi";

const HomePage = () => {
  const [result, setResult] =
    useState<DebugAnalysisResponse | null>(null);

  const handleHistorySelect = async (
    id: string
  ) => {
    try {
      const report =
        await fetchDebugReport(id);

      setResult(report);
    } catch (error) {
      console.error(error);

      alert("Failed to load report.");
    }
  };

  return (
    <main className="app">
      <header>
        <h1>
         AI <span>Root Cause Analyzer</span>
        </h1>

        <p>
            AI-powered debugging analysis for developers. Identify likely root causes, suggested fixes, and reusable debugging insights.
        </p>
      </header>

      <div className="main-layout">
        <HistorySidebar
          onSelect={handleHistorySelect}
        />

        <div className="layout">
          <DebugForm onResult={setResult} />

          {result ? (
            <AnalysisResult result={result} />
          ) : (
            <div className="card empty-result">
              <h2>Analysis Result</h2>

              <p>
                Analyze an error or select a previous report from the history panel to view root cause analysis.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default HomePage;