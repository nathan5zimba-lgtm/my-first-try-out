export interface TeamMember {
  id: string;
  name: string;
  studentNo: string;
  role: string;
  rolePurpose: string;
  responsibilities: string[];
  expectedDeliverable: string;
  githubUsername: string;
  githubUrl: string;
  jiraTaskKey: string;
  gitBranch: string;
  pullRequestUrl: string;
  reviewer: string;
  avatarSeed: string;
}

export type JiraStatus = 'To Do' | 'In Progress' | 'In Review' | 'Done';

export interface JiraTask {
  key: string;
  title: string;
  assignee: string;
  studentNo: string;
  status: JiraStatus;
  priority: 'High' | 'Medium' | 'Highest';
  dueDate: string;
  description: string;
  acceptanceCriteria: string[];
  gitBranch: string;
  pullRequest: string;
  commitsCount: number;
}

export interface DefectItem {
  key: string;
  title: string;
  severity: 'Critical' | 'Major' | 'Minor';
  reporter: string;
  resolver: string;
  status: 'Resolved' | 'Closed';
  description: string;
  resolution: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  courseCode: string;
  sessionId: string;
  date: string;
  time: string;
  status: 'Present' | 'Late';
  deviceFingerprint: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  roleType: string;
  subject: string;
  message: string;
}
