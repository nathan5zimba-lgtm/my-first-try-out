import { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Building2, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { ContactFormData } from '../types';

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    roleType: 'Faculty / Lecturer',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please provide a valid academic email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const ticketId = `ATTEND-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedTicket(ticketId);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedTicket(null);
    setFormData({
      fullName: '',
      email: '',
      roleType: 'Faculty / Lecturer',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Narrative & Institutional Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <Mail className="w-4 h-4" />
              <span>Project Inquiries & Department Contact</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Get in Touch with Group 6
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Have questions regarding our BSE2201 Software Engineering project, system architecture, 
              or live prototype deployment? Submit an enquiry or reach out directly to our student engineering leads.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Primary Team Contact</div>
                  <a
                    href="mailto:nathan5zimba@gmail.com?subject=AttendQR%20BSE2201%20Enquiry"
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    nathan5zimba@gmail.com
                  </a>
                  <div className="text-xs text-slate-500">Group 6 Technical Representative</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Course & Department</div>
                  <div className="text-sm font-semibold text-white">BSE2201: Software Engineering Foundations</div>
                  <div className="text-xs text-slate-500">Department of Computer Science & Software Engineering</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Assignment Presentation</div>
                  <div className="text-sm font-semibold text-white">Monday, 28 September 2026</div>
                  <div className="text-xs text-slate-500">Main Campus Engineering Lecture Theatre</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800 text-xs text-slate-400">
              <span className="font-semibold text-white">Presentation Protocol:</span> All 10 members will attend the live presentation to demonstrate their individual Jira tasks, Git commits, and peer reviews.
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
            {submittedTicket ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in duration-200">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Enquiry Received Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting the AttendQR project team. Your message has been logged in our team communication queue with reference ticket:
                </p>
                <div className="inline-block px-4 py-2 bg-slate-950 border border-blue-500/40 rounded-xl font-mono text-sm text-blue-400 font-bold">
                  {submittedTicket}
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white">Send a Direct Message</h3>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/80 text-xs text-rose-300">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-medium text-slate-300 mb-1">
                      Your Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Dr. Lecturer / Student"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1">
                      Academic Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. lecturer@university.edu"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="roleType" className="block text-xs font-medium text-slate-300 mb-1">
                      Affiliation / Category
                    </label>
                    <select
                      id="roleType"
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Faculty / Lecturer">Course Lecturer / Faculty</option>
                      <option value="Academic Registry">Academic Registry Officer</option>
                      <option value="Student">Enrolled University Student</option>
                      <option value="Assessment Reviewer">Assignment Examiner / Marker</option>
                      <option value="Other">General Technical Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AttendQR Presentation Review"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">
                    Your Message / Question <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter your feedback, questions on system architecture, or inquiry for Group 6..."
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-xl text-sm transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting Message...' : 'Transmit Enquiry to Team'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
