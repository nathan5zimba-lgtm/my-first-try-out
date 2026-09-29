import { useState, useEffect } from 'react';
import { QrCode, Play, RotateCcw, Download, CheckCircle, AlertOctagon, Smartphone, Monitor, ShieldCheck, UserCheck, Clock, Users, ArrowRight } from 'lucide-react';
import { AttendanceRecord } from '../types';

interface InteractiveDemoProps {
  onSuccessToast?: (msg: string) => void;
}

export function InteractiveDemo({ onSuccessToast }: InteractiveDemoProps) {
  // Lecturer State
  const [courseCode, setCourseCode] = useState('BSE2201');
  const [topic, setTopic] = useState('Sprint Planning & Agile Foundations');
  const [sessionId, setSessionId] = useState('BSE-2026-09-S04');
  const [timerSeconds, setTimerSeconds] = useState(285); // 4m 45s
  const [isSessionActive, setIsSessionActive] = useState(true);

  // Student Scanner State
  const [studentIdInput, setStudentIdInput] = useState('2510936');
  const [studentNameInput, setStudentNameInput] = useState('Zimba Nathan');
  const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'success' | 'duplicate'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Initial Attendance Records
  const initialRecords: AttendanceRecord[] = [
    {
      id: 'REC-001',
      studentId: '2510928',
      studentName: 'Kamboyi Rapheal',
      courseCode: 'BSE2201',
      sessionId: 'BSE-2026-09-S04',
      date: '2026-09-29',
      time: '14:02:15',
      status: 'Present',
      deviceFingerprint: 'DEV_iOS_9A81'
    },
    {
      id: 'REC-002',
      studentId: '2511586',
      studentName: 'Daka Wesley',
      courseCode: 'BSE2201',
      sessionId: 'BSE-2026-09-S04',
      date: '2026-09-29',
      time: '14:02:32',
      status: 'Present',
      deviceFingerprint: 'DEV_AND_4C22'
    },
    {
      id: 'REC-003',
      studentId: '2511587',
      studentName: 'Silungwe Lanzi',
      courseCode: 'BSE2201',
      sessionId: 'BSE-2026-09-S04',
      date: '2026-09-29',
      time: '14:03:04',
      status: 'Present',
      deviceFingerprint: 'DEV_AND_1F90'
    },
    {
      id: 'REC-004',
      studentId: '2510963',
      studentName: 'Salinga Mwansa',
      courseCode: 'BSE2201',
      sessionId: 'BSE-2026-09-S04',
      date: '2026-09-29',
      time: '14:03:41',
      status: 'Present',
      deviceFingerprint: 'DEV_WIN_8E31'
    }
  ];

  const [records, setRecords] = useState<AttendanceRecord[]>(initialRecords);

  // Sample quick student pick list for lecturer testing
  const sampleStudents = [
    { id: '2510936', name: 'Zimba Nathan' },
    { id: '2300780', name: 'Kamaloni Ackson' },
    { id: '2120992', name: 'Banda Madalitso' },
    { id: '2510923', name: 'Nathan Nansenga' },
    { id: '2300084', name: 'Chimbokaila Remmy' },
    { id: '2511602', name: 'Chileshe Kondwani' },
    { id: '2510928', name: 'Kamboyi Rapheal (Already Submitted)' }
  ];

  // Live timer tick
  useEffect(() => {
    if (!isSessionActive || timerSeconds <= 0) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isSessionActive, timerSeconds]);

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  // Student Scan Action Handler
  const handleStudentScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentIdInput.trim()) return;

    setScanStatus('scanning');
    setFeedbackMessage('Establishing encrypted handshake with session token...');

    setTimeout(() => {
      // 1. Check if session active
      if (!isSessionActive || timerSeconds <= 0) {
        setScanStatus('duplicate');
        setFeedbackMessage('SESSION EXPIRED: This QR session has elapsed. Please request a code refresh from the lecturer.');
        return;
      }

      // 2. Check for duplicate studentId + sessionId constraint
      const alreadyCheckedIn = records.some(
        (r) => r.studentId.trim() === studentIdInput.trim() && r.sessionId === sessionId
      );

      if (alreadyCheckedIn) {
        setScanStatus('duplicate');
        setFeedbackMessage(
          `DUPLICATE SUBMISSION BLOCKED: Student ID ${studentIdInput} has already recorded attendance for ${sessionId}. Anti-proxy device lock enforced.`
        );
      } else {
        // Success: Record attendance with timestamp
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });
        const dateStr = now.toISOString().split('T')[0];

        const newRecord: AttendanceRecord = {
          id: `REC-${(records.length + 1).toString().padStart(3, '0')}`,
          studentId: studentIdInput.trim(),
          studentName: studentNameInput.trim() || 'Verified Student',
          courseCode: courseCode,
          sessionId: sessionId,
          date: dateStr,
          time: timeStr,
          status: 'Present',
          deviceFingerprint: `DEV_MOBILE_${Math.random().toString(36).substring(2, 6).toUpperCase()}`
        };

        setRecords((prev) => [newRecord, ...prev]);
        setScanStatus('success');
        setFeedbackMessage(
          `ATTENDANCE VERIFIED: Student ID ${studentIdInput} (${studentNameInput}) successfully recorded at ${timeStr}.`
        );
        onSuccessToast?.('Attendance successfully verified and logged into registry database.');
      }
    }, 450);
  };

  // Export CSV Handler
  const handleExportCSV = () => {
    const headers = ['Record ID', 'Student ID', 'Student Name', 'Course', 'Session ID', 'Date', 'Time', 'Status', 'Device Lock'];
    const rows = records.map((r) => [
      r.id,
      r.studentId,
      r.studentName,
      r.courseCode,
      r.sessionId,
      r.date,
      r.time,
      r.status,
      r.deviceFingerprint
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${courseCode}_Attendance_${sessionId}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResetSession = () => {
    const newSessionToken = `BSE-2026-09-S${Math.floor(10 + Math.random() * 90)}`;
    setSessionId(newSessionToken);
    setTimerSeconds(300);
    setIsSessionActive(true);
    setScanStatus('idle');
    setFeedbackMessage('');
    setRecords(initialRecords);
  };

  return (
    <section id="demo" className="py-20 bg-slate-900/30 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <Play className="w-4 h-4 fill-emerald-400" />
            <span>Interactive Prototype Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Test the AttendQR System in Real Time
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Experience the dual perspectives: The lecturer projecting the dynamic session QR code, 
            and the student mobile scanner verifying matriculation IDs and enforcing duplicate rejection.
          </p>
        </div>

        {/* Dual Cockpit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Lecturer Console Display (7 cols) */}
          <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Lecturer Auditorium Display</h3>
                  <p className="text-xs text-slate-400">Projector View & Session Controller</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResetSession}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer"
                  title="Generate fresh session token and reset"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>New Token</span>
                </button>
              </div>
            </div>

            {/* Course & Session Info */}
            <div className="grid grid-cols-3 gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400">Course:</span>
                <div className="font-semibold text-white font-mono mt-0.5">{courseCode}</div>
              </div>
              <div>
                <span className="text-slate-400">Session ID:</span>
                <div className="font-semibold text-blue-400 font-mono mt-0.5">{sessionId}</div>
              </div>
              <div>
                <span className="text-slate-400">Time Remaining:</span>
                <div className="font-bold text-emerald-400 font-mono mt-0.5 tabular-nums flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{formatTimer(timerSeconds)}</span>
                </div>
              </div>
            </div>

            {/* QR Projection Display Container */}
            <div className="flex flex-col items-center justify-center p-6 bg-slate-900/40 rounded-2xl border border-slate-800/80 text-center relative overflow-hidden">
              <div className="relative p-5 bg-white rounded-2xl shadow-xl shadow-blue-500/10 border-4 border-slate-200">
                {/* SVG Visual QR Code with dynamic visual styling */}
                <svg
                  className="w-48 h-48 sm:w-56 sm:h-56"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Background */}
                  <rect width="100" height="100" fill="white" />
                  {/* Top-Left Position Detection Marker */}
                  <rect x="8" y="8" width="24" height="24" rx="3" fill="#0f172a" />
                  <rect x="13" y="13" width="14" height="14" rx="2" fill="white" />
                  <rect x="16" y="16" width="8" height="8" rx="1" fill="#2563eb" />

                  {/* Top-Right Position Detection Marker */}
                  <rect x="68" y="8" width="24" height="24" rx="3" fill="#0f172a" />
                  <rect x="73" y="73" width="14" height="14" rx="2" fill="white" />
                  <rect x="76" y="16" width="8" height="8" rx="1" fill="#2563eb" />
                  <rect x="73" y="13" width="14" height="14" rx="2" fill="white" />

                  {/* Bottom-Left Position Detection Marker */}
                  <rect x="8" y="68" width="24" height="24" rx="3" fill="#0f172a" />
                  <rect x="13" y="73" width="14" height="14" rx="2" fill="white" />
                  <rect x="16" y="76" width="8" height="8" rx="1" fill="#2563eb" />

                  {/* Dynamic Matrix Bit Pattern */}
                  <rect x="36" y="10" width="5" height="5" fill="#0f172a" />
                  <rect x="44" y="10" width="5" height="5" fill="#0f172a" />
                  <rect x="52" y="10" width="5" height="5" fill="#0f172a" />
                  <rect x="36" y="18" width="5" height="5" fill="#0f172a" />
                  <rect x="48" y="18" width="8" height="5" fill="#2563eb" />

                  <rect x="10" y="36" width="5" height="5" fill="#0f172a" />
                  <rect x="18" y="36" width="5" height="5" fill="#0f172a" />
                  <rect x="26" y="36" width="5" height="5" fill="#0f172a" />
                  <rect x="36" y="36" width="6" height="6" fill="#2563eb" />
                  <rect x="45" y="36" width="10" height="5" fill="#0f172a" />
                  <rect x="60" y="36" width="5" height="5" fill="#0f172a" />
                  <rect x="72" y="36" width="5" height="5" fill="#0f172a" />
                  <rect x="82" y="36" width="8" height="5" fill="#0f172a" />

                  <rect x="36" y="46" width="5" height="8" fill="#0f172a" />
                  <rect x="44" y="44" width="12" height="12" rx="2" fill="#2563eb" />
                  <rect x="60" y="46" width="6" height="6" fill="#0f172a" />
                  <rect x="70" y="46" width="5" height="8" fill="#0f172a" />

                  <rect x="10" y="48" width="5" height="5" fill="#0f172a" />
                  <rect x="20" y="48" width="5" height="5" fill="#0f172a" />
                  <rect x="10" y="58" width="5" height="5" fill="#0f172a" />
                  <rect x="18" y="58" width="5" height="5" fill="#0f172a" />
                  <rect x="26" y="58" width="5" height="5" fill="#0f172a" />

                  <rect x="36" y="60" width="5" height="5" fill="#0f172a" />
                  <rect x="44" y="60" width="5" height="5" fill="#0f172a" />
                  <rect x="52" y="60" width="5" height="5" fill="#0f172a" />
                  <rect x="60" y="60" width="5" height="5" fill="#0f172a" />
                  <rect x="68" y="68" width="5" height="5" fill="#0f172a" />
                  <rect x="76" y="68" width="5" height="5" fill="#0f172a" />
                  <rect x="84" y="68" width="8" height="5" fill="#0f172a" />

                  <rect x="36" y="72" width="8" height="5" fill="#2563eb" />
                  <rect x="48" y="72" width="5" height="5" fill="#0f172a" />
                  <rect x="56" y="72" width="5" height="5" fill="#0f172a" />
                  <rect x="68" y="76" width="5" height="5" fill="#0f172a" />
                  <rect x="76" y="76" width="5" height="5" fill="#0f172a" />
                  <rect x="84" y="76" width="5" height="5" fill="#0f172a" />

                  <rect x="36" y="82" width="5" height="8" fill="#0f172a" />
                  <rect x="44" y="82" width="8" height="5" fill="#0f172a" />
                  <rect x="56" y="82" width="5" height="8" fill="#2563eb" />
                  <rect x="68" y="84" width="8" height="5" fill="#0f172a" />
                  <rect x="80" y="84" width="10" height="5" fill="#0f172a" />
                </svg>

                {/* Center Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded-md shadow-sm border border-slate-300">
                  <div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center text-white">
                    <QrCode className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-white">Displaying to Auditorium Screen</div>
                <div className="font-mono text-slate-400 text-[11px]">Token: {sessionId} · Cryptographic Hash: SHA256</div>
              </div>
            </div>
          </div>

          {/* Right Column: Student Smartphone Scanner Simulator (6 cols) */}
          <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Student Mobile Scanner</h3>
                  <p className="text-xs text-slate-400">Simulate Student Check-in & Duplicate Prevention</p>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/80 px-2 py-0.5 rounded">
                Camera Active
              </span>
            </div>

            {/* Quick-Select Student Test Profiles */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Quick-Select Test Student from Roster:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {sampleStudents.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setStudentIdInput(s.id);
                      setStudentNameInput(s.name.replace(' (Already Submitted)', ''));
                      setScanStatus('idle');
                      setFeedbackMessage('');
                    }}
                    className={`px-2.5 py-1 text-xs rounded-lg border transition-colors cursor-pointer ${
                      studentIdInput === s.id
                        ? 'bg-blue-600/20 border-blue-500 text-blue-300 font-medium'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {s.name} ({s.id})
                  </button>
                ))}
              </div>
            </div>

            {/* Student Verification Form */}
            <form onSubmit={handleStudentScan} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="studentIdInput" className="block text-xs font-medium text-slate-300 mb-1">
                    Student ID / Matriculation No.
                  </label>
                  <input
                    id="studentIdInput"
                    type="text"
                    required
                    value={studentIdInput}
                    onChange={(e) => setStudentIdInput(e.target.value)}
                    placeholder="e.g. 2510936"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="studentNameInput" className="block text-xs font-medium text-slate-300 mb-1">
                    Student Full Name
                  </label>
                  <input
                    id="studentNameInput"
                    type="text"
                    required
                    value={studentNameInput}
                    onChange={(e) => setStudentNameInput(e.target.value)}
                    placeholder="e.g. Zimba Nathan"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Action Button: Scan and Verify */}
              <button
                type="submit"
                disabled={scanStatus === 'scanning'}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 disabled:opacity-50 text-white font-semibold rounded-xl text-sm transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <QrCode className="w-4 h-4" />
                <span>{scanStatus === 'scanning' ? 'Scanning & Validating...' : 'Scan Projected QR & Submit'}</span>
              </button>
            </form>

            {/* Dynamic Status / Duplicate Rejection Feedback Box */}
            {feedbackMessage && (
              <div
                className={`p-4 rounded-xl border text-xs leading-relaxed animate-in fade-in duration-200 ${
                  scanStatus === 'success'
                    ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                    : 'bg-rose-950/30 border-rose-500/40 text-rose-200'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  {scanStatus === 'success' ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="font-semibold text-white">
                      {scanStatus === 'success' ? 'Verification Success' : 'Integrity Safeguard Triggered'}
                    </div>
                    <div className="mt-1">{feedbackMessage}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Anti-Proxy Rule Explainer Card */}
            <div className="p-3.5 bg-slate-900/40 border border-slate-800/80 rounded-xl text-xs text-slate-400 space-y-1">
              <div className="text-white font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Duplicate Prevention Live Test</span>
              </div>
              <p>
                Try clicking "Scan Projected QR & Submit" twice with the same Student ID, or pick 
                <strong> Kamboyi Rapheal (Already Submitted)</strong>. AttendQR will reject the duplicate attempt and protect the attendance integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Live Lecturer Real-Time Ledger Table */}
        <div className="mt-12 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-5 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">Live Attendance Ledger ({records.length} Recorded)</h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Real-time synchronized records stored for {courseCode} · Session {sessionId}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleExportCSV}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-blue-400" />
                <span>Export Attendance CSV</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900/80 text-xs font-mono text-slate-400 uppercase border-b border-slate-800">
                <tr>
                  <th scope="col" className="py-3 px-5">Record ID</th>
                  <th scope="col" className="py-3 px-5">Student ID</th>
                  <th scope="col" className="py-3 px-5">Student Name</th>
                  <th scope="col" className="py-3 px-5">Timestamp</th>
                  <th scope="col" className="py-3 px-5">Status</th>
                  <th scope="col" className="py-3 px-5">Device Lock Token</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300 font-mono text-xs">
                {records.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-5 font-semibold text-blue-400">{r.id}</td>
                    <td className="py-3.5 px-5 text-white">{r.studentId}</td>
                    <td className="py-3.5 px-5 font-sans font-medium text-slate-200">{r.studentName}</td>
                    <td className="py-3.5 px-5 text-slate-400 tabular-nums">{r.date} {r.time}</td>
                    <td className="py-3.5 px-5">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-800/80">
                        <CheckCircle className="w-3 h-3" />
                        {r.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-slate-500 text-[11px]">{r.deviceFingerprint}</td>
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
