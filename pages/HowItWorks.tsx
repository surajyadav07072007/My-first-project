
import React from 'react';
import { 
  FileSearch, 
  Globe, 
  Mail, 
  Cpu, 
  CheckCircle,
  ShieldCheck,
  Zap,
  ChevronDown
} from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">How Our Engine Works</h1>
        <p className="text-xl text-slate-600">VeriJob uses a multi-layered verification stack to audit every listing.</p>
      </div>

      <div className="space-y-4">
        <Step 
          num="01" 
          title="Website Integrity Scan" 
          icon={<Globe className="text-blue-500" />}
          description="We check the URL security (SSL), domain age, and server reputation. Most scam portals are less than 6 months old and use cheap hosting."
        />
        <Step 
          num="02" 
          title="Recruiter Identity Audit" 
          icon={<Mail className="text-indigo-500" />}
          description="Legitimate companies rarely use @gmail.com or @outlook.com for hiring. We verify if the email domain matches the company's official website."
        />
        <Step 
          num="03" 
          title="Psycholinguistic Analysis" 
          icon={<FileSearch className="text-amber-500" />}
          description="Our AI scans for high-pressure language ('URGENT', 'APPLY NOW'), unrealistic salaries, and phrases like 'processing fee' or 'security deposit'."
        />
        <Step 
          num="04" 
          title="Machine Learning Prediction" 
          icon={<Cpu className="text-emerald-500" />}
          description="We compare the job metadata against a database of 10,000+ known recruitment scams to find matching patterns and predict the risk level."
        />
        <Step 
          num="05" 
          title="Trust Score Generation" 
          icon={<CheckCircle className="text-slate-900" />}
          description="All checks are weighted and aggregated into a single 0-100 Trust Score to give you an immediate answer."
        />
      </div>

      <div className="mt-20 bg-slate-900 rounded-3xl p-10 text-center">
        <ShieldCheck className="w-16 h-16 text-blue-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">Ready to test it out?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">It only takes 30 seconds to save months of headache and protect your financial identity.</p>
        <a href="#/verify" className="inline-block bg-blue-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200/20">
          Verify Job Now
        </a>
      </div>
    </div>
  );
};

const Step: React.FC<{ num: string, title: string, icon: React.ReactNode, description: string }> = ({ num, title, icon, description }) => (
  <div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all flex flex-col md:flex-row gap-8 items-start">
    <div className="flex items-center gap-6">
      <span className="text-4xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">{num}</span>
      <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-blue-50 transition-colors">
        {icon}
      </div>
    </div>
    <div className="flex-grow pt-2">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default HowItWorks;
