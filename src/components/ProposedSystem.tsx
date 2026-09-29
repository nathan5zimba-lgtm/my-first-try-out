import { QrCode, Cpu, ShieldCheck, Smartphone, CheckCircle, Database, Server, Users, ArrowRight, Layers, Lock } from 'lucide-react';

export function ProposedSystem() {
  const steps = [
    {
      num: '01',
      title: 'Lecturer Authentication',
      actor: 'Lecturer',
      desc: 'The lecturer logs into AttendQR using academic institutional credentials with role-based authorization.'
    },
    {
      num: '02',
      title: 'Session Creation',
      actor: 'Lecturer',
      desc: 'Lecturer selects course (e.g. BSE2201), class section, and establishes a time validity window (e.g. 5–10 mins).'
    },
    {
      num: '03',
      title: 'Dynamic QR Generation',
      actor: 'AttendQR Core',
      desc: 'System generates a unique cryptographically signed session token embedded within a dynamic QR code.'
    },
    {
      num: '04',
      title: 'Classroom Display',
      actor: 'Lecturer',
      desc: 'The dynamic QR code is projected onto the auditorium display screen or lecture podium monitor for the class.'
    },
    {
      num: '05',
      title: 'Mobile Device Scan',
      actor: 'Student',
      desc: 'Students scan the projected code with their smartphone camera, directing their browser to the secure session URL.'
    },
    {
      num: '06',
      title: 'Student Identity Verification',
      actor: 'Student',
      desc: 'Student authenticates with their unique Student ID number and verified institutional account profile.'
    },
    {
      num: '07',
      title: 'Session Validity Check',
      actor: 'AttendQR Core',
      desc: 'System inspects token expiration, active session status, and verifies device browser fingerprint.'
    },
    {
      num: '08',
      title: 'Ledger Record Committed',
      actor: 'Database',
      desc: 'Attendance is recorded with exact millisecond timestamp, status (Present/Late), and compound unique index.'
    },
    {
      num: '09',
      title: 'Live Real-Time Feedback',
      actor: 'Lecturer & Registry',
      desc: 'The lecturer monitor updates in real time with confirmed student counts, roster audit logs, and export capability.'
    }
  ];

  const userRoles = [
    {
      title: 'University Students',
      badge: 'Scan & Verify',
      desc: 'Seamless, frictionless attendance recording under 5 seconds. Transparent real-time record of semester attendance percentages to ensure examination eligibility.',
      features: ['No paper queueing', 'Instant submission receipt', 'Mobile browser accessible']
    },
    {
      title: 'Course Lecturers',
      badge: 'Control & Monitor',
      desc: 'Reclaim 10–15 minutes of lecture time. Effortless dynamic session launch, active countdown timer, real-time live headcount, and 1-click CSV/Excel roll export.',
      features: ['Dynamic code refresh', 'Live class roll tracker', 'Definitive attendance audits']
    },
    {
      title: 'Academic Registry',
      badge: 'Analyze & Enforce',
      desc: 'Direct integration with institutional student demographic databases. Automated semester reports, zero misplaced sheets, and early identification of at-risk students.',
      features: ['Centralized relational DB', 'Accreditation compliance', 'Zero manual data entry']
    }
  ];

  return (
    <section id="system" className="py-20 bg-slate-900/40 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <Cpu className="w-4 h-4" />
            <span>The Proposed Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            AttendQR: Engineering a Contactless Academic Ledger
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            AttendQR is a lightweight, web-first attendance management solution engineered for university courses. 
            It leverages dynamic cryptographic QR tokens, anti-proxy device checks, and real-time database constraints 
            without requiring expensive biometrics or proprietary scanning hardware.
          </p>
        </div>

        {/* System Architecture Graphic & Explanatory Panel */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-2 shadow-xl">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950">
                <img
                  src="/src/assets/images/qr_system_architecture_1790715888188.jpg"
                  alt="High-tech 3D isometric visualization of digital QR attendance transmission from smartphone to secure cloud registry database"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300 bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-800">
                  <span className="font-semibold text-white">System Architecture:</span> Dynamic Session Token &rarr; Browser Client &rarr; Validation Engine &rarr; Registry Schema.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Anti-Proxy & Duplicate Prevention Protocol</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Compound Integrity: Preventing Buddy Punching
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                As detailed in our system proposal, preventing students from scanning multiple times or signing for absent peers is a critical requirement. AttendQR enforces dual safeguards:
              </p>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                  <Lock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold">1. Device Session Fingerprint Lock:</strong> The client session stores a localized non-volatile cryptographic token. A single smartphone cannot repeatedly fire attendance for multiple student IDs within the same active session.
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                  <Database className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold">2. Database Unique Constraint:</strong> The persistent schema enforces a strict composite primary index on <code className="text-blue-300 bg-slate-900 px-1 py-0.5 rounded font-mono">(student_id, session_id)</code>. Any attempt to record a duplicate is instantaneously rejected at the engine level.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 text-xs text-blue-200">
              <span className="font-semibold text-white">Feasibility Advantage:</span> Because AttendQR operates via standard modern mobile web browsers, the university incurs zero expense for specialized hardware like fingerprint readers or RFID turnstiles.
            </div>
          </div>
        </div>

        {/* 9-Step Process Journey */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">The 9-Step Operational Lifecycle</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">From lecture initialization to permanent academic ledger recording</p>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/70 border border-slate-700 text-xs font-mono text-slate-300">
              <span>9 Steps</span>
              <span className="text-slate-500">·</span>
              <span className="text-emerald-400 font-semibold">Verified Spec</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((st) => (
              <div
                key={st.num}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold font-mono text-blue-500 group-hover:text-blue-400 transition-colors">
                      {st.num}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700/60">
                      {st.actor}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-white group-hover:text-blue-200 transition-colors">
                    {st.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Intended Users Section */}
        <div className="mt-16">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white">Intended System Users</h3>
            <p className="text-xs text-slate-400 mt-0.5">Designed specifically around the three core academic stakeholders</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userRoles.map((role) => (
              <div
                key={role.title}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-semibold text-blue-400 font-mono">{role.badge}</div>
                  <h4 className="text-lg font-bold text-white mt-1">{role.title}</h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{role.desc}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-1.5">
                  {role.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
