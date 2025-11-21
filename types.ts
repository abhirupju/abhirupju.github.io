export enum ThemeType {
  MINIMALIST = 'MINIMALIST',
  MODERN = 'MODERN',
  CYBER = 'CYBER',
}

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  link: string;
  tags: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  content: string;
  relatedPaperId?: string;
  link?: string;
}

export interface Student {
  id: string;
  name: string;
  topic: string;
  type: 'PhD' | 'Masters' | 'Undergrad';
}

export interface Blog {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverImage?: string;
}

export interface Profile {
  name: string;
  title: string;
  affiliation: string;
  email: string;
  scholarLink: string;
  githubLink?: string;
  twitterLink?: string;
  linkedinLink?: string;
  bio: string;
  interests: string[];
}