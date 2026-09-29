import { JiraTask, DefectItem } from '../types';

export const jiraTasks: JiraTask[] = [
  {
    key: 'SCH-01',
    title: 'Initialize repository, project blueprint & architecture integration',
    assignee: 'Kamboyi Rapheal',
    studentNo: '2510928',
    status: 'Done',
    priority: 'Highest',
    dueDate: '2026-09-24',
    description: 'Establish the project repository, Vite TypeScript configuration, Tailwind CSS theme, component directory structure, and Git workflow standards.',
    acceptanceCriteria: [
      'Repository initialized with clean directory structure and strict TypeScript configuration',
      'Design tokens and color palette established matching BSE2201 visual identity',
      'All 10 project contributors invited with branch protection rules configured',
      'Jira project board linked to GitHub organization and automated commit tracking active'
    ],
    gitBranch: 'SCH-01-project-setup-integration',
    pullRequest: '#1',
    commitsCount: 6
  },
  {
    key: 'SCH-02',
    title: 'Build responsive Hero / Home section with primary value proposition',
    assignee: 'Daka Wesley',
    studentNo: '2511586',
    status: 'Done',
    priority: 'High',
    dueDate: '2026-09-25',
    description: 'Implement the landing page Hero section featuring the system value proposition, call-to-actions, and high-fidelity lecture hall QR projection visual.',
    acceptanceCriteria: [
      'Bold primary headline communicating the QR attendance solution clearly',
      'Actionable primary CTAs linked smoothly to the interactive simulator and problem breakdown',
      'Visual asset integration with responsive scaling across mobile and 1440px desktop viewports',
      'Semantic HTML5 markup with zero console errors or broken media'
    ],
    gitBranch: 'SCH-02-hero-home-section',
    pullRequest: '#2',
    commitsCount: 5
  },
  {
    key: 'SCH-03',
    title: 'Implement Problem Analysis & Proposed System 9-step architecture',
    assignee: 'Silungwe Lanzi',
    studentNo: '2511587',
    status: 'Done',
    priority: 'High',
    dueDate: '2026-09-25',
    description: 'Develop the comprehensive Problem section explaining manual paper attendance bottlenecks and the 9-step proposed QR attendance architecture.',
    acceptanceCriteria: [
      'Thorough articulation of registry challenges, proxy signing, and wasted lecture time',
      'Complete 9-step interactive flow from lecturer session creation to registry persistence',
      'Comparative evaluation table contrasting traditional roll-call against AttendQR',
      'Diagrammatic visual representation of system data flow and security validation'
    ],
    gitBranch: 'SCH-03-problem-proposed-system',
    pullRequest: '#3',
    commitsCount: 7
  },
  {
    key: 'SCH-04',
    title: 'Construct Features & Multi-Stakeholder Benefits section',
    assignee: 'Zimba Nathan',
    studentNo: '2510936',
    status: 'Done',
    priority: 'High',
    dueDate: '2026-09-26',
    description: 'Create the core Features section (Dynamic QR, Verification, Duplicate Prevention, Timestamps) and tailored Benefits for Students, Lecturers, and Registry.',
    acceptanceCriteria: [
      'Interactive tabs or cards highlighting the 4 core pillars of AttendQR',
      'Clear breakdown of benefits segmented by stakeholder group (Student, Faculty, Registry)',
      'Explanation of anti-proxy security and device fingerprinting logic',
      'Consistent typography, spacing, and responsive card layouts'
    ],
    gitBranch: 'SCH-04-features-benefits-section',
    pullRequest: '#4',
    commitsCount: 8
  },
  {
    key: 'SCH-05',
    title: 'Build Team Members showcase section with GitHub & Jira links',
    assignee: 'Salinga Mwansa',
    studentNo: '2510963',
    status: 'Done',
    priority: 'High',
    dueDate: '2026-09-26',
    description: 'Design and implement the Team section introducing all 10 members, their student IDs, primary project roles, specific deliverables, and verified GitHub profile URLs.',
    acceptanceCriteria: [
      'Comprehensive cards for all 10 team members with consistent visual hierarchy',
      'Accurate student IDs and official assigned responsibilities matching the project plan',
      'Direct functional links to each member\'s GitHub profile and pull requests',
      'Responsive grid layout adapting from 1 column on mobile to 3 columns on desktop'
    ],
    gitBranch: 'SCH-05-team-members-section',
    pullRequest: '#5',
    commitsCount: 6
  },
  {
    key: 'SCH-06',
    title: 'Build responsive 3-zone Topbar, Contact form, and Institutional Footer',
    assignee: 'Kamaloni Ackson',
    studentNo: '2300780',
    status: 'Done',
    priority: 'High',
    dueDate: '2026-09-26',
    description: 'Implement the site-wide navigation header adhering to the 3-zone contract, interactive contact enquiry form with instant feedback, and academic footer.',
    acceptanceCriteria: [
      'Header follows single-element brand mark, 4-6 text navigation links, and primary CTA',
      'Smooth scroll behavior targeting all primary section IDs without layout shifts',
      'Working contact form with full input validation and instantaneous submission confirmation',
      'Institutional footer with course BSE2201 information, academic disclaimer, and links'
    ],
    gitBranch: 'SCH-06-nav-footer-contact',
    pullRequest: '#6',
    commitsCount: 5
  },
  {
    key: 'SCH-07',
    title: 'Execute Responsive Design audit and mobile UI optimization',
    assignee: 'Banda Madalitso',
    studentNo: '2120992',
    status: 'Done',
    priority: 'High',
    dueDate: '2026-09-27',
    description: 'Perform viewport audits across 360px mobile up to 1440px desktop, eliminate horizontal overflow, implement mobile navigation menu, and ensure 44px touch targets.',
    acceptanceCriteria: [
      'Zero horizontal scrollbar or element overflow on viewports between 320px and 1440px',
      'Mobile hamburger drawer with smooth transitions and click-outside dismissal',
      'Touch target sizes for all interactive elements conform to WCAG AA guidelines (>= 44px)',
      'Fixed navigation aggregate height stays well below 15% of mobile viewport'
    ],
    gitBranch: 'SCH-07-responsive-mobile-ui',
    pullRequest: '#7',
    commitsCount: 7
  },
  {
    key: 'SCH-08',
    title: 'Design visual assets, architectural diagrams, and UI styling tokens',
    assignee: 'Nathan Nansenga',
    studentNo: '2510923',
    status: 'Done',
    priority: 'Medium',
    dueDate: '2026-09-27',
    description: 'Curate high-fidelity imagery, generate system architecture visual models, establish clean hairline dividers, and maintain UI consistency.',
    acceptanceCriteria: [
      'Cohesive visual language combining slate neutrals with vibrant blue and emerald accents',
      'Zero unstyled or broken image frames with resilient CSS/SVG fallback containers',
      'Consistent border radiuses, typography tracking, and card elevation hierarchy',
      'Visual asset optimization for rapid load times and crisp rendering'
    ],
    gitBranch: 'SCH-08-visual-assets-styling',
    pullRequest: '#8',
    commitsCount: 5
  },
  {
    key: 'SCH-09',
    title: 'Conduct QA testing, link verification, and Jira defect tracking',
    assignee: 'Chimbokaila Remmy',
    studentNo: '2300084',
    status: 'Done',
    priority: 'High',
    dueDate: '2026-09-27',
    description: 'Formulate comprehensive QA testing checklist, verify all internal anchors and external links, stress-test forms, and resolve recorded defects.',
    acceptanceCriteria: [
      'QA checklist executed covering navigation, form submission, and responsive layouts',
      'All internal anchor IDs and external GitHub profile URLs verified and functional',
      'Defects logged in Jira with severity, reproduction steps, and verified resolution',
      'Final regression test passed with zero blocking defects prior to presentation'
    ],
    gitBranch: 'SCH-09-testing-qa-fixes',
    pullRequest: '#9',
    commitsCount: 8
  },
  {
    key: 'SCH-10',
    title: 'Agile documentation, README preparation & Contribution Matrix',
    assignee: 'Chileshe Kondwani',
    studentNo: '2511602',
    status: 'Done',
    priority: 'Medium',
    dueDate: '2026-09-27',
    description: 'Prepare the official submission contribution matrix, README setup documentation, and Jira traceability table for lecturer evaluation.',
    acceptanceCriteria: [
      'Complete contribution table mapping all 10 members to their Jira tasks, branches, and PRs',
      'Agile methodology breakdown (MVP definition, sprint cycle, feedback iteration)',
      'Clear instructions for running and evaluating the deployed landing page',
      'Peer review verification documented for every merged branch'
    ],
    gitBranch: 'SCH-10-docs-traceability-matrix',
    pullRequest: '#10',
    commitsCount: 4
  }
];

export const defectsList: DefectItem[] = [
  {
    key: 'DEF-01',
    title: 'Mobile navigation drawer did not close automatically upon anchor click',
    severity: 'Major',
    reporter: 'Chimbokaila Remmy',
    resolver: 'Kamaloni Ackson',
    status: 'Resolved',
    description: 'On mobile viewports (< 768px), tapping an anchor link inside the opened navigation drawer scrolled to the section but left the backdrop open, obscuring content.',
    resolution: 'Added an automatic drawer closing callback in the navigation click handler that closes the drawer immediately upon selecting any anchor.'
  },
  {
    key: 'DEF-02',
    title: 'Duplicate student ID submission allowed in prototype state during fast clicks',
    severity: 'Critical',
    reporter: 'Banda Madalitso',
    resolver: 'Zimba Nathan',
    status: 'Resolved',
    description: 'When the student scan simulator was clicked repeatedly in rapid succession, race conditions could insert two attendance records for the same student ID.',
    resolution: 'Implemented synchronous set checks and UI submission disabling while processing to guarantee strict (studentId, sessionId) uniqueness.'
  },
  {
    key: 'DEF-03',
    title: 'High-contrast typography contrast on dark backgrounds in feature cards',
    severity: 'Minor',
    reporter: 'Silungwe Lanzi',
    resolver: 'Nathan Nansenga',
    status: 'Resolved',
    description: 'Certain secondary metadata text in the features section used slate-500 on slate-900 which failed WCAG AA 4.5:1 contrast standards.',
    resolution: 'Adjusted color token to slate-400 with optical tracking compensation to meet WCAG AA contrast ratio of 5.8:1.'
  },
  {
    key: 'DEF-04',
    title: 'Contact form accepted empty whitespace in subject and message fields',
    severity: 'Minor',
    reporter: 'Chimbokaila Remmy',
    resolver: 'Kamaloni Ackson',
    status: 'Resolved',
    description: 'Submitting a message with only spacebar characters passed client-side required attributes without notifying the user.',
    resolution: 'Added trimmed string length verification with red alert validation feedback before triggering submission state.'
  }
];
