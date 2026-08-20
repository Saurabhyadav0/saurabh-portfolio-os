import { ReactElement } from 'react';

export interface WindowState {
  id: string;
  title: string;
  content: ReactElement;
  x: number;
  y: number;
  zIndex: number;
  width?: number;
  height?: number;
  isMinimized?: boolean;
  isMaximized?: boolean;
  hideHeader?: boolean;
}

export interface DesktopIcon {
  id: string;
  label: string;
  app: string;
  icon: ReactElement;
  bg: string;
  x: number;
  y: number;
}

export interface Song {
  id: number;
  title: string;
  artist: string;
  url: string;
  cover: string;
}

export interface Project {
  id: string;
  title: string;
  date: string;
  github: string;
  live?: string;
  description: string;
  status: string;
  tags: string[];
  stack: string[];
  chips: string[];
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  tag: string;
  description: string;
  chips: string[];
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface TechStackGroup {
  name: string;
  items: string[];
}

export interface WorkPrinciple {
  icon: string;
  title: string;
  body: string;
}

export interface OpenToRole {
  title: string;
  description: string;
}

export interface Certification {
  title: string;
  school: string;
  link: string;
  period: string;
}

export interface ResumeData {
  name: string;
  role: string;
  headline: string;
  subheadline: string;
  summary: string;
  location: string;
  education: string;
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  stats: StatItem[];
  aboutHeading: string;
  aboutBody: string;
  techStackGroups: TechStackGroup[];
  experiences: Experience[];
  projects: Project[];
  howIWork: WorkPrinciple[];
  openToRoles: OpenToRole[];
  availability: {
    types: string;
    location: string;
    status: string;
  };
  certification: Certification;
}

export type ContextMenuState = {
  x: number;
  y: number;
} | null;

export type Theme = 'dark' | 'light';

