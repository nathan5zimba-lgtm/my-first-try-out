import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Play, Users, Clock, QrCode } from 'lucide-react';

interface HeroProps {
  onExploreDemo: () => void;
}

export function Hero({ onExploreDemo }: HeroProps) {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Academic Course Badge & Module Tracker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>BSE2201 Software Engineering Foundations</span>
              <span className="text-slate-500">·</span>
              <span className="text-blue-400 font-semibold">Group 6 Assignment</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              QR-Based Attendance <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Management System
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Replacing slow, error-prone paper rosters with dynamic, cryptographic QR codes. 
              Lecturers launch real-time sessions, students authenticate via mobile in under 5 seconds, 
              and duplicate proxy submissions are automatically eliminated.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onExploreDemo}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Launch Live Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#problem"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
              >
                <span>Read Problem Analysis</span>
              </a>

              <a
                href="#team"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Users className="w-4 h-4" />
                <span>Meet Team (10)</span>
              </a>
            </div>

            {/* Claim-to-Proof Metrics */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums tracking-tight">&lt; 5s</div>
                <div className="text-xs text-slate-400 mt-0.5">Check-in time per student</div>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <div className="text-2xl font-bold text-emerald-400 font-mono tabular-nums tracking-tight">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Automated paperless sync</div>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <div className="text-2xl font-bold text-sky-400 font-mono tabular-nums tracking-tight">0</div>
                <div className="text-xs text-slate-400 mt-0.5">Proxy signing tolerance</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Hero Asset & Live Interactive Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-2 shadow-2xl backdrop-blur-sm overflow-hidden group">
              {/* Image Frame with fallback */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-xl overflow-hidden bg-slate-950">
                <img
                  src="/src/assets/images/hero_attendance_system_1790715863875.jpg"
                  alt="Modern university lecture hall with lecturer projecting dynamic QR attendance code on auditorium display"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Visual Overlay Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Live Session Status Overlay Pill in Card Corner */}
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded-lg px-3 py-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-medium text-slate-200">Session Active · BSE2201</span>
                </div>

                {/* Interactive Mini Preview Tag at Bottom */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-blue-600/20 text-blue-400 rounded-md border border-blue-500/30">
                        <QrCode className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Dynamic Cryptographic QR</div>
                        <div className="text-[11px] text-slate-400">Tokens refresh every session</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-emerald-400 font-semibold">Ready to Scan</span>
                      <div className="text-[10px] text-slate-500">Device Locked</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick architectural highlights bar */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Anti-Proxy Device Lock
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                Time-Stamped Ledger
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Registry Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
