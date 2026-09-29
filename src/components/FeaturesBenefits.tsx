import { useState } from 'react';
import { QrCode, ShieldCheck, Clock, FileSpreadsheet, Sparkles, CheckCircle2, UserCheck, GraduationCap, Building2, Layers, Repeat } from 'lucide-react';

export function FeaturesBenefits() {
  const [activeTab, setActiveTab] = useState<'features' | 'benefits' | 'agile'>('features');

  const features = [
    {
      icon: QrCode,
      title: 'Dynamic Time-Expiring QR Sessions',
      tag: 'Cryptographic Security',
      description: 'Each lecture session dynamically creates a cryptographically signed QR code. The token expires automatically after a lecturer-defined window (e.g. 5 minutes), preventing students from sharing screenshots with absent peers.'
    },
    {
      icon: UserCheck,
      title: 'Instant Student Verification',
      tag: 'Registry Synchronization',
      description: 'As students scan the code, their credentials and matriculation number are matched against enrolled course rosters. Only legitimately enrolled students are confirmed as present.'
    },
    {
      icon: ShieldCheck,
      title: 'Dual Anti-Proxy Protection',
      tag: 'Zero Duplicate Tolerance',
      description: 'Enforces dual protection: local device fingerprinting ensures one mobile phone cannot submit for multiple student IDs, while the database schema rejects duplicate (studentId, sessionId) rows.'
    },
    {
      icon: Clock,
      title: 'Precision Timestamped Ledger',
      tag: 'Audit-Proof Timestamps',
      description: 'Every attendance record captures the exact millisecond, date, session code, and attendance classification (Present vs Late), creating a tamper-resistant academic audit trail.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Real-Time Roll & 1-Click Export',
      tag: 'Administrative Efficiency',
      description: 'Lecturers watch the attendance roster populate live during class. At the conclusion of the lecture, a single click exports clean, structured CSV/Excel reports formatted for registry submission.'
    },
    {
      icon: Layers,
      title: 'Zero Specialized Hardware',
      tag: 'Campus-Wide Scalability',
      description: 'No fingerprint hardware, smartcards, or biometric scanners required. AttendQR operates entirely inside web browsers using smartphones and projectors already present in lecture rooms.'
    }
  ];

  const stakeholderBenefits = [
    {
      stakeholder: 'University Students',
      icon: GraduationCap,
      accent: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
      headline: 'Effortless, Fair, and Transparent Record-Keeping',
      points: [
        'Complete check-in in under 5 seconds directly from their seat without standing in queues',
        'Transparent digital record of their attendance percentage to guarantee exam eligibility',
        'Elimination of unfair attendance disputes caused by lost or smudged paper rosters',
        'Zero specialized apps required; runs in any mobile browser (Safari, Chrome, Firefox)'
      ]
    },
    {
      stakeholder: 'Course Lecturers',
      icon: UserCheck,
      accent: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
      headline: 'Reclaim 10–15 Minutes Every Single Class',
      points: [
        'Start teaching immediately without the distracting chaos of circulating sign-in sheets',
        'Completely eradicate proxy "buddy punching" where students sign for missing peers',
        'Real-time classroom headcount indicator showing live registered vs scanned totals',
        'Export verified attendance rosters directly into departmental gradebook spreadsheets'
      ]
    },
    {
      stakeholder: 'Registry & University Administration',
      icon: Building2,
      accent: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400',
      headline: 'Instant Structured Data & Institutional Compliance',
      points: [
        'Centralized, relational database storage directly tied to student matriculation IDs',
        'Real-time automated reports for accreditation audits and academic standing committees',
        'Early warning alerts for chronically absent students before end-of-semester exam bars',
        'Zero recurrent printing or paper filing costs across thousands of class sessions'
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Core Capabilities & Value</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Features, Benefits & Agile Roadmap
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              Designed from the ground up to solve the specific bottlenecks of university lecture environments, 
              providing tangible value to students, faculty, and administrative leadership.
            </p>
          </div>

          {/* Interactive Navigation Control */}
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('features')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'features'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              System Features (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('benefits')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'benefits'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Stakeholder Benefits (3)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('agile')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'agile'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Agile MVP Roadmap
            </button>
          </div>
        </div>

        {/* Tab 1: System Features */}
        {activeTab === 'features' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">{feat.tag}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white tracking-tight">{feat.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Stakeholder Benefits */}
        {activeTab === 'benefits' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {stakeholderBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.stakeholder}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Stakeholder</span>
                        <h3 className="text-lg font-bold text-white">{item.stakeholder}</h3>
                      </div>
                    </div>
                    <p className="text-xs font-medium text-blue-300 mb-4">{item.headline}</p>
                    <div className="space-y-3">
                      {item.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: Agile Development Approach & MVP Scope */}
        {activeTab === 'agile' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  <Repeat className="w-4 h-4" />
                  <span>Iterative Engineering Philosophy</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Agile Delivery: Rapid MVP with Continuous Refinement
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  As justified in our project proposal document, rather than attempting to predict every classroom edge-case 
                  upfront in a rigid Waterfall model, Group 6 selected an Agile framework: 
                  <span className="text-blue-300 font-semibold font-mono"> Requirements &rarr; MVP &rarr; Testing &rarr; Feedback &rarr; Next Iteration</span>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-2">
                  <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl">
                    <span className="font-semibold text-white">Sprint 1 (MVP Baseline):</span> Session creation, QR display, student scan, Student ID capture, and database write.
                  </div>
                  <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl">
                    <span className="font-semibold text-white">Sprint 2 (Security Hardening):</span> Device lockout tokens, composite duplicate prevention, and real-time ledger refresh.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 p-5 rounded-xl bg-slate-950/90 border border-slate-800/80 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase">MVP Functionality Matrix</div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Dynamic session QR creation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Instant mobile camera scan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Student matriculation ID validation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Duplicate submission rejection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Live attendance ledger & CSV export</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
