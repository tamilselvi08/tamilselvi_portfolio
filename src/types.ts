export interface SkillItem {
  name: string;
  category: 'programming' | 'web' | 'database' | 'embedded' | 'interests';
  description: string;
  tag: string;
  iconName: string;
  hardwareLevel?: string;
  specs?: string;
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'Software' | 'Embedded';
  responsibilities: string[];
  flow: string[];
  techStack: string[];
  badge: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  category: 'Web Development' | 'Embedded Systems & Accessibility';
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  flow?: string[];
  pipelineDetails?: {
    step: string;
    description: string;
  }[];
  modalDetails: {
    problem: string;
    idea: string;
    implementation: string;
    testing: string;
    whatILearned: string[];
  };
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialId?: string;
  date?: string;
  skillsGained: string[];
  link: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreLabel: string;
  location?: string;
  highlights?: string[];
}

export interface InterestArea {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface LearningItem {
  title: string;
  goal: string;
  category: string;
  progress: number;
}
