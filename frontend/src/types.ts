export interface Project {
  id: string;
  name: string;
  displayName: string;
  tagline: string;
  description: string;
  customDescription: string;
  githubOwner: string;
  githubRepo: string;
  githubUrl: string;
  homepage?: string;
  primaryLanguage: string;
  languages: Record<string, number>;
  topics: string[];
  stars: number;
  forks: number;
  openIssues?: number;
  featured: boolean;
  order: number;
  badgeColor: string;
  bpm?: string;
  soundMood?: string;
  accentColor?: string;
  readmeMarkdown?: string;
  lastUpdated?: string;
}

export interface CvData {
  personal: {
    name: string;
    shortName: string;
    role: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    statement: string;
    artisticPhilosophy: string;
  };
  education: {
    institution: string;
    campus: string;
    degree: string;
    cycle: string;
    period: string;
    location: string;
  };
  skillCategories: {
    category: string;
    icon: string;
    color: string;
    skills: string[];
  }[];
  certifications: {
    title: string;
    issuer: string;
    badge: string;
  }[];
  musicalInfluences: {
    name: string;
    genre: string;
    vibe: string;
  }[];
}
