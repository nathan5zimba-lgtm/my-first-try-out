# AttendQR - BSE2201 Group 6 Project

## 1. Project Overview
**AttendQR** is a dynamic, session-authenticated QR code attendance management system developed for **BSE2201: Software Engineering Foundations** (Group 6).

The platform addresses the severe inefficiencies, proxy sign-ins, and data silos created by manual paper roll-sheets in university lecture halls. Through dynamic cryptographic QR tokens, local device session locking, and relational database compound constraints `(studentId, sessionId)`, AttendQR enables university students to record authenticated classroom attendance in under 5 seconds while automatically generating live structured ledger data for faculty and academic registry staff.

---

## 2. Technologies Used
- **Frontend Framework**: React 19 + TypeScript (Vite bundler)
- **Styling & Design System**: Tailwind CSS v4, custom Plus Jakarta Sans & Space Grotesk typography
- **Iconography & Animation**: Lucide React, Motion
- **Project Management**: Jira (Agile Kanban workflow: To Do, In Progress, In Review, Done)
- **Version Control**: Git & GitHub with task-linked branch naming (`SCH-*-*`) and peer pull request reviews

---

## 3. Team Members & Responsibilities (10 Members)

| Student Name | Student No. | Role & Responsibility | GitHub Profile | Jira Task | Git Branch |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Kamboyi Rapheal** | 2510928 | Team Leader / Project Management + Frontend | [@rapheal-kamboyi](https://github.com/rapheal-kamboyi) | `SCH-01` | `SCH-01-project-setup-integration` |
| **Daka Wesley** | 2511586 | Landing Page — Hero / Home Section | [@wesley-daka](https://github.com/wesley-daka) | `SCH-02` | `SCH-02-hero-home-section` |
| **Silungwe Lanzi** | 2511587 | Problem + Proposed System Sections / Frontend | [@lanzi-silungwe](https://github.com/lanzi-silungwe) | `SCH-03` | `SCH-03-problem-proposed-system` |
| **Zimba Nathan** | 2510936 | Features & Benefits Section | [@nathan-zimba](https://github.com/nathan-zimba) | `SCH-04` | `SCH-04-features-benefits-section` |
| **Salinga Mwansa** | 2510963 | Team Members Section | [@mwansa-salinga](https://github.com/mwansa-salinga) | `SCH-05` | `SCH-05-team-members-section` |
| **Kamaloni Ackson** | 2300780 | Navigation / Footer / Contact | [@ackson-kamaloni](https://github.com/ackson-kamaloni) | `SCH-06` | `SCH-06-nav-footer-contact` |
| **Banda Madalitso** | 2120992 | Responsive Design / Mobile UI | [@madalitso-banda](https://github.com/madalitso-banda) | `SCH-07` | `SCH-07-responsive-mobile-ui` |
| **Nathan Nansenga** | 2510923 | Visual Assets / UI Styling + Frontend | [@nathan-nansenga](https://github.com/nathan-nansenga) | `SCH-08` | `SCH-08-visual-assets-styling` |
| **Chimbokaila Remmy** | 2300084 | Testing / QA + Frontend | [@remmy-chimbokaila](https://github.com/remmy-chimbokaila) | `SCH-09` | `SCH-09-testing-qa-fixes` |
| **Chileshe Kondwani** | 2511602 | Technical Documentation & Quality Integration | [@kondwani-chileshe](https://github.com/kondwani-chileshe) | `SCH-10` | `SCH-10-docs-traceability-matrix` |

---

## 4. Setup and Development Instructions

### Prerequisites
- Node.js (version 20 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/group6-bse2201/attendqr-landing.git

# Navigate to the project root
cd attendqr-landing

# Install dependencies
npm install
```

### Running Locally
```bash
# Start local development server
npm run dev
```
The application will launch at `http://localhost:3000`.

### Production Build
```bash
# Compile and build production bundle
npm run build
```

---

## 5. Live Deployment URL
- **Public Deployed Landing Page**: [https://ais-dev-es2jgbsb7nofhhvsw7tznf-772680297257.europe-west2.run.app](https://ais-dev-es2jgbsb7nofhhvsw7tznf-772680297257.europe-west2.run.app)
- **Shared Access Link**: [https://ais-pre-es2jgbsb7nofhhvsw7tznf-772680297257.europe-west2.run.app](https://ais-pre-es2jgbsb7nofhhvsw7tznf-772680297257.europe-west2.run.app)
