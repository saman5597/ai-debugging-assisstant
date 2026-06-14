import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AnalysisResult from "../components/AnalysisResult";

import { fetchDebugReport } from "../api/reportApi";
import { DebugReport } from "../types/debug";

const ReportPage = () => {
  const { id } = useParams();

  const [report, setReport] =
  useState<DebugReport | null>(
    null
  );

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadReport();
  }, [id]);

  const loadReport = async () => {
    try {
      if (!id) return;

      const data =
        await fetchDebugReport(id);

      setReport(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="app">
        <h2>Loading report...</h2>
      </main>
    );
  }

  if (!report) {
    return (
      <main className="app">
        <h2>Report not found</h2>
      </main>
    );
  }

  return (
    <main className="app">
      <header>
        <h1>
          Shared Debug Report
        </h1>

        <p>
          View a previously generated AI
          debugging analysis.
        </p>
      </header>

      <AnalysisResult
        result={report}
      />
    </main>
  );
};

export default ReportPage;