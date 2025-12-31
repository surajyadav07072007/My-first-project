
import React from 'react';
import { Target, Users, ShieldCheck, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Mission</h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          We built VeriJob to empower fresh graduates and students who are often the target of sophisticated recruitment fraud.
        </p>
      </div>

      <div className="space-y-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why VeriJob?</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Every year, thousands of students lose millions of dollars and sensitive personal data to fake job listings. 
              These scams are becoming harder to spot as they use realistic company names and professional-looking emails.
            </p>
          </div>
          <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">The Statistics</h3>
            <ul className="space-y-4 text-blue-100">
              <li className="flex gap-3">
                <span className="text-2xl font-bold">1 in 4</span> students have encountered a suspicious job link.
              </li>
              <li className="flex gap-3">
                <span className="text-2xl font-bold">70%</span> of recruitment scams target 'Remote' positions.
              </li>
              <li className="flex gap-3">
                <span className="text-2xl font-bold">$1B+</span> lost annually to employment-related fraud globally.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-3xl bg-slate-50">
              <ShieldCheck className="w-12 h-12 text-blue-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Integrity First</h3>
              <p className="text-slate-600">We prioritize data accuracy and unbiased safety checks above all.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50">
              <Target className="w-12 h-12 text-indigo-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-slate-600">We tell you exactly why a job is flagged, empowering you to learn.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50">
              <Users className="w-12 h-12 text-amber-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-slate-600">Driven by students, for students. Collective safety is our goal.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
