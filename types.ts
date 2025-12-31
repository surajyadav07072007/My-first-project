
export interface JobDetails {
  companyName: string;
  jobLink: string;
  recruiterEmail: string;
  description: string;
}

export interface VerificationResult {
  trustScore: number;
  status: 'safe' | 'warning' | 'risky';
  analysis: {
    websiteSecurity: string;
    emailVerification: string;
    descriptionAnalysis: string;
    aiPrediction: string;
    redFlags: string[];
  };
  details: {
    isSecure: boolean;
    isCorporateEmail: boolean;
    domainMatchesCompany: boolean;
    suspiciousKeywordsFound: string[];
  }
}

export interface ReportData {
  companyName: string;
  reason: string;
  evidenceText: string;
  timestamp: string;
}
