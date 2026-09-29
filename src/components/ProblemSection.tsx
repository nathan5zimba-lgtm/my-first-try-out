import { AlertTriangle, Clock, FileSpreadsheet, UserX, Database, ArrowRight, Check, X } from 'lucide-react';

export function ProblemSection() {
  const painPoints = [
    {
      icon: Clock,
      title: 'Classroom Disruption & Time Drain',
      description: 'Passing clipboards or calling names in large classes (60–200+ students) burns 10–15 precious minutes of instructional time every single lecture.',
      impact: 'Up to 12.5% of total contact hours lost per semester.'
    },
    {
      icon: UserX,
      title: 'Proxy Signing & Buddy Punching',
      description: 'Paper rosters make it effortless for students to falsely sign attendance on behalf of absent friends without lecturer verification.',
      impact: 'Skewed attendance records undermine course integrity.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Illegibility & Lost Paper Sheets',
      description: 'Handwritten student IDs and rushed signatures are frequently unreadable. Physical sheets are easily misplaced, spilled on, or damaged.',
      impact: 'Disputed attendance claims and irrecoverable historical records.'
    },
    {
      icon: Database,
      title: 'Registry Disconnect & Delayed Analytics',
      description: 'Student records (ID, name, sex) live in the university registry database, but attendance remains trapped in paper binders for weeks.',
      impact: 'Registry cannot identify at-risk students before final exams.'
    }
  ];

  const comparisonRows = [
    {
      criterion: 'Attendance Recording Method',
      manual: 'Paper roster sheet passed around or verbal name calling',
      attendQR: 'Encrypted dynamic QR code displayed on screen or projector',
      winner: 'attendQR'
    },
    {
      criterion: 'Average Time Spent per Session',
      manual: '10 to 15+ minutes of continuous interruption',
      attendQR: 'Under 5 seconds per student without interrupting lecture',
      winner: 'attendQR'
    },
    {
      criterion: 'Proxy & Duplicate Prevention',
      manual: 'Virtually none; easy to sign for absent peers',
      attendQR: 'Strict compound DB constraint (studentId, sessionId) & device fingerprint',
      winner: 'attendQR'
    },
    {
      criterion: 'Data Availability for Registry',
      manual: 'Weeks of manual re-typing and reconciliation delay',
      attendQR: 'Instant structured digital data available in real time',
      winner: 'attendQR'
    },
    {
      criterion: 'Hardware Investment Required',
      manual: 'Paper, clipboards, pens, physical storage space',
      attendQR: 'Zero specialized hardware; uses student smartphones & projector',
      winner: 'attendQR'
    }
  ];

  return (
    <section id="problem" className="py-20 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span>The Identified University Challenge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Why Manual Paper Attendance Fails the Modern Lecture Hall
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            At our institution, student demographic records are maintained digitally in the registry, 
            yet classroom attendance is still captured through physical sign-in sheets. This disconnect creates 
            wasted instructional time, rampant proxy attendance, and unrecoverable data silos.
          </p>
        </div>

        {/* Problem Storytelling: Context & Editorial Photograph */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-3">
              <h3 className="text-lg font-semibold text-white">The Registry-to-Classroom Bottleneck</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                In courses like Software Engineering Foundations, lecture halls accommodate dozens or hundreds of eager students. 
                When a paper roll is circulated, it generates constant whispering, distracted students passing paper across rows, and 
                inevitable gaps where the sheet disappears before reaching the back of the auditorium.
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                Worse, academic staff and registry officers spend hours each week manually transcribing signatures into spreadsheets to evaluate 
                exam eligibility criteria (e.g. 75% mandatory class attendance). This outdated pipeline increases human error and administrative fatigue.
              </p>
            </div>

            {/* Who is affected cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider">Affected</div>
                <div className="text-sm font-bold text-white mt-1">Students</div>
                <p className="text-xs text-slate-400 mt-1">Distracted during class, vulnerable to lost attendance credits and inaccurate records.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Affected</div>
                <div className="text-sm font-bold text-white mt-1">Lecturers</div>
                <p className="text-xs text-slate-400 mt-1">Burdened with policing proxy sign-ins and sorting stacks of physical sheets.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Affected</div>
                <div className="text-sm font-bold text-white mt-1">Registry Staff</div>
                <p className="text-xs text-slate-400 mt-1">Struggles with delayed analytics and manual reconciliation before exam periods.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 p-2 shadow-xl">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950">
                <img
                  src="/src/assets/images/problem_manual_attendance_1790715877712.jpg"
                  alt="Cluttered manual paper attendance rosters, messy signatures, and disorganized lecture desk clipboards"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300 bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-800">
                  <span className="font-semibold text-white">Observed Reality:</span> Disorganized paper sign-in sheets lead to illegible IDs, disputed hours, and administrative delays.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pain Point Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight">{point.title}</h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{point.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/70 text-[11px] font-medium text-rose-300/90">
                  {point.impact}
                </div>
              </div>
            );
          })}
        </div>

        {/* Rigorous Comparison Matrix */}
        <div className="mt-16">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white">Comparative Analysis: Traditional Roll-Call vs AttendQR</h3>
            <p className="text-xs text-slate-400 mt-1">Direct evaluation of operational parameters and reliability standards</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900/90 text-xs text-slate-400 uppercase border-b border-slate-800 font-mono">
                <tr>
                  <th scope="col" className="py-3.5 px-6">Evaluation Dimension</th>
                  <th scope="col" className="py-3.5 px-6 text-rose-400">Traditional Paper System</th>
                  <th scope="col" className="py-3.5 px-6 text-blue-400 bg-blue-950/20">Proposed AttendQR Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300 text-xs sm:text-sm">
                {comparisonRows.map((row) => (
                  <tr key={row.criterion} className="hover:bg-slate-900/60 transition-colors">
                    <td className="py-4 px-6 font-medium text-white">{row.criterion}</td>
                    <td className="py-4 px-6 text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.manual}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-blue-200 bg-blue-950/10 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.attendQR}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
