
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Zap,
  ChevronRight,
  TrendingDown
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Don't Be a Victim of <span className="text-blue-600">Job Scams.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              VeriJob uses advanced Machine Learning and AI to analyze job listings, 
              verifying recruiter details and identifying red flags before you apply.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/verify" 
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-200"
              >
                Verify a Job Now <ChevronRight size={20} />
              </Link>
              <Link 
                to="/how-it-works" 
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                How it Works
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>100% Free for Students</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                <span>AI-Powered Analysis</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-full blur-3xl"></div>
            <img 
              src="https://picsum.photos/seed/job-safety/600/500" 
              alt="Security Illustration" 
              className="relative rounded-2xl shadow-2xl z-10 border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900">50K+</div>
              <div className="text-slate-500 font-medium mt-1">Jobs Verified</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500">1.2K+</div>
              <div className="text-slate-500 font-medium mt-1">Scams Blocked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900">99.8%</div>
              <div className="text-slate-500 font-medium mt-1">Detection Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900">24/7</div>
              <div className="text-slate-500 font-medium mt-1">Real-time Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Powerful Detection Engine</h2>
            <p className="text-lg text-slate-600">Our system performs multi-layered checks to ensure the opportunity is legitimate.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Search className="w-8 h-8 text-blue-500" />}
              title="Security Analysis"
              description="We check website security, age, and domain reputation to spot phishing attempts immediately."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-indigo-500" />}
              title="Email Authentication"
              description="Verify if recruiters are using free email providers like Gmail or legitimate corporate domains."
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-amber-500" />}
              title="AI JD Parsing"
              description="Our AI reads descriptions for suspicious keywords like 'pay fees', 'urgent joining', or unrealistic salaries."
            />
          </div>
        </div>
      </section>

      {/* Reporting Banner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Found a suspicious job?</h2>
              <p className="text-slate-300 text-lg mb-8">
                Help other students by reporting scams. Upload evidence and we'll flag it globally to protect the community.
              </p>
              <Link 
                to="/dashboard" 
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-bold transition-all"
              >
                Report a Scam <AlertTriangle size={20} />
              </Link>
            </div>
            <div className="relative mt-12 md:mt-0">
               <AlertTriangle className="w-48 h-48 text-red-500/20 absolute -top-10 -right-10" />
               <TrendingDown className="w-64 h-64 text-blue-500/10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all group">
    <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export default Home;
