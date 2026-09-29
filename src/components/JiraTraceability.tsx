import { useState } from 'react';
import { Kanban, GitPullRequest, GitBranch, Bug, CheckCircle2, Clock, Filter, AlertCircle, FileText, ExternalLink } from 'lucide-react';
import { jiraTasks, defectsList } from '../data/jiraData';
import { teamMembers } from '../data/teamData';
import { JiraTask } from '../types';

export function JiraTraceability() {
  const [activeTab, setActiveTab] = useState<'board' | 'defects' | 'contribution'>('board');
  const [selectedTask, setSelectedTask] = useState<JiraTask | null>(null);
  const [selectedStage, setSelectedStage] = useState<string>('all');

  const stages = ['To Do', 'In Progress', 'In Review', 'Done'] as const;

  return (
    <section id="traceability" className="py-20 bg-slate-900/40 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              <Kanban className="w-4 h-4" />
              <span>Project Management & Version Control</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Jira & Git Contribution Traceability
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              Full transparent alignment between Jira user stories, task-linked Git feature branches, 
              peer pull request reviews, defect tracking, and member contribution evidence.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('board')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'board' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Jira Board (10 Tasks)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('contribution')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'contribution' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Contribution Table
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('defects')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'defects' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Defect Log ({defectsList.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Jira Kanban Board */}
        {activeTab === 'board' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Quick Filter Bar */}
            <div className="flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span>Filter Column:</span>
                <button
                  type="button"
                  onClick={() => setSelectedStage('all')}
                  className={`px-2.5 py-1 rounded-md border text-xs cursor-pointer ${
                    selectedStage === 'all' ? 'bg-slate-800 border-slate-700 text-white' : 'border-slate-800 text-slate-400'
                  }`}
                >
                  All Columns
                </button>
                {stages.map((stage) => (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => setSelectedStage(stage)}
                    className={`px-2.5 py-1 rounded-md border text-xs cursor-pointer ${
                      selectedStage === stage ? 'bg-slate-800 border-slate-700 text-white' : 'border-slate-800 text-slate-400'
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px]">
                <span>Project Key: <strong className="text-white">SCH</strong> (School Attendance)</span>
              </div>
            </div>

            {/* Kanban Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stages.map((stage) => {
                const tasksInStage = jiraTasks.filter((t) => t.status === stage);
                const isFilteredOut = selectedStage !== 'all' && selectedStage !== stage;

                if (isFilteredOut) return null;

                return (
                  <div
                    key={stage}
                    className="bg-slate-950/80 rounded-2xl border border-slate-800/90 p-4 flex flex-col min-h-[420px]"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">{stage}</span>
                        <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded-full">
                          {tasksInStage.length}
                        </span>
                      </div>
                      {stage === 'Done' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    </div>

                    <div className="space-y-3 flex-1">
                      {tasksInStage.map((task) => (
                        <div
                          key={task.key}
                          onClick={() => setSelectedTask(task)}
                          className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all cursor-pointer group shadow-sm"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono font-bold text-blue-400 group-hover:text-blue-300">
                              {task.key}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                              {task.priority}
                            </span>
                          </div>

                          <h4 className="text-xs font-medium text-white group-hover:text-blue-200 line-clamp-2">
                            {task.title}
                          </h4>

                          <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                            <span className="truncate max-w-[120px]" title={task.assignee}>{task.assignee}</span>
                            <div className="flex items-center gap-1 font-mono text-emerald-400">
                              <GitPullRequest className="w-3 h-3" />
                              <span>{task.pullRequest}</span>
                            </div>
                          </div>
                        </div>
                      ))}

                      {tasksInStage.length === 0 && (
                        <div className="h-32 flex items-center justify-center text-xs text-slate-500 italic border border-dashed border-slate-800/60 rounded-xl">
                          No tasks in this stage
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Contribution Table (Direct Submission Deliverable for Lecturer) */}
        {activeTab === 'contribution' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-300">
              <div>
                <span className="font-semibold text-white">Official Assignment Deliverable #4:</span> Complete Contribution Table listing all 10 students, student numbers, GitHub handles, Jira task keys, and pull request links.
              </div>
              <div className="font-mono text-blue-400 shrink-0">100% Traceable Evidence</div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900/90 text-xs font-mono text-slate-400 uppercase border-b border-slate-800">
                  <tr>
                    <th scope="col" className="py-3.5 px-4">Member Name</th>
                    <th scope="col" className="py-3.5 px-4">Student No.</th>
                    <th scope="col" className="py-3.5 px-4">GitHub Profile</th>
                    <th scope="col" className="py-3.5 px-4">Assigned Role</th>
                    <th scope="col" className="py-3.5 px-4">Jira Task</th>
                    <th scope="col" className="py-3.5 px-4">Git Branch</th>
                    <th scope="col" className="py-3.5 px-4">Peer Reviewer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300 text-xs">
                  {teamMembers.map((m) => (
                    <tr key={m.id} className="hover:bg-slate-900/50 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-white whitespace-nowrap">
                        {m.name}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-slate-300 whitespace-nowrap">
                        {m.studentNo}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <a
                          href={m.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-mono text-xs"
                        >
                          <span>@{m.githubUsername}</span>
                          <ExternalLink className="w-3 h-3 text-slate-500" />
                        </a>
                      </td>
                      <td className="py-3.5 px-4 text-slate-300 min-w-[200px]">
                        {m.role}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-blue-400">
                        {m.jiraTaskKey}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[11px] text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <GitBranch className="w-3 h-3 text-slate-500 shrink-0" />
                          <span className="truncate max-w-[160px]">{m.gitBranch}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-emerald-400 font-medium whitespace-nowrap">
                        {m.reviewer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Defect Tracking & Resolution Ledger */}
        {activeTab === 'defects' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300">
              <span className="font-semibold text-white">Section 3 Requirement:</span> "Record defects and track their resolution." Below is the verified quality assurance audit log resolved during our sprint cycle.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {defectsList.map((defect) => (
                <div
                  key={defect.key}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-rose-400">{defect.key}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/40 text-rose-300 border border-rose-800/80">
                        {defect.severity}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/80 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      {defect.status}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-white">{defect.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{defect.description}</p>

                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                    <div className="text-emerald-400 font-semibold text-[11px] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Resolution:</span>
                    </div>
                    <p className="text-xs leading-relaxed">{defect.resolution}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Reported by: <strong className="text-slate-400">{defect.reporter}</strong></span>
                    <span>Resolved by: <strong className="text-slate-400">{defect.resolver}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal / Slide-over for Task Details */}
        {selectedTask && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 max-w-xl w-full p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono font-bold text-blue-400">{selectedTask.key}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/80 font-mono">
                    {selectedTask.status}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedTask(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-900 cursor-pointer"
                >
                  &times;
                </button>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">{selectedTask.title}</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{selectedTask.description}</p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-white uppercase tracking-wider">Acceptance Criteria:</div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedTask.acceptanceCriteria.map((ac, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ac}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400">Assignee:</span>
                  <div className="font-semibold text-white mt-0.5">{selectedTask.assignee}</div>
                </div>
                <div>
                  <span className="text-slate-400">Git Feature Branch:</span>
                  <div className="font-mono text-blue-400 truncate mt-0.5">{selectedTask.gitBranch}</div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedTask(null)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold cursor-pointer"
                >
                  Close Task Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
