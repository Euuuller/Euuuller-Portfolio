export interface ProjectDetails {
  problem: string;
  solution: string;
  impact: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'analytics' | 'ml' | 'viz' | 'all';
  image: string;
  tech: string[];
  metrics?: string[];
  link?: string;
  demoUrl?: string;
  details?: ProjectDetails; // New field for modal content
}

export interface Skill {
  name: string;
  category: string;
}

export type NavItem = {
  label: string;
  href: string;
};