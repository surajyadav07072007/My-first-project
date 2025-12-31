
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Search, 
  AlertTriangle, 
  Info, 
  Home as HomeIcon, 
  LayoutDashboard,
  Menu,
  X
} from 'lucide-react';
import Home from './pages/Home';
import Verify from './pages/Verify';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Navigation */}
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center gap-2 group">
                  <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-slate-900 tracking-tight">VeriJob</span>
                </Link>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
                <Link to="/verify" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Verify Job</Link>
                <Link to="/dashboard" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Dashboard</Link>
                <Link to="/how-it-works" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">How it Works</Link>
                <Link to="/about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">About Us</Link>
                <Link to="/verify" className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                  Start Verification
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-slate-600 hover:text-blue-600"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/verify" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>Verify Job</Link>
              <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
              <Link to="/how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>How it Works</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-8 h-8 text-blue-500" />
                  <span className="text-2xl font-bold text-white">VeriJob</span>
                </div>
                <p className="text-slate-400 max-w-sm">
                  Protecting students and fresh graduates from fraudulent job postings and internship scams through advanced AI analysis.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><Link to="/verify" className="hover:text-white transition-colors">Verify Tool</Link></li>
                  <li><Link to="/how-it-works" className="hover:text-white transition-colors">Documentation</Link></li>
                  <li><a href="#" className="hover:text-white transition-colors">Security Tips</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} VeriJob Verification Portal. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
