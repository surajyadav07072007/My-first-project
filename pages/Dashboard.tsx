
import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  ShieldAlert, 
  MessageSquare, 
  ChevronRight,
  Upload,
  User,
  History,
  Info
} from 'lucide-react';
import { ReportData } from '../types';

const Dashboard: React.FC = () => {
  const [reports, setReports] = useState<ReportData[]>([
    {
      companyName: 'Global Remote Services Inc',
      reason: 'Asking for 200$ registration fee',
      evidenceText: 'Attached chat screenshots of recruiter asking for crypto payment.',
      timestamp: '2 hours ago'
    },
    {
      companyName: 'CryptoMine HR',
      reason: 'Phishing for ID documents',
      evidenceText: 'Requested full passport scan before interview.',
      timestamp: '1 day ago'
    }
  ]);

  const [showReportForm, setShowReportForm] = useState(false);
  const [newReport, setNewReport] = useState<Partial<ReportData>>({});

  const handleReport = (e: React.FormEvent) => {
    e.preventDefault();
    const fullReport: ReportData = {
      companyName: newReport.companyName || 'Anonymous',
      reason: newReport.reason || '',
      evidenceText: newReport.evidenceText || '',
      timestamp: 'Just now'
    };
    setReports([fullReport, ...reports]);
    setShowReportForm(false);
    setNewReport({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Student Dashboard</h1>
          <p className="text-slate-600 mt-1">Monitor recent scams and manage your verification history.</p>
        </div>
        <button 
          onClick={() => setShowReportForm(true)}
          className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-100"
        >
          <Plus size={20} /> Report a Scam
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Stats Cards */}
        <div className="space-y-6">
          <StatMiniCard 
            icon={<History className="text-blue-500" />}
            label="Total Scans"
            value="12"
          />
          <StatMiniCard 
            icon={<ShieldAlert className="text-red-500" />}
            label="Threats Found"
            value="3"
          />
          <StatMiniCard 
            icon={<MessageSquare className="text-indigo-500" />}
            label="Community Reports"
            value="1,245"
          />
        </div>

        {/* Middle Activity Feed */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-50 flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Recent Community Reports</h3>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Filter size={14} /> Filter
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {reports.map((report, idx) => (
                <div key={idx} className="p-8 hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <ShieldAlert className="w-5 h-5 text-red-600" />
                      </div>
                      <h4 className="font-bold text-slate-900">{report.companyName}</h4>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{report.timestamp}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-700 mb-1">{report.reason}</p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{report.evidenceText}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Identity Theft Attempt</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Advance Fee Scam</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-4 text-sm font-bold text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              View All Global Reports <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Report Modal */}
      {showReportForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Report a Scam</h3>
              <button onClick={() => setShowReportForm(false)} className="text-slate-400 hover:text-slate-600">
                <Plus className="rotate-45" size={24} />
              </button>
            </div>
            <form onSubmit={handleReport} className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Company/Portal Name</label>
                <input 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="e.g. Acme SCAM Services"
                  onChange={e => setNewReport({...newReport, companyName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Primary Red Flag</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-red-500"
                  onChange={e => setNewReport({...newReport, reason: e.target.value})}
                >
                  <option>Asking for money</option>
                  <option>Personal info theft</option>
                  <option>Unsolicited WhatsApp text</option>
                  <option>Illegal work request</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Explain Evidence</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-red-500 resize-none"
                  placeholder="Tell us what happened..."
                  onChange={e => setNewReport({...newReport, evidenceText: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Upload Proof (Screenshots)</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                  <Upload className="text-slate-400 group-hover:text-blue-500 mb-2" size={32} />
                  <span className="text-sm font-medium text-slate-500">Click to upload files</span>
                  <input type="file" multiple className="hidden" />
                </div>
              </div>
              <button type="submit" className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-100">
                Submit Report to Community
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const StatMiniCard: React.FC<{ icon: React.ReactNode, label: string, value: string }> = ({ icon, label, value }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
    <div className="bg-slate-50 p-3 rounded-xl">
      {icon}
    </div>
    <div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</div>
    </div>
  </div>
);

export default Dashboard;
