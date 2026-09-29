import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ProposedSystem } from './components/ProposedSystem';
import { FeaturesBenefits } from './components/FeaturesBenefits';
import { InteractiveDemo } from './components/InteractiveDemo';
import { TeamSection } from './components/TeamSection';
import { JiraTraceability } from './components/JiraTraceability';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleScrollToDemo = () => {
    const el = document.getElementById('demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenDemo={handleScrollToDemo} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreDemo={handleScrollToDemo} />

        {/* Problem Analysis Section */}
        <ProblemSection />

        {/* Proposed System & 9-Step Architecture */}
        <ProposedSystem />

        {/* Features, Benefits & Agile MVP */}
        <FeaturesBenefits />

        {/* Interactive Prototype Simulator */}
        <InteractiveDemo onSuccessToast={showToast} />

        {/* 10 Team Members Showcase */}
        <TeamSection />

        {/* Jira Traceability, Kanban Board, Contribution Table & Defects */}
        <JiraTraceability />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Floating System Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 border border-emerald-500/50 rounded-2xl p-4 shadow-2xl shadow-black/50 text-xs text-white flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
