export interface ExperienceCardProps {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    technologies: string[];
    image?: string;
    projectUrl?: string;
  }
  
  export interface Experience extends ExperienceCardProps {}