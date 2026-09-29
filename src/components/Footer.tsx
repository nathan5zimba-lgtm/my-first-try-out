import { QrCode, Github, ExternalLink, ArrowUp, Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand & Academic Lockup */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-base tracking-tight">
              <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white">
                <QrCode className="w-3.5 h-3.5" />
              </div>
              <span>AttendQR</span>
              <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                Group 6
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-md">
              BSE2201 Software Engineering Foundations coursework project. Designed and engineered by 10 students using Agile sprint management, Git branching, and dynamic QR architecture.
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#problem" className="hover:text-white transition-colors">Problem</a>
            <a href="#system" className="hover:text-white transition-colors">Proposed System</a>
            <a href="#demo" className="hover:text-white transition-colors">Simulator</a>
            <a href="#team" className="hover:text-white transition-colors">Team (10)</a>
            <a href="#traceability" className="hover:text-white transition-colors">Jira Traceability</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer ml-auto md:ml-0"
              title="Return to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Attribution & Integrity Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; 2026 BSE2201 Group 6. Built for Academic Presentation on Monday, 28 September 2026.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-slate-400">Jira Project: SCH</span>
            <span>·</span>
            <span className="font-mono text-slate-400">10 Contributors</span>
            <span>·</span>
            <span className="text-emerald-400">Deployed & Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
