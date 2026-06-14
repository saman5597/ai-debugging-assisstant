export type DebugAnalysisResponse = {
  summary: string;
  rootCause: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  confidenceScore: number;
  suggestedFix: string;
  improvedCode?: string;
  preventionTips: string[];
  followUpQuestions?: string[];
};

export type DebugReport = DebugAnalysisResponse & {
  id: string;
  errorMessage: string;
  language: string;
  framework?: string;
  createdAt: string;
};

export type DebugRequestPayload = {
  errorMessage: string;
  stackTrace?: string;
  codeSnippet?: string;
  language: string;
  framework?: string;
};
