import { useState } from 'react';
import { Users, Github, ExternalLink, GitPullRequest, CheckCircle2, UserCheck, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { teamMembers } from '../data/teamData';
import { TeamMember } from '../types';

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [filterRole, setFilterRole] = useState<string>('all');

  const filteredMembers = filterRole === 'all'
    ? teamMembers
    : teamMembers.filter((m) => m.role.toLowerCase().includes(filterRole.toLowerCase()));

  return (
    <section id="team" className="py-20 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              <Users className="w-4 h-4" />
              <span>BSE2201 Group 6 Engineering Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Meet the 10 Developers Behind AttendQR
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              Every team member holds an assigned development role with tangible code contributions, 
              tracked Git branches, Jira sprint tasks, and peer code reviews as stipulated by the assignment guidelines.
            </p>
          </div>

          {/* Quick filter tabs */}
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilterRole('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterRole === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Members (10)
            </button>
            <button
              type="button"
              onClick={() => setFilterRole('Leader')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterRole === 'Leader' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Leadership
            </button>
            <button
              type="button"
              onClick={() => setFilterRole('Frontend')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterRole === 'Frontend' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Frontend Engineers
            </button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => {
            const isSelected = selectedMember?.id === member.id;
            return (
              <div
                key={member.id}
                className={`p-6 rounded-2xl bg-slate-900/60 border transition-all flex flex-col justify-between ${
                  isSelected ? 'border-blue-500 shadow-lg shadow-blue-500/10' : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Bar inside card: Avatar & ID */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-base shadow-md shadow-blue-600/20">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-blue-300">
                          {member.name}
                        </h3>
                        <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-0.5">
                          <span>SN: {member.studentNo}</span>
                          <span className="text-slate-600">·</span>
                          <span className="text-blue-400 font-semibold">{member.jiraTaskKey}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Primary Role */}
                  <div className="text-xs font-medium text-blue-300 bg-blue-950/40 border border-blue-900/50 px-2.5 py-1 rounded-lg mb-3">
                    {member.role}
                  </div>

                  {/* Purpose */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {member.rolePurpose}
                  </p>

                  {/* Responsibilities list (expandable or preview) */}
                  <div className="space-y-1.5 mb-4">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Key Deliverables:
                    </div>
                    {member.responsibilities.slice(0, 3).map((r, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: GitHub Link, Jira Branch, & Reviewer */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-[11px] truncate max-w-[180px]" title={member.gitBranch}>
                      {member.gitBranch}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Peer: <strong className="text-slate-300">{member.reviewer}</strong>
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={member.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-xs font-medium text-slate-200 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Profile</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelectedMember(isSelected ? null : member)}
                      className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-medium py-1 px-2 cursor-pointer"
                    >
                      <span>{isSelected ? 'Less info' : 'View full plan'}</span>
                      {isSelected ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Expanded Detail Panel */}
                  {isSelected && (
                    <div className="mt-3 p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 text-xs space-y-2 animate-in fade-in duration-150">
                      <div className="font-semibold text-white">Full Assignment Responsibilities:</div>
                      <ul className="list-disc list-inside space-y-1 text-slate-300">
                        {member.responsibilities.map((res, idx) => (
                          <li key={idx} className="leading-relaxed">{res}</li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                        <span className="text-white font-medium">Expected Deliverable:</span> {member.expectedDeliverable}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
