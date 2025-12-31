
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  Loader2, 
  ExternalLink, 
  Mail, 
  Building2, 
  Link as LinkIcon, 
  FileText,
  ArrowLeft,
  Info,
  Zap
} from 'lucide-react';
import { analyzeJob } from '../services/geminiService';
import { JobDetails, VerificationResult } from '../types';
import TrustScoreGauge from '../components/TrustScoreGauge';

const Verify: React.FC = () => {
  const [step, setStep] = useState<'input' | 'processing' | 'result'>('input');
  const [jobDetails, setJobDetails] = useState<JobDetails>({
    companyName: '',
    jobLink: '',
    recruiterEmail: '',
    description: ''
  });
  const [result, setResult] = useState<VerificationResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    try {
      const analysis = await analyzeJob(jobDetails);
      setResult(analysis);
      setStep('result');
    } catch (error) {
      console.error(error);
      alert('Analysis failed. Please try again.');
      setStep('input');
    }
  };

  if (step === 'processing') {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center">
        <Loader2 className="w-16 h-16 text-blue-600 animate-spin mb-6" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Analyzing Job Integrity...</h2>
        <div className="max-w-md text-slate-500 space-y-2">
          <p>Running website security scan...</p>
          <p>Checking recruiter email reputation...</p>
          <p>Parsing job description for fraud patterns...</p>
          <p>Running ML safety prediction...</p>
        </div>
      </div>
    );
  }

  if (step === 'result' && result) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <button 
          onClick={() => setStep('input')}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 mb-8 font-medium transition-colors"
        >
          <ArrowLeft size={18} /> New Verification
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Score Card */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-auto flex justify-center">
                  <TrustScoreGauge score={result.trustScore} />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 ${
                    result.status === 'safe' ? 'bg-green-100 text-green-700' : 
                    result.status === 'warning' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {result.status} Confidence
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Verification Verdict</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {result.analysis.aiPrediction}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Info className="text-blue-500" /> Detailed Analysis
              </h3>
              <div className="space-y-6">
                <AnalysisSection 
                  title="Website Security" 
                  text={result.analysis.websiteSecurity} 
                  status={result.details.isSecure ? 'pass' : 'fail'} 
                />
                <AnalysisSection 
                  title="Recruiter Verification" 
                  text={result.analysis.emailVerification} 
                  status={result.details.isCorporateEmail ? 'pass' : 'fail'} 
                />
                <AnalysisSection 
                  title="Description Quality" 
                  text={result.analysis.descriptionAnalysis} 
                  status={result.details.suspiciousKeywordsFound.length === 0 ? 'pass' : 'fail'} 
                />
              </div>
            </div>
          </div>

          {/* Sidebar: Red Flags */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="text-amber-500" /> Red Flags Detected
              </h3>
              <ul className="space-y-4">
                {result.analysis.redFlags.length > 0 ? (
                  result.analysis.redFlags.map((flag, i) => (
                    <li key={i} className="flex gap-3 text-slate-700 text-sm">
                      <ShieldAlert className="w-5 h-5 text-red-400 shrink-0" />
                      {flag}
                    </li>
                  ))
                ) : (
                  <li className="text-slate-500 italic">No major red flags detected.</li>
                )}
              </ul>
            </div>

            <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-100">
              <h3 className="text-lg font-bold mb-3">Our Recommendation</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                {result.status === 'safe' 
                  ? "This listing looks solid based on current checks. Still, never share sensitive personal documents like SSN or credit cards during initial contact."
                  : result.status === 'warning'
                  ? "Exercise high caution. Contact the company via their official website's 'Careers' page to verify this recruiter's identity."
                  : "We strongly advise AGAINST applying. This matches patterns of identity theft and advance-fee recruitment scams."}
              </p>
              <button 
                onClick={() => setStep('input')}
                className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Start Verification</h1>
        <p className="text-lg text-slate-600">Provide the job details below for a comprehensive safety audit.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Building2 size={16} className="text-blue-500" /> Company Name
              </label>
              <input 
                required
                type="text" 
                placeholder="e.g. Acme Corporation"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={jobDetails.companyName}
                onChange={e => setJobDetails({...jobDetails, companyName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <LinkIcon size={16} className="text-blue-500" /> Job/Internship Link
              </label>
              <input 
                required
                type="url" 
                placeholder="https://company.com/careers/..."
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={jobDetails.jobLink}
                onChange={e => setJobDetails({...jobDetails, jobLink: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Mail size={16} className="text-blue-500" /> Recruiter Email
            </label>
            <input 
              required
              type="email" 
              placeholder="recruiter@company.com"
              className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={jobDetails.recruiterEmail}
              onChange={e => setJobDetails({...jobDetails, recruiterEmail: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <FileText size={16} className="text-blue-500" /> Job Description
            </label>
            <textarea 
              required
              rows={8}
              placeholder="Paste the full job description here..."
              className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              value={jobDetails.description}
              onChange={e => setJobDetails({...jobDetails, description: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl text-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-200"
          >
            Run Safety Audit <Zap fill="white" size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

const AnalysisSection: React.FC<{ title: string, text: string, status: 'pass' | 'fail' }> = ({ title, text, status }) => (
  <div className="border-l-4 border-slate-200 pl-6 py-1">
    <div className="flex items-center gap-2 mb-2">
      <span className="font-bold text-slate-900">{title}</span>
      {status === 'pass' ? (
        <CheckCircle2 className="w-4 h-4 text-green-500" />
      ) : (
        <AlertTriangle className="w-4 h-4 text-amber-500" />
      )}
    </div>
    <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
  </div>
);

export default Verify;
