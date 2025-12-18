export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "tools" | "other";
}

